/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { integrationsCreate } from "../../funcs/integrationsCreate.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  createIntegrationRequestDto:
    components.CreateIntegrationRequestDto$inboundSchema,
  idempotencyKey: z.string().optional(),
};

export const tool$integrationsCreate: ToolDefinition<typeof args> = {
  name: "integrations_create",
  description: `Create integration

Create an integration for the current environment the user is based on the API key provided`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await integrationsCreate(
      client,
      args.createIntegrationRequestDto,
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
