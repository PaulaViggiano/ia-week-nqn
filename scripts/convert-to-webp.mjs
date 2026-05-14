import sharp from "sharp";
import { readdirSync, existsSync, statSync } from "fs";
import { join, basename, extname } from "path";

const EXTS = [".png", ".jpg", ".jpeg"];

function walk(dir) {
  const entries = readdirSync(dir);
  let files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files = files.concat(walk(full));
    } else if (EXTS.includes(extname(entry).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

const allImages = walk("public");
let converted = 0;
let skipped = 0;

for (const input of allImages) {
  const output = input.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  if (existsSync(output)) {
    skipped++;
    continue;
  }

  await sharp(input).webp({ quality: 85 }).toFile(output);
  console.log(`✅ ${input} → ${output}`);
  converted++;
}

console.log(`\nListo. ${converted} convertidas, ${skipped} ya existían.`);
