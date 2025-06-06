/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { messagesDelete } from "../../funcs/messagesDelete.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  messageId: z.string(),
  idempotencyKey: z.string().optional(),
};

export const tool$messagesDelete: ToolDefinition<typeof args> = {
  name: "messages-delete",
  description: `Delete a message

Delete a message entity from the Novu platform by **messageId**. 
    This action is irreversible. **messageId** is required and of mongodbId type.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await messagesDelete(
      client,
      args.messageId,
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
