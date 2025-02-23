# [BedarX Pro](https://github.com/saqibbedar/BedarX-Pro) | [GitHub Repo](https://github.com/saqibbedar/BedarX-Pro)

A **ChatGPT-inspired**, iconic **BedarX Pro** theme for VS Code, crafted in memory of my beloved father, [`Bedar Bakhshal`](Public/aboutExtension.md). Designed for both **light** and **dark mode**. This theme combines exceptional readability with a modern aesthetic, making your coding experience both comfortable and productive.

<!-- [![Preview in vscode.dev](https://img.shields.io/badge/preview%20in-vscode.dev-blue)](https://vscode.dev/theme/my_url)
[![Version](https://vsmarketplacebadges.dev/version/my_url)](https://marketplace.visualstudio.com/items?itemName=my_url)
[![Installs](https://vsmarketplacebadges.dev/installs/my_url)](https://marketplace.visualstudio.com/items?my_url) -->

## SCREENSHOTS

### Default - Dark Crimson

![ScreenShot](Public/dark-crimson-theme.png)

### Light

![ScreenShot](Public/light-theme.png)

## Donation

If you like this extension, you can **[Buy Me a Coffee](https://buymeacoffee.com/saqibbedar)**. It will encourage me to make this extension better and better!

Thanks List:

- To me still.

## CHANGELOG

[CHANGELOG.MD](./CHANGELOG.md)

## CONTRIBUTION

Navigate to ([https://github.com/saqibbedar/BedarX-Pro/blob/main/CONTRIBUTING.md](https://github.com/saqibbedar/BedarX-Pro/blob/main/CONTRIBUTING.md)) for detailed instructions on how to contribute to this theme.

To get started, first fork and clone this repository

`cd` to the `BedarX-Pro` folder

Press `F5` to see live preview, and start editing

## Customization

### Function Colors (Dark Theme Only)

The Dark Crimson theme uses ChatGPT-inspired red (#f22c3d) for functions. While this matches ChatGPT's syntax highlighting, some users might prefer a different color. You can customize it specifically for the dark theme:

```json
"editor.tokenColorCustomizations": {
  "[BedarX Pro Dark]": {
    "textMateRules": [
      {
        "scope": [
          "variable.function",
          "support.function",
          "entity.name.function",
          "support.variable.class.function",
          "meta.function-call.generic",
          "meta.method-call.groovy meta.method.groovy",
          "meta.class.body.groovy meta.method.body.java storage.type.groovy",
          "punctuation.decorator",
          "punctuation.definition.decorator",
        ],
        "settings": {
          "foreground": "#your-color-here"
        }
      }
    ]
  }
}
```

Alternative suggestions for dark theme:

- Warm Orange (#e9950c) - Currently used for built-ins
- Your preferred color that complements the dark theme

Note: The Light theme uses a carefully selected blue (#4078f2) for functions that provides good readability and doesn't require customization.

#### Thankyou for using this extension, [Leave a Star on Github ⭐](https://github.com/saqibbedar/BedarX-Pro)

<!-- ### Contributors

This project exists thanks to all the people who contribute.
[![Contributors](img_url)](img_url) -->

<!-- ### Sponsors

Support this project by becoming a sponsor.  -->
