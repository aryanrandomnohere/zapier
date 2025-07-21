import { newVideoBySearch } from "@repo/apps";

export async function poll(trigger: any) {
  const lastPolledAt =
    trigger?.lastPolledAt === null
      ? new Date().toISOString()
      : trigger.lastPolledAt;
  if (trigger.type.appId === "google") {
    const metadata = await newVideoBySearch(
      "polling",
      trigger.configuration.optionConfiguration[trigger.optionId].configurationStep.fields[0].fieldValue || "JavaScript",
      trigger.userConnection.accessToken,
      lastPolledAt,
    );
    console.log("Checking on the metadata", metadata);
    return metadata;
  }
}
