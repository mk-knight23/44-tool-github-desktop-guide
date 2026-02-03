import { useEffect, useState } from 'react';
import { Bookmark, BookmarkCheck, X } from 'lucide-react';

interface Bookmark {
  id: string;
  title: string;
  addedAt: number;
}

interface BookmarksProps {
  isOpen: boolean;
  onClose: () => void;
}

const SECTION_TITLES: Record<string, string> = {
  'intro': 'Introduction',
  'install': 'Installation',
  'quickstart': 'Quick Start',
  'branching': 'Branching',
  'committing': 'Committing',
  'pullrequests': 'Pull Requests',
};

export function BookmarksPanel({ isOpen, onClose }: BookmarksProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('doc-bookmarks');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('doc-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const navigateToBookmark = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-80 bg-slate-900 dark:bg-slate-900 border-l border-slate-700 shadow-2xl transform transition-transform duration-300">
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-git" />
          <span className="text-sm font-bold text-white uppercase tracking-wider">
            Bookmarks
          </span>
          <span className="px-2 py-0.5 bg-git/20 text-git text-xs font-bold rounded-full">
            {bookmarks.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Close bookmarks"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-73px)]">
        {bookmarks.length === 0 ? (
          <div className="text-center py-12">
            <Bookmark className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <p className="text-slate-500 text-sm">No bookmarks yet</p>
            <p className="text-slate-600 text-xs mt-2">
              Click the bookmark icon on any section to save it
            </p>
          </div>
        ) : (
          bookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="group flex items-start gap-3 p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <button
                onClick={() => navigateToBookmark(bookmark.id)}
                className="flex-1 text-left"
              >
                <p className="text-sm font-medium text-white group-hover:text-git transition-colors">
                  {bookmark.title}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {new Date(bookmark.addedAt).toLocaleDateString()}
                </p>
              </button>
              <button
                onClick={() => removeBookmark(bookmark.id)}
                className="p-1.5 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                title="Remove bookmark"
                aria-label="Remove bookmark"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

interface BookmarkButtonProps {
  sectionId: string;
}

export function BookmarkButton({ sectionId }: BookmarkButtonProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('doc-bookmarks');
    if (saved) {
      const parsed = JSON.parse(saved);
      setBookmarks(parsed);
      setIsBookmarked(parsed.some((b: Bookmark) => b.id === sectionId));
    }
  }, [sectionId]);

  const toggleBookmark = () => {
    if (isBookmarked) {
      const updated = bookmarks.filter((b) => b.id !== sectionId);
      setBookmarks(updated);
      setIsBookmarked(false);
    } else {
      const newBookmark: Bookmark = {
        id: sectionId,
        title: SECTION_TITLES[sectionId] || sectionId,
        addedAt: Date.now(),
      };
      const updated = [...bookmarks, newBookmark];
      setBookmarks(updated);
      setIsBookmarked(true);
    }
    localStorage.setItem('doc-bookmarks', JSON.stringify(
      isBookmarked ? bookmarks.filter((b) => b.id !== sectionId) : [...bookmarks, {
        id: sectionId,
        title: SECTION_TITLES[sectionId] || sectionId,
        addedAt: Date.now(),
      }]
    ));
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`p-2 transition-colors rounded-lg ${
        isBookmarked
          ? 'text-git bg-git/10 hover:bg-git/20'
          : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
      }`}
      title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      {isBookmarked ? (
        <BookmarkCheck className="w-5 h-5" />
      ) : (
        <Bookmark className="w-5 h-5" />
      )}
    </button>
  );
}
