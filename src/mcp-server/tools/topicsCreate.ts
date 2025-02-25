/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { topicsCreate } from "../../funcs/topicsCreate.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  createTopicRequestDto: components.CreateTopicRequestDto$inboundSchema,
  idempotencyKey: z.string().optional(),
};

export const tool$topicsCreate: ToolDefinition<typeof args> = {
  name: "topics_create",
  description: `Topic creation

Create a topic`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await topicsCreate(
      client,
      args.createTopicRequestDto,
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
