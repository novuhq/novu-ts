/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { executionDetailsRetrieve } from "../funcs/executionDetailsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ExecutionDetails extends ClientSDK {
    /**
     * Get execution details
     */
    async retrieve(
        notificationId: string,
        subscriberId: string,
        options?: RequestOptions
    ): Promise<Array<components.ExecutionDetailsResponseDto>> {
        return unwrapAsync(executionDetailsRetrieve(this, notificationId, subscriberId, options));
    }
}
