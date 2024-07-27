// This is an auto-generated file, do not edit manually
import type { RuntimeCompositeDefinition } from "@composedb/types";
export const definition: RuntimeCompositeDefinition = {
  models: {
    SimpleProfile: {
      interface: false,
      implements: [],
      id: "kjzl6hvfrbw6caejdsgagul3q9vu0v2bss1hojrrzaxxzmtj7iaenr7zkgl98l0",
      accountRelation: { type: "single" },
    },
  },
  objects: {
    SimpleProfile: {
      displayName: { type: "string", required: true, immutable: false },
    },
  },
  enums: {},
  accountData: { simpleProfile: { type: "node", name: "SimpleProfile" } },
};
