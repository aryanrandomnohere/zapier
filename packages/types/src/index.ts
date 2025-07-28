export interface zapInterface {
  id: string;
  name: string;
  published: boolean;
  triggerId: string;
  lastEdited: string;
  userId: number;
  actions: {
    id: string;
    zapId: string;
    actionId: string;
    sortingOrder: number;
    actionDetails: {
      id: string;
      imagePath: string;
      name: string;
    };
  }[];
  trigger: {
    id: string;
    zapId: string;
    triggerId: string;
    type: {
      id: string;
      name: string;
      imagePath: string;
    };
  };
}

export interface ItemType {
  id: string;
  name: string;
  serviceType: string;
  appId: string;
  type: string;
  imagePath: string;
  metadata: itemStepMetaData;
}

export interface ZapCreateType {
  triggerId: string;
  triggerMetadata: JSON;
  actions: {
    actionId: string;
    actionMetadata: JSON;
  }[];
}
export enum onStepEnum {
  SETUP,
  CONFIGURATION,
  TEST,
}

export interface selectedItemMetaDataType {
  index: number | null | undefined;
  isOpen: boolean;
}

export interface itemStepMetaData {
  stepName: string | undefined;
  type: string;
  stepNumber: number;
  optionConfiguration: optionConfiguration;
  triggerType: TriggerTestType;
  stepDescription?: string;
  completed: boolean | null;
  fields: Field[];
}

export interface itemTestMetaData {
  stepName: string;
  stepNumber: number;
  completed: boolean;
  does: string;
  aboutDoes: string;
  type: string;
  task?: {
    title: string;
    subtitle: string;
    description: string;
    learnMoreText: string;
    learnMoreUrl: string;
  };
}

export interface Field {
  name: string;
  fieldInputType: string;
  fieldLabel: string;
  fieldPlaceholder: string;
  fieldValue: string | null;
  required: boolean;
  options?: FieldOption[];
  fieldDescription?: string;
  fieldNumber: number;
}

export interface FieldOption {
  id: string;
  optionIndex: number;
  description: string;
  type: string;
}

export interface optionConfiguration {
  [optionId: string]: {
    configurationStep: itemStepMetaData | null;
    testStep: itemTestMetaData;
  };
}
export interface RecordMetadata {
  id: string;
  type: "modified" | "original";
  createdAt: string;
  pulledAt: string;
  title: string;
  JsonData: Record<string, string>;
}

export interface ApiResponse {
  records: RecordMetadata[];
  total: number;
  lastUpdated: string;
}

export enum TriggerTestType {
  UserTriggered = "user_triggered",
  SystemTriggered = "system_triggered",
}

export interface SessionType {
  id: string;
  name: string;
  email: string;
  image: string;
  zapmail: string;
  userId: string;
}

export interface currnetZap {
  zapId: string;
}

export enum zapOperations {
  LINKEDASSETS,
  ZAPDETAILS,
  NOTES,
  CHANGEHISTORY,
  ZAPRUN,
  STATUS,
  ADVANCEDSETTINGS,
  VERSIONS,
}
