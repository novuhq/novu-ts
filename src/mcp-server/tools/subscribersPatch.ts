/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { subscribersPatch } from "../../funcs/subscribersPatch.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  patchSubscriberRequestDto: components.PatchSubscriberRequestDto$inboundSchema,
  subscriberId: z.string(),
  idempotencyKey: z.string().optional(),
};

export const tool$subscribersPatch: ToolDefinition<typeof args> = {
  name: "subscribers-patch",
  description: `Update a subscriber

Update a subscriber by its unique key identifier **subscriberId**. 
    **subscriberId** is a required field, rest other fields are optional`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscribersPatch(
      client,
      args.patchSubscriberRequestDto,
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
