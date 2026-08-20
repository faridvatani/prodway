# Contributing to Prodway

Thank you for contributing to Prodway.

## Development workflow

1. Fork the repository and create a focused branch from `main`.
2. Install dependencies with your local package manager.
3. Make a small, focused change and avoid unrelated formatting or design changes.
4. Run the project checks before opening a pull request:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

Equivalent Yarn, pnpm, or Bun commands are also supported.

## Code guidelines

- Use TypeScript and keep the existing type safety.
- Prefer Tailwind CSS utilities and shared theme tokens for styling.
- Preserve the existing responsive layout and animation behavior unless the change explicitly updates the design.
- Use stable React keys and type-only imports where appropriate.
- Keep accessibility in mind for interactive elements, images, and navigation.
- Update dependency lockfiles only when dependencies change.

## Pull requests

Include a clear description of the change, the checks you ran, and screenshots for visual changes. Keep each pull request limited to one logical change.
