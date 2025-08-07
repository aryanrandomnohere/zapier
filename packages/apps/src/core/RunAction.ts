import { serviceActionMap } from "../maps/actionMap.js";

function normalizeId(str: string) {
  console.log(str.toLowerCase().replace(/\s+/g, "_"));
  return str.toLowerCase().replace(/\s+/g, "_");
}

export default async function RunAction(currentAction: any, metadata: any) {
  try {
    const { actionDetails, configuration, optionId } = currentAction || {};
    if (!actionDetails) {
      return { success: false, error: "Missing action details" };
    }
    const { serviceType, id: actionId } = actionDetails;

    // Normalize keys
    const normServiceType = normalizeId(serviceType);
    const normActionId = normalizeId(actionId);
    const normOptionId = normalizeId(optionId);

    // Lookup function
    const actionFn =
      serviceActionMap[normServiceType]?.[normActionId]?.[normOptionId];

    if (!actionFn) {
      console.log("no action found for", optionId);
      return { success: false, error: `No action found for ${optionId}` };
    }

    // Extract raw fields for this option
    const fields =
      configuration?.optionConfiguration?.[optionId]?.configurationStep?.fields;
    if (!fields) {
      console.log("missing configuration for", optionId);
      return { success: false, error: `Missing configuration for ${optionId}` };
    }

    // Execute the action
    const response = await actionFn({ fields, metadata });

    return response?.success
      ? { success: true, id: response.id }
      : {
          success: false,
          error: response?.error || "Action failed to execute",
        };
  } catch (e) {
    console.error("RunAction error:", e);
    return {
      success: false,
      error: e instanceof Error ? e.message : String(e),
    };
  }
}
