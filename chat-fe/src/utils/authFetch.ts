export async function authFetch(
    input: string,
    init: RequestInit = {}
): Promise<Response> {
    const request = {
        ...init,
        credentials: "same-origin" as const
    };

    const response = await fetch(input, request);
    if (response.status !== 401) {
        return response;
    }

    const refreshResponse = await fetch("/auth/token", {
        method: "POST",
        credentials: "same-origin"
    });
    if (!refreshResponse.ok) {
        return refreshResponse;
    }

    return fetch(input, request);
}
