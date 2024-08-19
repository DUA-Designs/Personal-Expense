

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/income/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.D6GZybb5.js","_app/immutable/chunks/scheduler.DOJp3p4E.js","_app/immutable/chunks/index.CAuITj8v.js"];
export const stylesheets = [];
export const fonts = [];
