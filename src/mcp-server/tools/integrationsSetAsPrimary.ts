/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { integrationsSetAsPrimary } from "../../funcs/integrationsSetAsPrimary.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  integrationId: z.string(),
  idempotencyKey: z.string().optional(),
};

export const tool$integrationsSetAsPrimary: ToolDefinition<typeof args> = {
  name: "integrations-set-as-primary",
  description: `Set integration as primary`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await integrationsSetAsPrimary(
      client,
      args.integrationId,
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
