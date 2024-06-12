import { isPlainObject } from "../lib/is-plain-object";
import {AfterSuccessContext, AfterSuccessHook, Hooks} from "./types";

export function initHooks(hooks: Hooks) {
    hooks.registerAfterSuccessHook(new TransformResponse());
}

function isResponseEnveloped(body: unknown): body is { data: unknown } {
    return isPlainObject(body) && "data" in body && Object.keys(body).every(key => key === "data") && isPlainObject(body.data);
}

class TransformResponse implements AfterSuccessHook {

    async afterSuccess(_context: AfterSuccessContext, response: Response) {
        if (!response.ok) {
            return response;
        }

        const body: unknown = await response.json();
        const validBody =
            isResponseEnveloped(body);
        if (!validBody) {
            return new Response(JSON.stringify(body), response);
        }
        return new Response(JSON.stringify(body.data), response);
    }

}