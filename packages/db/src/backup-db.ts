import { PrismaClient } from "../generated/client/index.js";
import fs from "fs";
const client = new PrismaClient();

async function backup() {
  try {
    // Example: Backup 2 important tables
    const triggers = await client.availableTriggers.findMany();
    const actions = await client.availableActions.findMany();

    fs.writeFileSync(
      "./backup/availableTriggers.json",
      JSON.stringify(triggers, null, 2),
    );
    fs.writeFileSync(
      "./backup/availableActions.json",
      JSON.stringify(actions, null, 2),
    );

    console.log("Backup completed successfully.");
  } catch (error) {
    console.error("Backup failed:", error);
  } finally {
    await client.$disconnect();
  }
}

backup();
