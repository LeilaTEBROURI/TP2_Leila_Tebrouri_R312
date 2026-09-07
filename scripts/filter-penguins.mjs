import { readFile, writeFile } from "node:fs/promises";

const [headerLine, ...lines] = (await readFile("work/penguins.csv", "utf8")).trim().split("\n");
const headers = headerLine.split(",");
const useful = ["species", "island", "culmen_length_mm", "culmen_depth_mm", "flipper_length_mm", "body_mass_g", "sex"];
const numeric = new Set(["culmen_length_mm", "culmen_depth_mm", "flipper_length_mm", "body_mass_g"]);

const penguins = lines.map((line) => {
  const source = Object.fromEntries(headers.map((header, index) => [header, line.split(",")[index]]));
  return Object.fromEntries(useful.map((key) => [key, numeric.has(key) ? Number(source[key]) : source[key]]));
}).filter((penguin) => Number.isFinite(penguin.culmen_length_mm) && Number.isFinite(penguin.body_mass_g));

await writeFile("src/data/penguins.json", `${JSON.stringify(penguins, null, 2)}\n`);
console.log(`${penguins.length} lignes conservées, ${useful.length} colonnes utiles.`);
