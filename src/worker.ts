import { Asset } from 'cloudflare:assets';

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        try {
            // Attempt to fetch the asset
            const response = await env.ASSETS.fetch(request);
            if (response.status >= 200 && response.status < 400) {
                return response;
            }
            // If asset not found (404), fallback to index.html for SPA routing
            if (response.status === 404 && !url.pathname.startsWith('/api/')) {
                const indexRequest = new Request(new URL('/index.html', request.url), request);
                return await env.ASSETS.fetch(indexRequest);
            }
            return response;
        } catch (e) {
            // Fallback for any errors to index.html
            const indexRequest = new Request(new URL('/index.html', request.url), request);
            return await env.ASSETS.fetch(indexRequest);
        }
    },
};
