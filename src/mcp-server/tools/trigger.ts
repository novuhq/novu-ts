/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { trigger } from "../../funcs/trigger.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  triggerEventRequestDto: components.TriggerEventRequestDto$inboundSchema,
  idempotencyKey: z.string().optional(),
};

export const tool$trigger: ToolDefinition<typeof args> = {
  name: "trigger",
  description: `Trigger event


    Trigger event is the main (and only) way to send notifications to subscribers. 
    The trigger identifier is used to match the particular workflow associated with it. 
    Additional information can be passed according the body interface below.
    `,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await trigger(
      client,
      args.triggerEventRequestDto,
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
