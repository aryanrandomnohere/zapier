import { newVideoBySearch } from "@repo/apps";

export async function test(trigger: any) {
  console.log(trigger);
  if (trigger.type.appId === "google") {
    const metadata = await newVideoBySearch(
      "test",
      trigger.userConnection.accessToken,
      trigger.lastPolledAt,
    );
    console.log("Checking on the metadata ", metadata);
    return metadata;
  }
}
