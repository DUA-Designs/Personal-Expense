import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.bvnP37F5.js","_app/immutable/chunks/scheduler.DOJp3p4E.js","_app/immutable/chunks/index.CAuITj8v.js","_app/immutable/chunks/Tooltip.B5hWlu9J.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.HZaLNGxn.js"];
export const stylesheets = [];
export const fonts = [];
