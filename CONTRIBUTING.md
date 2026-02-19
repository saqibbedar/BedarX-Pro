# Contributing to BedarX Pro

Thank you for your interest in contributing to BedarX Pro! We welcome contributions of all kinds - bug fixes, new themes, suggestions, or improvements.

## Ways to Contribute

- **Report Issues** - Found a color that looks off? Let us know!
- **Suggestions** - Ideas for improvements or new features
- **New Themes** - Create an entirely new theme following our patterns
- **Fixes** - Improve existing themes with better colors or coverage

## Getting Started

1. **Fork & Clone**

   ```bash
   git clone https://github.com/YOUR-USERNAME/BedarX-Pro.git
   cd BedarX-Pro && npm install
   code .
   ```

2. **Understand the Structure**

   ```
   src/
   ├── colors.js      # UI color definitions for all themes
   ├── tokenColors.js # Syntax highlighting colors
   ├── theme.js       # Theme builder with token scopes
   └── index.js       # Build script
   themes/            # Generated JSON files (don't edit directly)
   ```

3. **Build & Test**

   ```bash
   node ./src/index.js   # Generates theme JSON files
   ```

   Press `F5` in VS Code to launch Extension Development Host with your changes.

## Current Theme Collection

| Theme        | Type  | Signature Accent        | Background Base |
| ------------ | ----- | ----------------------- | --------------- |
| **Obsidian** | Dark  | Rose Coral `#E06B74`    | `#14141A`       |
| **Sapphire** | Dark  | Sapphire Blue `#4A90D9` | `#0F1319`       |
| **Onyx**     | Dark  | Amber Gold `#E5A054`    | `#0D0D10`       |
| **Pearl**    | Light | Rose Coral `#D95560`    | `#FFFFFF`       |

## Design Patterns to Follow

### Background Hierarchy (4 levels)

Each dark theme uses a progression from deepest to surface:

```
Deepest → Editor → Elevated → Surface
```

### Color Definitions

In `src/colors.js`, each theme export follows this structure:

```javascript
export const themeNameColors = {
  // Core Colors
  focusBorder: "#ACCENT",
  foreground: "#MAIN_TEXT",

  // Organized by UI section with comments
  // Buttons, Forms, Sidebar, Editor, Terminal, etc.
};
```

### Token Colors

In `src/tokenColors.js`, syntax colors are defined:

```javascript
export const themeTokenColors = {
  comment: "#...",
  keyword: "#...",
  string: "#...",
  // etc.
};
```

## Creating a New Theme

1. **Choose a gemstone name** (e.g., Emerald, Ruby, Amber)
2. **Define your palette**:
   - Signature accent color
   - 4-level background hierarchy
   - Complementary syntax colors
3. **Add to `colors.js`** following existing patterns
4. **Add to `tokenColors.js`** if custom syntax needed
5. **Register in `theme.js`** and `index.js`
6. **Build and test** across multiple languages

## Pull Request Process

1. Create a branch: `git checkout -b feature/your-change`
2. Make changes and test thoroughly
3. Update CHANGELOG.md if significant
4. Submit PR with clear description

## Questions?

Open an issue or start a discussion in the repository.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
