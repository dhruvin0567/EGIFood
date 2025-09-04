import fs from "fs";
import path from "path";
const publicDir = path.join(process.cwd(), "public");

export function listImages(subPath) {
  const dir = path.join(publicDir, subPath);
  if (!fs.existsSync(dir)) return [];
  const allow = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);
  return fs
    .readdirSync(dir)
    .filter((f) => allow.has(path.extname(f).toLowerCase()))
    .map((f) => `/${subPath}/${f}`);
}
