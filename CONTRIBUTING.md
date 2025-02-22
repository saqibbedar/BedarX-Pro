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

3. **Make Changes**

   - Theme files are located in the `themes` folder
   - Start your editing, changes will be reflected immediately in the debug window

4. **Testing**

   - Test your changes across different file types
   - Ensure good contrast and readability
   - Verify changes in both light and dark modes if applicable

5. **Submit Changes**
   - Create a new branch for your changes
   - Commit your changes with clear commit messages
   - Push to your fork
   - Submit a Pull Request

## Color Palette

| Type         | Dark Theme | Light Theme |
| :----------- | :--------- | :---------- |
| Text         | #FFFFFF    | #383a42     |
| Function     | #f22c3d    | #4078f2     |
| Type/Special | #e9950c    | #986801     |
| Class/Tag    | #d82f79    | #e45649     |
| String       | #00a67d    | #50A14F     |
| Keyword      | #2e95cc    | #a626a4     |
| Comment      | #ffffff80  | #a0a1a7     |
| Other        | #8ED1FC    | #569cd6     |

## Guidelines

### General

- Follow the existing color scheme
- Maintain consistent contrast ratios
- Test changes across multiple programming languages
- Document any significant changes

### Color Selection

- Use the provided color palette
- Ensure sufficient contrast with backgrounds
- Consider colorblind accessibility
- Maintain theme consistency

### Scope Changes

- Document the purpose of new scopes
- Test scope changes across multiple file types
- Ensure scopes don't conflict
- Follow VS Code's TextMate scope naming conventions

## Pull Request Process

1. Update the README.md with details of significant changes if applicable
2. Update the CHANGELOG.md following the existing format
3. The PR will be reviewed and merged after approval
4. Version numbers will be updated by maintainers

## Questions?

If you have questions about contributing, please open an issue in the repository.

## License

By contributing, you agree that your contributions will be licensed under the same license as the original project.
