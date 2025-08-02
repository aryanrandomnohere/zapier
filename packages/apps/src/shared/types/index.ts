export type ServiceType = "google" | "builtIn";
export type GoogleApps = "youtube"; // can add gmail, drive later

export type TriggerMap = {
  google: Record<GoogleApps, Record<string, Function>>;
  builtIn: Record<string, Record<string, Function>>;
};
