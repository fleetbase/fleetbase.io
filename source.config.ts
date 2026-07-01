import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

// Frontmatter schema extended with `sidebarTitle` — overrides the sidebar label
// without changing the page H1, browser title, or `<DocsTitle>`. Optional per page.
const docFrontmatter = frontmatterSchema.extend({
  sidebarTitle: z.string().optional(),
});

// Platform — general docs, getting started, IAM, developer console
export const docs = defineDocs({
  dir: 'content/docs',
  docs: { files: ['*.mdx', 'platform/**', 'community/**'], schema: docFrontmatter },
  meta: { files: ['meta.json', 'platform/**/meta.json', 'community/meta.json'] },
});

// Fleet-Ops — fleet management extension
export const fleetOpsDocs = defineDocs({
  dir: 'content/docs/fleet-ops',
  docs: { files: ['**/*.mdx'], schema: docFrontmatter },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Storefront — e-commerce extension
export const storefrontDocs = defineDocs({
  dir: 'content/docs/storefront',
  docs: { files: ['**/*.mdx'], schema: docFrontmatter },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Pallet — warehouse & inventory extension
export const palletDocs = defineDocs({
  dir: 'content/docs/pallet',
  docs: { files: ['**/*.mdx'], schema: docFrontmatter },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Ledger — finance & billing extension
export const ledgerDocs = defineDocs({
  dir: 'content/docs/ledger',
  docs: { files: ['**/*.mdx'], schema: docFrontmatter },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Fleetbase AI — operations copilot and AI capability framework
export const aiDocs = defineDocs({
  dir: 'content/docs/ai',
  docs: { files: ['**/*.mdx'], schema: docFrontmatter },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// CLI — Fleetbase command-line tool
export const cliDocs = defineDocs({
  dir: 'content/docs/cli',
  docs: { files: ['**/*.mdx'], schema: docFrontmatter },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Fleetbase UI — ember-ui component library
export const uiDocs = defineDocs({
  dir: 'content/docs/ui',
  docs: { files: ['**/*.mdx'], schema: docFrontmatter },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Extension Development — building and extending Fleetbase
export const extensionDevelopmentDocs = defineDocs({
  dir: 'content/docs/extension-development',
  docs: { files: ['**/*.mdx'], schema: docFrontmatter },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// API Reference — REST API reference
export const apiDocs = defineDocs({
  dir: 'content/docs/api',
  docs: { files: ['**/*.mdx'], schema: docFrontmatter },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Contributing — translations, code, docs, extensions, reporting issues
export const contributingDocs = defineDocs({
  dir: 'content/docs/contributing',
  docs: { files: ['**/*.mdx'], schema: docFrontmatter },
  meta: { files: ['meta.json', '**/meta.json'] },
});

export default defineConfig();
