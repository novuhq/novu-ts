/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { subscribersMessagesMarkAll } from "../../funcs/subscribersMessagesMarkAll.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  markAllMessageAsRequestDto:
    components.MarkAllMessageAsRequestDto$inboundSchema,
  subscriberId: z.string(),
  idempotencyKey: z.string().optional(),
};

export const tool$subscribersMessagesMarkAll: ToolDefinition<typeof args> = {
  name: "subscribers-messages-mark-all",
  description:
    `Marks all the subscriber messages as read, unread, seen or unseen. Optionally you can pass feed id (or array) to mark messages of a particular feed.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscribersMessagesMarkAll(
      client,
      args.markAllMessageAsRequestDto,
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
