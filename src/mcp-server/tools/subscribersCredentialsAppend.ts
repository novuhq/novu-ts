/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { subscribersCredentialsAppend } from "../../funcs/subscribersCredentialsAppend.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  updateSubscriberChannelRequestDto:
    components.UpdateSubscriberChannelRequestDto$inboundSchema,
  subscriberId: z.string(),
  idempotencyKey: z.string().optional(),
};

export const tool$subscribersCredentialsAppend: ToolDefinition<typeof args> = {
  name: "subscribers-credentials-append",
  description: `Upsert provider credentials

Update credentials for a provider such as **slack** and **FCM**. 
      **providerId** is required field. This API replaces the existing deviceTokens with the provided ones.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscribersCredentialsAppend(
      client,
      args.updateSubscriberChannelRequestDto,
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
