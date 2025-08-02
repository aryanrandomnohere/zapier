import { TriggerMap } from "./types/index.js";
import { youtubeTriggerMap } from "../youtube/index.js";

export const serviceTriggerMap: TriggerMap = {
  google: {
    youtube: youtubeTriggerMap,
  },
  builtIn: {},
};
