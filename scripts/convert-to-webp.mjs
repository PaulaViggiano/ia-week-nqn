import sharp from "sharp";
import { readdirSync, existsSync } from "fs";
import { join, basename, extname } from "path";

const folders = [
  "public/auditorioMain/jueves",
  "public/auditorioMain/viernes",
  "public/auditorioMain/sabado",
  "public/auditorioCentral/jueves",
  "public/auditorioCentral/viernes",
  "public/auditorioCentral/sabado",
];

let converted = 0;

for (const folder of folders) {
  if (!existsSync(folder)) continue;

  const files = readdirSync(folder).filter(f =>
    [".png", ".jpg", ".jpeg"].includes(extname(f).toLowerCase())
  );

  for (const file of files) {
    const input = join(folder, file);
    const output = join(folder, basename(file, extname(file)) + ".webp");

    if (existsSync(output)) {
      console.log(`⏭  Ya existe: ${output}`);
      continue;
    }

    await sharp(input).webp({ quality: 85 }).toFile(output);
    console.log(`✅ ${input} → ${output}`);
    converted++;
  }
}

console.log(`\nListo. ${converted} imágenes convertidas a WebP.`);
