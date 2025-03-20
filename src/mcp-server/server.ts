/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { NovuCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$cancel } from "./tools/cancel.js";
import { tool$integrationsCreate } from "./tools/integrationsCreate.js";
import { tool$integrationsDelete } from "./tools/integrationsDelete.js";
import { tool$integrationsList } from "./tools/integrationsList.js";
import { tool$integrationsListActive } from "./tools/integrationsListActive.js";
import { tool$integrationsSetAsPrimary } from "./tools/integrationsSetAsPrimary.js";
import { tool$integrationsUpdate } from "./tools/integrationsUpdate.js";
import { tool$integrationsWebhooksRetrieve } from "./tools/integrationsWebhooksRetrieve.js";
import { tool$messagesDelete } from "./tools/messagesDelete.js";
import { tool$messagesDeleteByTransactionId } from "./tools/messagesDeleteByTransactionId.js";
import { tool$messagesRetrieve } from "./tools/messagesRetrieve.js";
import { tool$notificationsList } from "./tools/notificationsList.js";
import { tool$notificationsRetrieve } from "./tools/notificationsRetrieve.js";
import { tool$notificationsStatsGraph } from "./tools/notificationsStatsGraph.js";
import { tool$notificationsStatsRetrieve } from "./tools/notificationsStatsRetrieve.js";
import { tool$subscribersAuthenticationChatAccessOauth } from "./tools/subscribersAuthenticationChatAccessOauth.js";
import { tool$subscribersAuthenticationChatAccessOauthCallBack } from "./tools/subscribersAuthenticationChatAccessOauthCallBack.js";
import { tool$subscribersCreate } from "./tools/subscribersCreate.js";
import { tool$subscribersCreateBulk } from "./tools/subscribersCreateBulk.js";
import { tool$subscribersCredentialsAppend } from "./tools/subscribersCredentialsAppend.js";
import { tool$subscribersCredentialsDelete } from "./tools/subscribersCredentialsDelete.js";
import { tool$subscribersCredentialsUpdate } from "./tools/subscribersCredentialsUpdate.js";
import { tool$subscribersDelete } from "./tools/subscribersDelete.js";
import { tool$subscribersList } from "./tools/subscribersList.js";
import { tool$subscribersMessagesMarkAll } from "./tools/subscribersMessagesMarkAll.js";
import { tool$subscribersMessagesMarkAllAs } from "./tools/subscribersMessagesMarkAllAs.js";
import { tool$subscribersMessagesUpdateAsSeen } from "./tools/subscribersMessagesUpdateAsSeen.js";
import { tool$subscribersNotificationsFeed } from "./tools/subscribersNotificationsFeed.js";
import { tool$subscribersNotificationsUnseenCount } from "./tools/subscribersNotificationsUnseenCount.js";
import { tool$subscribersPatch } from "./tools/subscribersPatch.js";
import { tool$subscribersPreferencesList } from "./tools/subscribersPreferencesList.js";
import { tool$subscribersPreferencesUpdate } from "./tools/subscribersPreferencesUpdate.js";
import { tool$subscribersPropertiesUpdateOnlineFlag } from "./tools/subscribersPropertiesUpdateOnlineFlag.js";
import { tool$subscribersRetrieve } from "./tools/subscribersRetrieve.js";
import { tool$subscribersSearch } from "./tools/subscribersSearch.js";
import { tool$topicsCreate } from "./tools/topicsCreate.js";
import { tool$topicsDelete } from "./tools/topicsDelete.js";
import { tool$topicsList } from "./tools/topicsList.js";
import { tool$topicsRename } from "./tools/topicsRename.js";
import { tool$topicsRetrieve } from "./tools/topicsRetrieve.js";
import { tool$topicsSubscribersAssign } from "./tools/topicsSubscribersAssign.js";
import { tool$topicsSubscribersRemove } from "./tools/topicsSubscribersRemove.js";
import { tool$topicsSubscribersRetrieve } from "./tools/topicsSubscribersRetrieve.js";
import { tool$trigger } from "./tools/trigger.js";
import { tool$triggerBroadcast } from "./tools/triggerBroadcast.js";
import { tool$triggerBulk } from "./tools/triggerBulk.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  secretKey?: SDKOptions["secretKey"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Novu",
    version: "0.6.0",
  });

  const client = new NovuCore({
    secretKey: deps.secretKey,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes ?? mcpScopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$trigger);
  tool(tool$cancel);
  tool(tool$triggerBroadcast);
  tool(tool$triggerBulk);
  tool(tool$subscribersSearch);
  tool(tool$subscribersCreate);
  tool(tool$subscribersRetrieve);
  tool(tool$subscribersPatch);
  tool(tool$subscribersDelete);
  tool(tool$subscribersList);
  tool(tool$subscribersCreateBulk);
  tool(tool$integrationsList);
  tool(tool$integrationsCreate);
  tool(tool$integrationsUpdate);
  tool(tool$integrationsDelete);
  tool(tool$integrationsSetAsPrimary);
  tool(tool$integrationsListActive);
  tool(tool$messagesRetrieve);
  tool(tool$messagesDelete);
  tool(tool$messagesDeleteByTransactionId);
  tool(tool$notificationsList);
  tool(tool$notificationsRetrieve);
  tool(tool$topicsCreate);
  tool(tool$topicsList);
  tool(tool$topicsDelete);
  tool(tool$topicsRetrieve);
  tool(tool$topicsRename);
  tool(tool$subscribersPreferencesList);
  tool(tool$subscribersPreferencesUpdate);
  tool(tool$subscribersCredentialsUpdate);
  tool(tool$subscribersCredentialsAppend);
  tool(tool$subscribersCredentialsDelete);
  tool(tool$subscribersAuthenticationChatAccessOauth);
  tool(tool$subscribersAuthenticationChatAccessOauthCallBack);
  tool(tool$subscribersMessagesUpdateAsSeen);
  tool(tool$subscribersMessagesMarkAll);
  tool(tool$subscribersMessagesMarkAllAs);
  tool(tool$subscribersNotificationsFeed);
  tool(tool$subscribersNotificationsUnseenCount);
  tool(tool$subscribersPropertiesUpdateOnlineFlag);
  tool(tool$integrationsWebhooksRetrieve);
  tool(tool$notificationsStatsGraph);
  tool(tool$notificationsStatsRetrieve);
  tool(tool$topicsSubscribersAssign);
  tool(tool$topicsSubscribersRetrieve);
  tool(tool$topicsSubscribersRemove);

  return server;
}
