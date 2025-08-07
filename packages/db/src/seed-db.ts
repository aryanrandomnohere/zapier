import { PrismaClient } from "../generated/client/index.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correct path: backup folder outside dist
const backupDir = path.resolve(__dirname, "../backup");

const client = new PrismaClient();

async function main() {
  try {
    const triggersPath = path.join(backupDir, "availableTriggers.json");
    const actionsPath = path.join(backupDir, "availableActions.json");

    const triggers = JSON.parse(fs.readFileSync(triggersPath, "utf8"));
    const actions = JSON.parse(fs.readFileSync(actionsPath, "utf8"));

    await client.availableActions.deleteMany();
    await client.availableTriggers.deleteMany();

    if (triggers.length > 0) {
      await client.availableTriggers.createMany({ data: triggers });
    }
    if (actions.length > 0) {
      await client.availableActions.createMany({ data: actions });
    }

    console.log("Database restored from backup successfully!");
  } catch (error) {
    console.error("Restore failed:", error);
  } finally {
    await client.$disconnect();
  }
}

main();
