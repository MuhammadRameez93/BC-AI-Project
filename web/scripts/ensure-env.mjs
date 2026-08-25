import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = join(root, ".env");
const examplePath = join(root, ".env.example");

if (!existsSync(envPath)) {
  if (!existsSync(examplePath)) {
    console.error("Missing .env and .env.example. Cannot start the app.");
    process.exit(1);
  }
  copyFileSync(examplePath, envPath);
  console.log("Created web/.env from .env.example");
}

const envContent = readFileSync(envPath, "utf8");
const authLine = envContent
  .split("\n")
  .find((line) => line.startsWith("AUTH_SECRET="));
const authValue = authLine?.slice("AUTH_SECRET=".length).trim().replace(/^"|"$/g, "");

if (!authValue || authValue.length < 32 || authValue.includes("replace-with")) {
  console.error(
    "\nSetup required: edit web/.env and set AUTH_SECRET to a random string (32+ characters).\n" +
      "Example (PowerShell): [Convert]::ToBase64String((1..48 | ForEach-Object { Get-Random -Maximum 256 }))\n" +
      "Example (bash): openssl rand -base64 32\n",
  );
  process.exit(1);
}

if (!process.env.DATABASE_URL) {
  const dbLine = envContent
    .split("\n")
    .find((line) => line.startsWith("DATABASE_URL="));
  if (dbLine) {
    const [, value] = dbLine.split("=", 2);
    process.env.DATABASE_URL = value?.trim().replace(/^"|"$/g, "");
  }
}
