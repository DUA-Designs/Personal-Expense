

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tags/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.DRFJaBDx.js","_app/immutable/chunks/scheduler.DOJp3p4E.js","_app/immutable/chunks/index.CAuITj8v.js"];
export const stylesheets = [];
export const fonts = [];
