/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { subscribersMessagesMarkAllAs } from "../../funcs/subscribersMessagesMarkAllAs.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  messageMarkAsRequestDto: components.MessageMarkAsRequestDto$inboundSchema,
  subscriberId: z.string(),
  idempotencyKey: z.string().optional(),
};

export const tool$subscribersMessagesMarkAllAs: ToolDefinition<typeof args> = {
  name: "subscribers-messages_mark-all-as",
  description: `Mark a subscriber messages as seen, read, unseen or unread`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscribersMessagesMarkAllAs(
      client,
      args.messageMarkAsRequestDto,
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
