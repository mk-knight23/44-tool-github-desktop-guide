import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

/**
 * Global Error Boundary to catch UI crashes in React 19.
 * Provides a fallback UI and logs errors for diagnostics.
 */
export class GlobalErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('GitFlow | Uncaught UI Exception:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 text-center">
                    <div className="max-w-md w-full p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl">
                        <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">System Anomaly Captured</h2>
                        <p className="text-slate-400 mb-8 font-medium leading-relaxed">
                            The documentation pipeline encountered an unexpected node error. Attempting state reconciliation...
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full py-3 bg-git hover:bg-git/90 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-git/20"
                        >
                            Reload Pipeline
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
