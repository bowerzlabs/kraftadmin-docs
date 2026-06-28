import { error } from "@sveltejs/kit";
import { getPage } from "$lib/docs/loader";
import {
    getPrevious,
    getNext,
    getBreadcrumbs
} from "$lib/docs/navigation";

export async function load({ params }) {

    const slug =
        params.slug === undefined
            ? "introduction"
            : params.slug;

    const page = getPage(slug);

    if (!page) {
        throw error(404, "Documentation page not found.");
    }

    return {

        slug,

        component: page.component,

        metadata: page.metadata,

        breadcrumbs: getBreadcrumbs(slug),

        previous: getPrevious(slug),

        next: getNext(slug)

    };
}

// export async function load({ params }) {
//     console.log(params.slug, typeof params.slug);

//     const slug = Array.isArray(params.slug)
//         ? params.slug.join('/')
//         : params.slug ?? 'introduction';


//     const page = getPage(slug);


//     if (!page) {
//         throw error(404, "Documentation page not found.");
//     }

//     return {
//         slug,
//         component: page.component,
//         metadata: page.metadata
//     };
// }