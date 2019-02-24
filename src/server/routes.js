/**
 * @type {Object}
 * @description This is the server side router config. Here we can manipulate
 * the routes that are requested while using the Next.js built in router.
 * @structure
 * ```js
 * ROUTE_NAME: {
 *   path: '/', // the url the client is requesting, accepts dynamic params (Required)
 *   page: 'index', // the filesystem path to the route, root is relative to the pages directory (Required)
 * }
 * ```
 */
module.exports = {
    HOME: {
        path: '/',
        page: 'index',
    },
    POSTS: {
        path: '/posts/:id',
        page: 'posts',
    },
};
