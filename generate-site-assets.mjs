import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = __dirname;
const sourceRoot = path.resolve(projectRoot, "..");
const imagesOutputDir = path.join(projectRoot, "static", "images");

const portraitTargets = [
    {
        source: "sobre_dani.jpg",
        basename: "danielle-gurgel-psicologa-higienopolis-hero",
        altLabel: "Hero",
    },
    {
        source: "rosto_dani.jpg",
        basename: "danielle-gurgel-psicologa-sobre-retrato",
        altLabel: "Sobre",
    },
    {
        source: "sobre_dani2.jpg",
        basename: "danielle-gurgel-psicoterapia-online",
        altLabel: "Online",
    },
];

const portraitWidths = [600, 1200];
const logoTargets = [
    { size: 192, filename: "logo-danielle-gurgel-192.png" },
    { size: 512, filename: "logo-danielle-gurgel-512.png" },
];

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

async function generatePortraitAsset({ source, basename, altLabel }) {
    const inputPath = path.join(sourceRoot, source);
    const image = sharp(inputPath).rotate();

    console.log(`\nProcessing ${altLabel}: ${source}`);

    for (const width of portraitWidths) {
        const height = Math.round((width * 5) / 4);
        const resized = image.resize({
            width,
            height,
            fit: "cover",
            position: sharp.strategy.attention,
        });

        await resized
            .clone()
            .avif({ quality: 62, effort: 7 })
            .toFile(path.join(imagesOutputDir, `${basename}-${width}w.avif`));

        await resized
            .clone()
            .webp({ quality: 78, effort: 6 })
            .toFile(path.join(imagesOutputDir, `${basename}-${width}w.webp`));

        console.log(`  Generated ${basename}-${width}w.avif/webp`);
    }

    await image
        .resize({
            width: 1200,
            height: 1500,
            fit: "cover",
            position: sharp.strategy.attention,
        })
        .avif({ quality: 64, effort: 7 })
        .toFile(path.join(imagesOutputDir, `${basename}.avif`));

    await image
        .resize({
            width: 1200,
            height: 1500,
            fit: "cover",
            position: sharp.strategy.attention,
        })
        .webp({ quality: 80, effort: 6 })
        .toFile(path.join(imagesOutputDir, `${basename}.webp`));

    console.log(`  Generated ${basename}.avif/webp`);
}

async function generateLogoAssets() {
    const inputPath = path.join(sourceRoot, "logo.png");
    const image = sharp(inputPath).rotate();

    console.log("\nProcessing logo.png");

    for (const target of logoTargets) {
        await image
            .clone()
            .resize({
                width: target.size,
                height: target.size,
                fit: "contain",
                background: { r: 0, g: 0, b: 0, alpha: 0 },
                withoutEnlargement: true,
            })
            .png({ compressionLevel: 9, palette: true, effort: 10 })
            .toFile(path.join(imagesOutputDir, target.filename));

        console.log(`  Generated ${target.filename}`);
    }
}

async function main() {
    await ensureDir(imagesOutputDir);

    for (const target of portraitTargets) {
        await generatePortraitAsset(target);
    }

    await generateLogoAssets();

    console.log("\nSite assets generated.");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
