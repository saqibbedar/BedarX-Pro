# Contributing to BedarX Pro

Thank you for your interest in contributing to BedarX Pro! This document provides guidelines and instructions for contributing.

## How to Contribute

1. **Fork & Clone**

   - Fork the repository on GitHub
   - Clone your fork locally

   ```bash
   git clone https://github.com/YOUR-USERNAME/BedarX-Pro.git
   cd BedarX-Pro && code .
   ```

   Now `Press F5` to start debugging - this will open a new VS Code window with your theme applied

2. **Make Changes**

   - Theme files are located in the `themes` folder:
     - `bxp-classic-theme.json`
     - `bxp-midnight-theme.json`
     - `bxp-modern-theme.json`
     - `bxp-light-theme.json`
   - Start editing, changes will be reflected immediately in the debug window

3. **Testing**

   - Test your changes across different file types
   - Ensure good contrast and readability
   - Verify changes in all theme variants
   - Check terminal and UI element consistency

4. **Submit Changes**
   - Create a new branch for your changes
   - Commit your changes with clear commit messages
   - Push to your fork
   - Submit a Pull Request

## Guidelines

### General

- Follow the established color scheme for each variant:
  - Classic: Professional blue-grey palette
  - Midnight: Deep blue-based colors
  - Modern: Clean neutral tones
  - Light: Crisp light contrasts
- Maintain consistent contrast ratios
- Test changes across multiple programming languages
- Document any significant changes

### Color Selection

- Use the provided color palette for each theme variant
- Ensure sufficient contrast with backgrounds (minimum 4.5:1 ratio)
- Consider colorblind accessibility
- Maintain theme consistency within each variant

### Scope Changes

- Document the purpose of new scopes
- Test scope changes across multiple file types
- Ensure scopes don't conflict
- Follow VS Code's TextMate scope naming conventions

## Pull Request Process

1. Update the README.md with details of significant changes
2. Update the CHANGELOG.md following the existing format
3. The PR will be reviewed and merged after approval
4. Version numbers will be updated by maintainers

## Known Limitations

When working on themes, be aware that:

- README preview colors may not be fully customizable
- Some selection backgrounds might not respond to theme changes
- Certain UI elements have limited theming support via VS Code API

## Questions?

If you have questions about contributing, please open an issue in the repository.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
