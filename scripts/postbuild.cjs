const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "..", "dist", "client", "assets");
const outFile = path.join(__dirname, "..", "dist", "client", "index.html");
const manifestFile = path.join(__dirname, "..", "dist", "client", ".vite", "manifest.json");
const serverManifestFile = path.join(__dirname, "..", "dist", "server", ".vite", "manifest.json");

if (!fs.existsSync(assetsDir)) {
  console.error("Assets directory not found:", assetsDir);
  process.exit(1);
}

let entryJs = [];
let cssFiles = [];

function collectCss(manifest) {
  const css = new Set();
  for (const entry of Object.values(manifest)) {
    if (entry.css) {
      for (const c of entry.css) {
        css.add(path.basename(c));
      }
    }
  }
  return [...css];
}

// Try client manifest first
if (fs.existsSync(manifestFile)) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestFile, "utf-8"));
    const entries = Object.values(manifest).filter((m) => m.isEntry || m.isDynamicEntry);
    for (const entry of entries) {
      if (entry.file) entryJs.push(path.basename(entry.file));
    }
    cssFiles = collectCss(manifest);
    console.log("Using client manifest for entry detection");
  } catch (e) {
    console.warn("Failed to parse client manifest:", e.message);
  }
}

// Fallback: server manifest — look for entry-client explicitly
if (entryJs.length === 0 && fs.existsSync(serverManifestFile)) {
  try {
    const manifest = JSON.parse(fs.readFileSync(serverManifestFile, "utf-8"));
    const entries = Object.entries(manifest);

    // Prefer explicit entry-client source
    let clientEntry = entries.find(([k]) => k.includes("entry-client"));
    // Next: any key containing "entry"
    if (!clientEntry) clientEntry = entries.find(([k]) => k.includes("entry"));
    // Last resort: smallest JS file heuristic
    if (!clientEntry) {
      const jsFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".js"));
      const smallest = jsFiles.reduce((a, b) => {
        const sa = fs.statSync(path.join(assetsDir, a)).size;
        const sb = fs.statSync(path.join(assetsDir, b)).size;
        return sa < sb ? a : b;
      });
      clientEntry = ["heuristic", { file: "assets/" + smallest }];
    }

    if (clientEntry && clientEntry[1].file) {
      entryJs.push(path.basename(clientEntry[1].file));
    }
    cssFiles = collectCss(manifest);
    console.log("Using server manifest for entry detection");
  } catch (e) {
    console.warn("Failed to parse server manifest:", e.message);
  }
}

// Ultimate fallback
if (entryJs.length === 0) {
  const files = fs.readdirSync(assetsDir);
  entryJs = files.filter((f) => f.endsWith(".js"));
  cssFiles = files.filter((f) => f.endsWith(".css"));
  console.log("Fallback: including all JS/CSS files");
}

const cssLinks = cssFiles
  .map((f) => `  <link rel="stylesheet" crossorigin href="/assets/${f}">`)
  .join("\n");

const jsScripts = entryJs
  .map((f) => `  <script type="module" crossorigin src="/assets/${f}"></script>`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4sight Digital — Custom Software, AI & Cloud</title>
  <meta name="description" content="4sight Digital Limited builds custom software, AI platforms, mobile apps, and cloud infrastructure.">
${cssLinks}
</head>
<body>
  <div id="app"></div>
${jsScripts}
</body>
</html>
`;

fs.writeFileSync(outFile, html);
console.log("Generated dist/client/index.html");
console.log("  JS:", entryJs.join(", "));
console.log("  CSS:", cssFiles.join(", "));
