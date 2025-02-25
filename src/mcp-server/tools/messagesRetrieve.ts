/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { messagesRetrieve } from "../../funcs/messagesRetrieve.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.MessagesControllerGetMessagesRequest$inboundSchema,
};

export const tool$messagesRetrieve: ToolDefinition<typeof args> = {
  name: "messages_retrieve",
  description: `Get messages

Returns a list of messages, could paginate using the \`page\` query parameter`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await messagesRetrieve(
      client,
      args.request,
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
