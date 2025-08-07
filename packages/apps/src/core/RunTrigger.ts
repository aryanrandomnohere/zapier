import { serviceTriggerMap } from "../maps/serviceTriggerMap.js";
import { GoogleApps, ServiceType } from "../shared/types/index.js";

export default async function RunTrigger(
  trigger: any,
  type: "test" | "polling",
) {
  try {
    console.log(trigger);
    const { serviceType, appId }: { serviceType: string; appId: string } =
      trigger.type;

    const appTriggers =
      serviceTriggerMap[serviceType as ServiceType]?.[appId as GoogleApps];
    if (!appTriggers)
      throw new Error(`Unsupported service/app: ${serviceType}/${appId}`);

    const triggerFn =
      appTriggers[trigger.optionId.toLowerCase().replace(/\s+/g, "_")];
    console.log(trigger.optionId.toLowerCase().replace(/\s+/g, "_"));
    if (!triggerFn)
      throw new Error(`No trigger function for optionId: ${trigger.optionId}`);

    const keywords =
      trigger.configuration.optionConfiguration[trigger.optionId]
        ?.configurationStep?.fields[0]?.fieldValue;
    if (!keywords) {
      return { success: false, error: "keyword does not exists" };
    }
    return await triggerFn(
      type,
      keywords,
      trigger.userConnection.accessToken,
      trigger.lastPolledAt,
    );
  } catch (err) {
    console.error("RunTrigger Error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
