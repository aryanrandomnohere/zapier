import newVideoBySearch from "./youtube/triggers/newVideoBySearch.js";

export default async function RunTrigger(
  trigger: any,
  type: "test" | "polling",
) {
  console.log(trigger);
  console.log(
    trigger.configuration.optionConfiguration[trigger.optionId]
      .configurationStep.fields[0].fieldValue,
  );
  if (trigger.type.appId === "google") {
    const metadata = await newVideoBySearch(
      type,
      trigger.configuration.optionConfiguration[trigger.optionId]
        .configurationStep.fields[0].fieldValue || "JavaScript",
      trigger.userConnection.accessToken,
      trigger.lastPolledAt,
    );

    console.log("Checking on the metadata ", metadata);
    return metadata;
  }
}
