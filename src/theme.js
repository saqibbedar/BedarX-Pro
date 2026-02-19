// UI Colors
import {
  pearlColors,
  obsidianColors,
  sapphireColors,
  onyxColors,
} from "./colors.js";

import { lightTokenColors, darkThemeTokenColors } from "./tokenColors.js";

const themes = {
  pearl: {
    type: "light",
    name: "BedarX Pearl",
    colors: pearlColors,
    plainTextColor: "#383840",
    tokenColors: lightTokenColors,
  },
  obsidian: {
    type: "dark",
    name: "BedarX Obsidian",
    colors: obsidianColors,
    plainTextColor: "#E8E8EF",
    tokenColors: darkThemeTokenColors,
  },
  sapphire: {
    type: "dark",
    name: "BedarX Sapphire",
    colors: sapphireColors,
    plainTextColor: "#D0D8E0",
    tokenColors: darkThemeTokenColors,
  },
  onyx: {
    type: "dark",
    name: "BedarX Onyx",
    colors: onyxColors,
    plainTextColor: "#E0E0E5",
    tokenColors: darkThemeTokenColors,
  },
};

export function getTheme({ name }) {
  const bxpTheme = themes[name];
  const tknClr = bxpTheme.tokenColors; // token colors

  return {
    name: bxpTheme.name,
    type: bxpTheme.type,
    colors: bxpTheme.colors,
    semanticHighlighting: true,
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: tknClr.comment,
        },
      },
      {
        scope: ["constant.other.placeholder", "constant.character"],
        settings: {
          foreground: tknClr.constantCharacter,
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity",
        ],
        settings: {
          foreground: tknClr.constant,
        },
      },
      {
        scope: [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable",
        ],
        settings: {
          foreground: tknClr.entityName,
        },
      },
      {
        scope: [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression",
        ],
        settings: {
          foreground: tknClr.variableParameterFunction,
        },
      },
      {
        scope: "meta.jsx.children",
        settings: {
          foreground: bxpTheme.plainTextColor,
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: tknClr.entityNameFunction,
        },
      },
      {
        scope: ["entity.name.tag", "support.class.component"],
        settings: {
          foreground: tknClr.entityNameTag,
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: tknClr.keyword,
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: tknClr.storage,
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: tknClr.storageModifier,
        },
      },
      {
        scope: ["string", "string punctuation.section.embedded source"],
        settings: {
          foreground: tknClr.string,
        },
      },
      {
        scope: "support",
        settings: {
          foreground: tknClr.support,
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: tknClr.metaPropertyName,
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: tknClr.variable,
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: tknClr.variableOther,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          foreground: tknClr.invalid,
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          foreground: tknClr.invalid,
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          foreground: tknClr.invalid,
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          foreground: tknClr.invalid,
        },
      },
      {
        scope: "carriage-return",
        settings: {
          background: tknClr.carriageReturnBackground,
          foreground: tknClr.carriageReturnForeground,
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: tknClr.messageError,
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: tknClr.stringVariable,
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: tknClr.regexp,
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: tknClr.regexp,
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          foreground: tknClr.regexpEscape,
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: tknClr.supportConstant,
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: tknClr.supportVariable,
        },
      },
      {
        scope: "support.type.property-name.json",
        settings: {
          foreground: tknClr.supportTypePropertyNameJson,
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: tknClr.metaModuleReference,
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: tknClr.punctuationDefinitionListBeginMarkdown,
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          foreground: tknClr.markupHeading,
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: tknClr.markupQuote,
        },
      },
      {
        scope: "markup.italic",
        settings: {
          foreground: tknClr.markupItalic,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          foreground: tknClr.markupBold,
        },
      },
      {
        scope: ["markup.underline"],
        settings: {
          foreground: tknClr.markupUnderline,
        },
      },
      {
        scope: ["markup.strikethrough"],
        settings: {
          foreground: tknClr.markupStrikethrough,
        },
      },
      {
        scope: "markup.inline.raw",
        settings: {
          foreground: tknClr.markupInlineRaw,
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: tknClr.markupDeletedBackground,
          foreground: tknClr.markupDeletedForeground,
        },
      },
      {
        scope: ["punctuation.section.embedded"],
        settings: {
          foreground: tknClr.punctuationSectionEmbedded,
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: tknClr.markupInsertedBackground,
          foreground: tknClr.markupInsertedForeground,
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: tknClr.markupChangedBackground,
          foreground: tknClr.markupChangedForeground,
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: tknClr.markupIgnoredForeground,
          background: tknClr.markupIgnoredBackground,
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: tknClr.metaDiffRange,
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: tknClr.metaDiffHeader,
        },
      },
      {
        scope: "meta.separator",
        settings: {
          foreground: tknClr.metaSeparator,
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: tknClr.metaOutput,
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: tknClr.bracketHighlighter,
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: tknClr.bracketHighlighterUnmatched,
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: tknClr.link,
        },
      },
    ],
  };
}
