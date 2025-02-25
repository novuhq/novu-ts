/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { topicsSubscribersAssign } from "../../funcs/topicsSubscribersAssign.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  addSubscribersRequestDto: components.AddSubscribersRequestDto$inboundSchema,
  topicKey: z.string(),
  idempotencyKey: z.string().optional(),
};

export const tool$topicsSubscribersAssign: ToolDefinition<typeof args> = {
  name: "topics-subscribers_assign",
  description: `Subscribers addition

Add subscribers to a topic by key`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await topicsSubscribersAssign(
      client,
      args.addSubscribersRequestDto,
      args.topicKey,
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
