import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const filePath = join(process.cwd(), "build", "404.html");
const noindex = '<meta name="robots" content="noindex,follow" />';

if (existsSync(filePath)) {
    const html = readFileSync(filePath, "utf8");

    if (!html.includes('name="robots"') && html.includes("</head>")) {
        writeFileSync(filePath, html.replace("</head>", `\t${noindex}\n</head>`));
    }
}
