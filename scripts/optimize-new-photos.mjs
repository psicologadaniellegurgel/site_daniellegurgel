import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "static", "images");

const images = [
  {
    input: path.join(root, "sala-de-atendimento-foto-principal.jpeg"),
    baseName: "consultorio-sala-atendimento-panoramica",
    sizes: [400, 800],
    maxWidth: 900,
  },
  {
    input: path.join(root, "sala-de-atendimento-cadeira-e-mesa-a-frente-e-ao-fundo-almofadas.jpeg"),
    baseName: "consultorio-sala-atendimento-perspectiva",
    sizes: [400, 800],
    maxWidth: 900,
  },
  {
    input: path.join(root, "sala-de-espera-duas-poltronas-e-area-do-cafe.png"),
    baseName: "consultorio-sala-espera-poltronas-cafe",
    sizes: [400, 800],
    maxWidth: 900,
  },
];

for (const img of images) {
  const meta = await sharp(img.input).metadata();
  console.log(`\n${path.basename(img.input)}: ${meta.width}x${meta.height}`);

  // Full size (capped at maxWidth)
  const fullWidth = Math.min(meta.width, img.maxWidth);
  const fullPipeline = sharp(img.input).resize(fullWidth);

  await fullPipeline.clone().avif({ quality: 55 }).toFile(path.join(outDir, `${img.baseName}.avif`));
  await fullPipeline.clone().webp({ quality: 72 }).toFile(path.join(outDir, `${img.baseName}.webp`));
  console.log(`  ✓ full (${fullWidth}px): avif + webp`);

  // Responsive sizes
  for (const w of img.sizes) {
    if (w >= fullWidth) continue;
    const pipeline = sharp(img.input).resize(w);
    await pipeline.clone().avif({ quality: 50 }).toFile(path.join(outDir, `${img.baseName}-${w}w.avif`));
    await pipeline.clone().webp({ quality: 68 }).toFile(path.join(outDir, `${img.baseName}-${w}w.webp`));
    console.log(`  ✓ ${w}w: avif + webp`);
  }
}

console.log("\nDone!");
