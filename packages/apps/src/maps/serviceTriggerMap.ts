import { TriggerMap } from "../shared/types/index.js";
import { youtubeTriggerMap } from "../youtube/index.js";

export const serviceTriggerMap: TriggerMap = {
  google: {
    youtube: youtubeTriggerMap,
  },
  builtIn: {},
};
