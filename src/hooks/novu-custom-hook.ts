import {AfterSuccessContext, AfterSuccessHook, BeforeRequestContext, BeforeRequestHook} from "./types";

export class NovuCustomHook
    implements  BeforeRequestHook, AfterSuccessHook
{
    beforeRequest(_hookCtx: BeforeRequestContext, request: Request): Request {
        const authKey = 'authorization';
        const hasAuthorization = request.headers.has(authKey);
        const apiKeyPrefix = 'ApiKey';
        if (hasAuthorization) {
            const key = request.headers.get(authKey);

            if (key && !key.includes(apiKeyPrefix)) {
                request.headers.set(authKey,`${apiKeyPrefix} ${key}`)
            }
        }
        return request;
    }

    async afterSuccess(_hookCtx: AfterSuccessContext, response: Response): Promise<Response> {
        const responseAsText = await response.clone().text();
        if (!responseAsText || responseAsText =='') {
            return response;
        }
        const jsonResponse = await response.clone().json();

        if (jsonResponse && Object.keys(jsonResponse).length === 1 && jsonResponse.data) {
            return new Response(JSON.stringify(jsonResponse.data), {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
            }); // Return the new Response object
        }

        return response;
    }
}
