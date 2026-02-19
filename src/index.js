import fs from "fs";
import path from "path";
import { getTheme } from "./theme.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const themes = [
  { name: "crystalLight", file: "crystal-light-theme.json" },
  { name: "darkDefault", file: "dark-default-theme.json" },
  { name: "midnightAurora", file: "midnight-aurora-theme.json" },
  { name: "stellarNova", file: "stellar-nova-theme.json" },
];

const themesDir = path.resolve(__dirname, "../themes");
if (!fs.existsSync(themesDir)) fs.mkdirSync(themesDir);

themes.forEach(({ name, file }) => {
  const theme = getTheme({ name });
  fs.writeFileSync(path.join(themesDir, file), JSON.stringify(theme, null, 2));
  console.log(`Generated: ${file}`);
});
