export async function load({ url }) {
    return {
        slug: url.pathname
            .replace("/docs/", "")
            .replace(/\/$/, "")
    };
}