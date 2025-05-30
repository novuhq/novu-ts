/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscribersNotificationsUnseenCount } from "../../funcs/subscribersNotificationsUnseenCount.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.SubscribersV1ControllerGetUnseenCountRequest$inboundSchema,
};

export const tool$subscribersNotificationsUnseenCount: ToolDefinition<
  typeof args
> = {
  name: "subscribers-notifications-unseen-count",
  description: `Retrieve unseen notifications count

Retrieve unseen in-app (inbox) notifications count for a subscriber by its unique key identifier **subscriberId**.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscribersNotificationsUnseenCount(
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
