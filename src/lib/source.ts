import type { InferPageType, LoaderPlugin } from 'fumadocs-core/source';
import { loader } from 'fumadocs-core/source';

import {
  aiDocs,
  apiDocs,
  cliDocs,
  contributingDocs,
  docs,
  extensionDevelopmentDocs,
  fleetOpsDocs,
  ledgerDocs,
  palletDocs,
  storefrontDocs,
  uiDocs,
} from '@/.source';

// Plugin: when a page declares `sidebarTitle` in frontmatter, use it as the
// sidebar label. The page's H1, browser title, and `<DocsTitle>` continue to
// use the regular `title` field. Lets a section like "Settings" have short
// sidebar labels (e.g. "Map") while the page reads "Map Settings".
const sidebarTitlePlugin: LoaderPlugin = {
  name: 'sidebar-title-override',
  transformPageTree: {
    file(node, filePath) {
      if (!filePath) return node;
      const page = this.storage.read(filePath);
      if (page?.format !== 'page') return node;
      const sidebarTitle = (page.data as { sidebarTitle?: unknown }).sidebarTitle;
      if (typeof sidebarTitle === 'string' && sidebarTitle.length > 0) {
        return { ...node, name: sidebarTitle };
      }
      return node;
    },
  },
};

// Platform — general docs, getting started, IAM, developer console
export const source = loader({
  baseUrl: '/docs',
  source: { files: docs.toFumadocsSource().files() },
  plugins: [sidebarTitlePlugin],
});

// Fleet-Ops — fleet management extension
export const fleetOpsSource = loader({
  baseUrl: '/docs/fleet-ops',
  source: { files: fleetOpsDocs.toFumadocsSource().files() },
  plugins: [sidebarTitlePlugin],
});

// Storefront — e-commerce extension
export const storefrontSource = loader({
  baseUrl: '/docs/storefront',
  source: { files: storefrontDocs.toFumadocsSource().files() },
  plugins: [sidebarTitlePlugin],
});

// Pallet — warehouse & inventory extension
export const palletSource = loader({
  baseUrl: '/docs/pallet',
  source: { files: palletDocs.toFumadocsSource().files() },
  plugins: [sidebarTitlePlugin],
});

// Ledger — finance & billing extension
export const ledgerSource = loader({
  baseUrl: '/docs/ledger',
  source: { files: ledgerDocs.toFumadocsSource().files() },
  plugins: [sidebarTitlePlugin],
});

// Fleetbase AI — operations copilot and AI capability framework
export const aiSource = loader({
  baseUrl: '/docs/ai',
  source: { files: aiDocs.toFumadocsSource().files() },
  plugins: [sidebarTitlePlugin],
});

// CLI — Fleetbase command-line tool
export const cliSource = loader({
  baseUrl: '/docs/cli',
  source: { files: cliDocs.toFumadocsSource().files() },
  plugins: [sidebarTitlePlugin],
});

// Fleetbase UI — ember-ui component library and mobile apps
export const uiSource = loader({
  baseUrl: '/docs/ui',
  source: { files: uiDocs.toFumadocsSource().files() },
  plugins: [sidebarTitlePlugin],
});

// Extension Development — building and extending Fleetbase
export const extensionDevelopmentSource = loader({
  baseUrl: '/docs/extension-development',
  source: { files: extensionDevelopmentDocs.toFumadocsSource().files() },
  plugins: [sidebarTitlePlugin],
});

// API Reference — REST API reference
export const apiSource = loader({
  baseUrl: '/docs/api',
  source: { files: apiDocs.toFumadocsSource().files() },
});

// Contributing — translations, code, docs, extensions, reporting issues
export const contributingSource = loader({
  baseUrl: '/docs/contributing',
  source: { files: contributingDocs.toFumadocsSource().files() },
  plugins: [sidebarTitlePlugin],
});

export type Page = InferPageType<typeof source>;
