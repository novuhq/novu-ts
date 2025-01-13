import {AfterSuccessContext, AfterSuccessHook, BeforeRequestContext, BeforeRequestHook} from "./types";

export class NovuCustomHook
    implements  BeforeRequestHook, AfterSuccessHook
{
    beforeRequest(_hookCtx: BeforeRequestContext, request: Request): Request {
        this.addAuthHeader(request);
        this.addIdempotencyHeader(request)
        return request;
    }
    private addIdempotencyHeader(request: Request) {
        const idempotencyKey = 'Idempotency-Key';
        const keyValue = request.headers.get(idempotencyKey);
        request.headers.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
            if (!keyValue ||  keyValue==='' ) {
                const newIdempotenceValue = this.generateIdempotencyKey();
                request.headers.set(idempotencyKey, newIdempotenceValue)
            }
    }
    private generateIdempotencyKey(): string {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substr(2, 9); // Generates a random alphanumeric string
        return `${timestamp}-${randomString}`;
}
    private addAuthHeader(request: Request) {
        const authKey = 'authorization';
        const hasAuthorization = request.headers.has(authKey);
        const apiKeyPrefix = 'ApiKey';
        if (hasAuthorization) {
            const key = request.headers.get(authKey);

            if (key && !key.includes(apiKeyPrefix)) {
                request.headers.set(authKey, `${apiKeyPrefix} ${key}`)
            }
        }
    }

    async afterSuccess(_hookCtx: AfterSuccessContext, response: Response): Promise<Response> {
        const responseAsText = await response.clone().text();
        const contentType = response.headers.get('content-type') || '';
        if (!responseAsText || responseAsText =='' || contentType.includes('text/html')) {
            return response;
        }
        const jsonResponse = await response.clone().json();

        if (jsonResponse && Object.keys(jsonResponse).length === 1 && 'data' in jsonResponse) {
            return new Response(JSON.stringify(jsonResponse.data), {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
            }); // Return the new Response object
        }

        return response;
    }
}
