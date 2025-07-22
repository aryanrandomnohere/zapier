import { newVideoBySearch } from "@repo/apps";

export async function test(trigger: any) {
  console.log(
    trigger.configuration.optionConfiguration[trigger.optionId]
      .configurationStep.fields[0].fieldValue,
  );
  if (trigger.type.appId === "google") {
    const metadata = await newVideoBySearch(
      "test",
      trigger.configuration.optionConfiguration[trigger.optionId]
        .configurationStep.fields[0].fieldValue || "JavaScript",
      trigger.userConnection.accessToken,
      trigger.lastPolledAt,
    );

    console.log("Checking on the metadata ", metadata);
    return metadata;
  }
}
