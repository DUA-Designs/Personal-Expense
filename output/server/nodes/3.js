

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/accounts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DC9_BLGw.js","_app/immutable/chunks/scheduler.DOJp3p4E.js","_app/immutable/chunks/index.CAuITj8v.js"];
export const stylesheets = [];
export const fonts = [];
