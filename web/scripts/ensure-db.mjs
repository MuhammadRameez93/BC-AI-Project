import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

import "./ensure-env.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dbPath = join(root, "dev.db");

if (!existsSync(dbPath)) {
  console.log("Database not found — applying migrations…");
  execSync("npx prisma migrate deploy", { cwd: root, stdio: "inherit" });
}
