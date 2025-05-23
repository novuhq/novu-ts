/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { messagesDeleteByTransactionId } from "../../funcs/messagesDeleteByTransactionId.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  transactionId: z.string(),
  channel: operations.Channel$inboundSchema.optional(),
  idempotencyKey: z.string().optional(),
};

export const tool$messagesDeleteByTransactionId: ToolDefinition<typeof args> = {
  name: "messages-delete-by-transaction-id",
  description: `Delete messages by transactionId

Delete multiple messages from the Novu platform using **transactionId** of triggered event. 
    This API supports filtering by **channel** and delete all messages associated with the **transactionId**.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await messagesDeleteByTransactionId(
      client,
      args.transactionId,
      args.channel,
      args.idempotencyKey,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    return formatResult(void 0, apiCall);
  },
};
