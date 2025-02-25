/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { subscribersCredentialsDelete } from "../../funcs/subscribersCredentialsDelete.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  subscriberId: z.string(),
  providerId: z.string(),
  idempotencyKey: z.string().optional(),
};

export const tool$subscribersCredentialsDelete: ToolDefinition<typeof args> = {
  name: "subscribers-credentials_delete",
  description: `Delete subscriber credentials by providerId

Delete subscriber credentials such as slack and expo tokens.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscribersCredentialsDelete(
      client,
      args.subscriberId,
      args.providerId,
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
