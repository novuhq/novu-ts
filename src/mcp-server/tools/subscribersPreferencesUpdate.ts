/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { subscribersPreferencesUpdate } from "../../funcs/subscribersPreferencesUpdate.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  patchSubscriberPreferencesDto:
    components.PatchSubscriberPreferencesDto$inboundSchema,
  subscriberId: z.string(),
  idempotencyKey: z.string().optional(),
};

export const tool$subscribersPreferencesUpdate: ToolDefinition<typeof args> = {
  name: "subscribers-preferences_update",
  description: `Update subscriber global or workflow specific preferences

Update subscriber global or workflow specific preferences`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscribersPreferencesUpdate(
      client,
      args.patchSubscriberPreferencesDto,
      args.subscriberId,
      args.idempotencyKey,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
