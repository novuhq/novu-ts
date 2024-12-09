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
        if (!response || !response.ok) {
            return response;
        }

        const clonedResponse = response.clone();
        const contentLength = clonedResponse.headers.get('Content-Length');
        if (!contentLength || contentLength === '0') {
            return response;
        }

        let jsonResponse;
        try {
            jsonResponse = await clonedResponse.json();
        } catch (error) {
            return response;
        }

        if (jsonResponse && typeof jsonResponse === 'object' && Object.keys(jsonResponse).length === 1 && jsonResponse.data) {
            return new Response(JSON.stringify(jsonResponse.data), {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
            });
        }

        return response;
    }
}
