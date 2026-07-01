import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

import { baseOptions } from '@/app/layout.config';
import { DocsToggle } from '@/components/docs/docs-toggle';
import { aiSource } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ '--fd-nav-height': 'var(--header-height)' } as React.CSSProperties}>
      <DocsLayout
        tree={aiSource.pageTree}
        {...baseOptions}
        nav={{ enabled: false, title: undefined }}
        containerProps={{ className: 'md:[&_#nd-page_article]:pt-6' }}
        sidebar={{
          collapsible: false,
          banner: <DocsToggle />,
        }}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
