'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const SUPPORTED_DOCS_THEMES = new Set(['light', 'dark']);

export function DocsEmbedThemeSync() {
  const { setTheme } = useTheme();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const embed = params.get('embed');
    const theme = params.get('theme');

    if (embed === 'console' && theme && SUPPORTED_DOCS_THEMES.has(theme)) {
      setTheme(theme);
    }
  }, [setTheme]);

  return null;
}
