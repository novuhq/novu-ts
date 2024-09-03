/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { cancel } from "../funcs/cancel.js";
import { trigger } from "../funcs/trigger.js";
import { triggerBroadcast } from "../funcs/triggerBroadcast.js";
import { triggerBulk } from "../funcs/triggerBulk.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Changes } from "./changes.js";
import { Environments } from "./environments.js";
import { ExecutionDetails } from "./executiondetails.js";
import { Feeds } from "./feeds.js";
import { Integrations } from "./integrations.js";
import { Layouts } from "./layouts.js";
import { Messages } from "./messages.js";
import { Notifications } from "./notifications.js";
import { Organizations } from "./organizations.js";
import { Subscribers } from "./subscribers.js";
import { Tenants } from "./tenants.js";
import { Topics } from "./topics.js";
import { WorkflowGroups } from "./workflowgroups.js";
import { Workflows } from "./workflows.js";

export class Novu extends ClientSDK {
    private _changes?: Changes;
    get changes(): Changes {
        return (this._changes ??= new Changes(this.options$));
    }

    private _environments?: Environments;
    get environments(): Environments {
        return (this._environments ??= new Environments(this.options$));
    }

    private _executionDetails?: ExecutionDetails;
    get executionDetails(): ExecutionDetails {
        return (this._executionDetails ??= new ExecutionDetails(this.options$));
    }

    private _feeds?: Feeds;
    get feeds(): Feeds {
        return (this._feeds ??= new Feeds(this.options$));
    }

    private _integrations?: Integrations;
    get integrations(): Integrations {
        return (this._integrations ??= new Integrations(this.options$));
    }

    private _layouts?: Layouts;
    get layouts(): Layouts {
        return (this._layouts ??= new Layouts(this.options$));
    }

    private _messages?: Messages;
    get messages(): Messages {
        return (this._messages ??= new Messages(this.options$));
    }

    private _workflowGroups?: WorkflowGroups;
    get workflowGroups(): WorkflowGroups {
        return (this._workflowGroups ??= new WorkflowGroups(this.options$));
    }

    private _notifications?: Notifications;
    get notifications(): Notifications {
        return (this._notifications ??= new Notifications(this.options$));
    }

    private _organizations?: Organizations;
    get organizations(): Organizations {
        return (this._organizations ??= new Organizations(this.options$));
    }

    private _subscribers?: Subscribers;
    get subscribers(): Subscribers {
        return (this._subscribers ??= new Subscribers(this.options$));
    }

    private _tenants?: Tenants;
    get tenants(): Tenants {
        return (this._tenants ??= new Tenants(this.options$));
    }

    private _topics?: Topics;
    get topics(): Topics {
        return (this._topics ??= new Topics(this.options$));
    }

    private _workflows?: Workflows;
    get workflows(): Workflows {
        return (this._workflows ??= new Workflows(this.options$));
    }

    /**
     * Cancel triggered event
     *
     * @remarks
     *
     *     Using a previously generated transactionId during the event trigger,
     *      will cancel any active or pending workflows. This is useful to cancel active digests, delays etc...
     *
     */
    async cancel(
        transactionId: string,
        options?: RequestOptions
    ): Promise<components.DataBooleanDto> {
        return unwrapAsync(cancel(this, transactionId, options));
    }

    /**
     * Trigger event
     *
     * @remarks
     *
     *     Trigger event is the main (and only) way to send notifications to subscribers.
     *     The trigger identifier is used to match the particular workflow associated with it.
     *     Additional information can be passed according the body interface below.
     *
     */
    async trigger(
        request: components.TriggerEventRequestDto,
        options?: RequestOptions
    ): Promise<components.TriggerEventResponseDto> {
        return unwrapAsync(trigger(this, request, options));
    }

    /**
     * Broadcast event to all
     *
     * @remarks
     * Trigger a broadcast event to all existing subscribers, could be used to send announcements, etc.
     *       In the future could be used to trigger events to a subset of subscribers based on defined filters.
     */
    async triggerBroadcast(
        request: components.TriggerEventToAllRequestDto,
        options?: RequestOptions
    ): Promise<components.TriggerEventResponseDto> {
        return unwrapAsync(triggerBroadcast(this, request, options));
    }

    /**
     * Bulk trigger event
     *
     * @remarks
     *
     *       Using this endpoint you can trigger multiple events at once, to avoid multiple calls to the API.
     *       The bulk API is limited to 100 events per request.
     *
     */
    async triggerBulk(
        request: components.BulkTriggerEventDto,
        options?: RequestOptions
    ): Promise<Array<components.TriggerEventResponseDto>> {
        return unwrapAsync(triggerBulk(this, request, options));
    }
}
