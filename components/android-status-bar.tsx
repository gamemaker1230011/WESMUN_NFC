'use client';

import { useEffect } from 'react';
import { StatusBar } from '@capacitor/status-bar';

export default function StatusBarWrapper() {
    useEffect(() => {
        const initStatusBar = async () => {
            try {
                await StatusBar.setOverlaysWebView({ overlay: false });
            } catch (e) {
                console.warn('StatusBar plugin not available', e);
            }
        };
        initStatusBar().catch(console.error);
    }, []);

    return null;
}
