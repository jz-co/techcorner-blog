const endpoints = {
    // global
    "get.global": "/global",

    // articles related
    "get.article-categories": "/categories",
    "get.category-by-slug": "/categories?slug=", // require extension
    "get.articles": "/articles?_sort=published_at:DESC",
    "get.recent-articles": "/articles?_sort=updated_at:DESC&_limit=3",
    "get.article-by-slug": "/articles?slug=", // require extension

    // notes related
    "get.notes": "/notes?_sort=updated_at:DESC",
    "get.notes-topics": "/notes-topics",
    "get.topic-by-slug": "/notes-topics?slug=",
    "get.recent-notes": "/notes?_sort=updated_at:DESC&_limit=4",
    "get.note-by-slug": "/notes?slug=",

    // page specific
    "get.homepage": "/homepage",
    "get.about": "/about",
    "get.contact": "/contact",
}

export default endpoints;