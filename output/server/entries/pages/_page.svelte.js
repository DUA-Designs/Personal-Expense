import { k as identity, c as create_ssr_component, b as compute_rest_props, v as validate_component, a as add_attribute, l as createEventDispatcher, e as spread, g as escape_object, f as escape_attribute_value, h as getContext, s as setContext, j as compute_slots, i as escape, n as each } from "../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
import { T as ToolbarButton, i as is_void, F as Frame, P as Popper, a as Tooltip, I as Icon } from "../../chunks/Tooltip.js";
import { w as writable } from "../../chunks/index.js";
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ms-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const baseClass = "font-medium inline-flex items-center justify-center px-2.5 py-0.5";
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "large", "dismissable", "border", "href", "rounded", "transition", "params"]);
  createEventDispatcher();
  let { color = "primary" } = $$props;
  let { large = false } = $$props;
  let { dismissable = false } = $$props;
  let { border = false } = $$props;
  let { href = "" } = $$props;
  let { rounded = false } = $$props;
  let { transition = fade } = $$props;
  let { params = {} } = $$props;
  let badgeStatus = true;
  const colors = {
    primary: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    none: ""
  };
  const borderedColors = {
    primary: "bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-400 dark:border-gray-400",
    blue: "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400",
    red: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400",
    green: "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400",
    purple: "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400",
    pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400",
    none: ""
  };
  const hoverColors = {
    primary: "hover:bg-primary-200",
    dark: "hover:bg-gray-200",
    blue: "hover:bg-blue-200",
    red: "hover:bg-red-200",
    green: "hover:bg-green-200",
    yellow: "hover:bg-yellow-200",
    indigo: "hover:bg-indigo-200",
    purple: "hover:bg-purple-200",
    pink: "hover:bg-pink-200",
    none: ""
  };
  const close = () => {
    badgeStatus = false;
  };
  let badgeClass = twMerge(
    baseClass,
    large ? "text-sm" : "text-xs",
    border ? `border ${borderedColors[color]}` : colors[color],
    href && hoverColors[color],
    rounded ? "rounded-full" : "rounded",
    $$restProps.class
  );
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0) $$bindings.large(large);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
  return `${badgeStatus ? `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(badgeClass)
      }
    ],
    {}
  )}>${href ? `<a${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `${slots.default ? slots.default({}) : ``}`} ${dismissable ? `${slots["close-button"] ? slots["close-button"]({ close }) : ` ${validate_component(CloseButton, "CloseButton").$$render(
    $$result,
    {
      divclass: "ms-1.5 -me-1.5",
      color,
      size: large ? "sm" : "xs",
      ariaLabel: "Remove badge"
    },
    {},
    {}
  )} `}` : ``}</div>` : ``} `;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "pill",
    "outline",
    "size",
    "href",
    "type",
    "color",
    "shadow",
    "tag",
    "checked",
    "disabled"
  ]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "primary" } = $$props;
  let { shadow = false } = $$props;
  let { tag = "button" } = $$props;
  let { checked = void 0 } = $$props;
  let { disabled = false } = $$props;
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const colorCheckedClasses = {
    alternative: "text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",
    blue: "text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",
    dark: "text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",
    green: "text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",
    light: "text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",
    primary: "text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",
    purple: "text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",
    red: "text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",
    yellow: "text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    blue: "focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
    dark: "focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
    green: "focus-within:ring-green-300 dark:focus-within:ring-green-800",
    light: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    primary: "focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
    purple: "focus-within:ring-purple-300 dark:focus-within:ring-purple-900",
    red: "focus-within:ring-red-300 dark:focus-within:ring-red-900",
    yellow: "focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0) $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0) $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  buttonClass = twMerge(
    "text-center font-medium",
    group ? "focus-within:ring-2" : "focus-within:ring-4",
    group && "focus-within:z-10",
    group || "focus-within:outline-none",
    "inline-flex items-center justify-center " + sizeClasses[size],
    outline && checked && "border dark:border-gray-900",
    outline && checked && colorCheckedClasses[color],
    outline && !checked && outlineClasses[color],
    !outline && checked && colorCheckedClasses[color],
    !outline && !checked && colorClasses[color],
    color === "alternative" && (group && !checked ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600"),
    outline && color === "dark" && (group ? checked ? "bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600" : "dark:text-white border-gray-800 dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    coloredFocusClasses[color],
    hasBorder() && group && "[&:not(:first-child)]:-ms-px",
    group ? pill && "first:rounded-s-full last:rounded-e-full" || "first:rounded-s-lg last:rounded-e-lg" : pill && "rounded-full" || "rounded-lg",
    shadow && "shadow-lg",
    shadow && coloredShadowClasses[color],
    disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  return `${href && !disabled ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      { role: "button" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `${tag === "button" ? `<button${spread(
    [
      { type: escape_attribute_value(type) },
      escape_object($$restProps),
      { disabled: disabled || null },
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>` : `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(buttonClass)
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`}`} `;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size", "imgClass"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  let { imgClass = "" } = $$props;
  const paddings = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    none: "",
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPadding;
  let cardClass;
  let imgCls;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0) $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0) $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0) $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0) $$bindings.imgClass(imgClass);
  innerPadding = paddings[padding];
  cardClass = twMerge("flex w-full", sizes[size], reverse ? "flex-col-reverse" : "flex-col", horizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"), href && "hover:bg-gray-100 dark:hover:bg-gray-700", !img && innerPadding, $$props.class);
  imgCls = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-e-lg" : "md:rounded-s-lg"), imgClass);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgCls, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  return `<div${add_attribute("class", $$props.class, 0)}></div> `;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let containerCls;
  let headerCls;
  let ulCls;
  let footerCls;
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "open",
    "containerClass",
    "classContainer",
    "headerClass",
    "classHeader",
    "footerClass",
    "classFooter",
    "activeClass",
    "classActive",
    "arrow",
    "trigger",
    "placement",
    "color",
    "shadow",
    "rounded"
  ]);
  let $$slots = compute_slots(slots);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { classContainer = void 0 } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { classHeader = void 0 } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { classFooter = void 0 } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let { classActive = void 0 } = $$props;
  let { arrow = false } = $$props;
  let { trigger = "click" } = $$props;
  let { placement = "bottom" } = $$props;
  let { color = "dropdown" } = $$props;
  let { shadow = true } = $$props;
  let { rounded = true } = $$props;
  let activeCls = twMerge(activeClass, classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0) $$bindings.activeUrl(activeUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0) $$bindings.containerClass(containerClass);
  if ($$props.classContainer === void 0 && $$bindings.classContainer && classContainer !== void 0) $$bindings.classContainer(classContainer);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0) $$bindings.headerClass(headerClass);
  if ($$props.classHeader === void 0 && $$bindings.classHeader && classHeader !== void 0) $$bindings.classHeader(classHeader);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0) $$bindings.footerClass(footerClass);
  if ($$props.classFooter === void 0 && $$bindings.classFooter && classFooter !== void 0) $$bindings.classFooter(classFooter);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0) $$bindings.classActive(classActive);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0) $$bindings.arrow(arrow);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0) $$bindings.trigger(trigger);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      activeUrlStore.set(activeUrl);
    }
    containerCls = twMerge(containerClass, classContainer);
    headerCls = twMerge(headerClass, classHeader);
    ulCls = twMerge("py-1", $$props.class);
    footerCls = twMerge(footerClass, classFooter);
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { trigger }, { arrow }, { placement }, { shadow }, { rounded }, { color }, { class: containerCls }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} <ul${add_attribute("class", ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul> ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href", "activeClass"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            {
              role: escape_attribute_value(href ? "link" : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })} `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  const borderClasses = {
    base: "border border-gray-300 dark:border-gray-600",
    tinted: "border border-gray-300 dark:border-gray-500",
    green: "border border-green-500 dark:border-green-400",
    red: "border border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "ps-9", md: "ps-10", lg: "ps-11" };
  const rightPadding = { sm: "pe-9", md: "pe-10", lg: "pe-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0) $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        inputPadding[_size],
        $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-s-lg last:rounded-e-lg",
        group && "[&:not(:first-child)]:-ms-px",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " start-0 ps-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            escape_object({ type }),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " end-0 pe-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``}`;
      }
    }
  )} `;
});
const ListgroupItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = getContext("active") } = $$props;
  let { current = false } = $$props;
  let { disabled = false } = $$props;
  let { href = "" } = $$props;
  let { currentClass = "text-white bg-primary-700 dark:text-white dark:bg-gray-800" } = $$props;
  let { normalClass = "" } = $$props;
  let { disabledClass = "text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400" } = $$props;
  let { focusClass = "focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white" } = $$props;
  let { hoverClass = "hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white" } = $$props;
  let { itemDefaultClass = "py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg" } = $$props;
  let { attrs = void 0 } = $$props;
  const states = {
    current: currentClass,
    normal: normalClass,
    disabled: disabledClass
  };
  let state;
  let itemClass;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0) $$bindings.current(current);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.currentClass === void 0 && $$bindings.currentClass && currentClass !== void 0) $$bindings.currentClass(currentClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0) $$bindings.normalClass(normalClass);
  if ($$props.disabledClass === void 0 && $$bindings.disabledClass && disabledClass !== void 0) $$bindings.disabledClass(disabledClass);
  if ($$props.focusClass === void 0 && $$bindings.focusClass && focusClass !== void 0) $$bindings.focusClass(focusClass);
  if ($$props.hoverClass === void 0 && $$bindings.hoverClass && hoverClass !== void 0) $$bindings.hoverClass(hoverClass);
  if ($$props.itemDefaultClass === void 0 && $$bindings.itemDefaultClass && itemDefaultClass !== void 0) $$bindings.itemDefaultClass(itemDefaultClass);
  if ($$props.attrs === void 0 && $$bindings.attrs && attrs !== void 0) $$bindings.attrs(attrs);
  state = disabled ? "disabled" : current ? "current" : "normal";
  itemClass = twMerge(itemDefaultClass, states[state], active && state === "disabled" && "cursor-not-allowed", active && state === "normal" && hoverClass, active && state === "normal" && focusClass, $$props.class);
  return `${!active ? `<li${add_attribute("class", itemClass, 0)}>${slots.default ? slots.default({ item: $$props }) : ``}</li>` : `${href ? `<a${spread(
    [
      escape_object(attrs),
      { href: escape_attribute_value(href) },
      {
        class: "block " + escape(itemClass, true)
      },
      {
        "aria-current": escape_attribute_value(current)
      }
    ],
    {}
  )}>${slots.default ? slots.default({ item: $$props }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object(attrs),
      {
        class: "flex items-center text-left " + escape(itemClass, true)
      },
      { disabled: disabled || null },
      {
        "aria-current": escape_attribute_value(current)
      }
    ],
    {}
  )}>${slots.default ? slots.default({ item: $$props }) : ``}</button>`}`} `;
});
const Listgroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["items", "active", "defaultClass"]);
  createEventDispatcher();
  let { items = [] } = $$props;
  let { active = false } = $$props;
  let { defaultClass = "divide-y divide-gray-200 dark:divide-gray-600" } = $$props;
  let groupClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  {
    setContext("active", active);
  }
  groupClass = twMerge(defaultClass, $$props.class);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: active ? "div" : "ul" }, $$restProps, { rounded: true }, { border: true }, { class: groupClass }), {}, {
    default: () => {
      return `${items.length ? each(items, (item, index) => {
        return `${typeof item === "string" ? `${validate_component(ListgroupItem, "ListgroupItem").$$render($$result, { active, index }, {}, {
          default: () => {
            return `${slots.default ? slots.default({ item, index }) : ``}`;
          }
        })}` : `${validate_component(ListgroupItem, "ListgroupItem").$$render($$result, Object.assign({}, { active }, item, { index }), {}, {
          default: () => {
            return `${slots.default ? slots.default({ item, index }) : ``}`;
          }
        })}`}`;
      }) : (() => {
        let item = items[0];
        return ` ${slots.default ? slots.default({ item, index: 0 }) : ``}`;
      })()}`;
    }
  })} `;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backdropCls;
  let dialogCls;
  let frameCls;
  let headerCls;
  let bodyCls;
  let footerCls;
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "color",
    "placement",
    "autoclose",
    "outsideclose",
    "dismissable",
    "backdropClass",
    "classBackdrop",
    "dialogClass",
    "classDialog",
    "defaultClass",
    "headerClass",
    "classHeader",
    "bodyClass",
    "classBody",
    "footerClass",
    "classFooter"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { color = "default" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { outsideclose = false } = $$props;
  let { dismissable = true } = $$props;
  let { backdropClass = "fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  let { classBackdrop = void 0 } = $$props;
  let { dialogClass = "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex" } = $$props;
  let { classDialog = void 0 } = $$props;
  let { defaultClass = "relative flex flex-col mx-auto" } = $$props;
  let { headerClass = "flex justify-between items-center p-4 md:p-5 rounded-t-lg" } = $$props;
  let { classHeader = void 0 } = $$props;
  let { bodyClass = "p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain" } = $$props;
  let { classBody = void 0 } = $$props;
  let { footerClass = "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg" } = $$props;
  let { classFooter = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = (placement2) => {
    switch (placement2) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0) $$bindings.autoclose(autoclose);
  if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0) $$bindings.outsideclose(outsideclose);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0) $$bindings.dismissable(dismissable);
  if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0) $$bindings.backdropClass(backdropClass);
  if ($$props.classBackdrop === void 0 && $$bindings.classBackdrop && classBackdrop !== void 0) $$bindings.classBackdrop(classBackdrop);
  if ($$props.dialogClass === void 0 && $$bindings.dialogClass && dialogClass !== void 0) $$bindings.dialogClass(dialogClass);
  if ($$props.classDialog === void 0 && $$bindings.classDialog && classDialog !== void 0) $$bindings.classDialog(classDialog);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0) $$bindings.headerClass(headerClass);
  if ($$props.classHeader === void 0 && $$bindings.classHeader && classHeader !== void 0) $$bindings.classHeader(classHeader);
  if ($$props.bodyClass === void 0 && $$bindings.bodyClass && bodyClass !== void 0) $$bindings.bodyClass(bodyClass);
  if ($$props.classBody === void 0 && $$bindings.classBody && classBody !== void 0) $$bindings.classBody(classBody);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0) $$bindings.footerClass(footerClass);
  if ($$props.classFooter === void 0 && $$bindings.classFooter && classFooter !== void 0) $$bindings.classFooter(classFooter);
  {
    dispatch(open ? "open" : "close");
  }
  backdropCls = twMerge(backdropClass, classBackdrop);
  dialogCls = twMerge(dialogClass, classDialog, getPlacementClasses(placement));
  frameCls = twMerge(defaultClass, "w-full divide-y", $$props.class);
  headerCls = twMerge(headerClass, classHeader);
  bodyCls = twMerge(bodyClass, classBody);
  footerCls = twMerge(footerClass, classFooter);
  return `${open ? ` <div${add_attribute("class", backdropCls, 0)}></div>   <div${add_attribute("class", dialogCls, 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameCls }, { color }), {}, {
    default: () => {
      return ` ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render($$result, { class: headerCls, color }, {}, {
        default: () => {
          return `${slots.header ? slots.header({}) : ` <h3 class="${"text-xl font-semibold " + escape(
            color === "default" ? "" : "text-gray-900 dark:text-white",
            true
          ) + " p-0"}">${escape(title)}</h3> `} ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render($$result, { name: "Close modal", color }, {}, {})}` : ``}`;
        }
      })}` : ``}  <div${add_attribute("class", bodyCls, 0)} role="document">${dismissable && !$$slots.header && !title ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 end-2.5",
          color
        },
        {},
        {}
      )}` : ``} ${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render($$result, { class: footerCls, color }, {}, {
        default: () => {
          return `${slots.footer ? slots.footer({}) : ``}`;
        }
      })}` : ``}`;
    }
  })}</div></div>` : ``} `;
});
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"]);
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0) $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0) $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  buttonClass = twMerge(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", twMerge("group", $$props.class), 0)} role="presentation"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title)}`}</button> ${open ? `<div class="hidden tab_content_placeholder"><div>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li> `;
});
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let { tabStyle = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2 rtl:space-x-reverse" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const styledActiveClasses = {
    full: "p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",
    pill: "py-3 px-4 text-white bg-primary-600 rounded-lg",
    underline: "p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",
    none: ""
  };
  const styledInactiveClasses = {
    full: "p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
    pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
    underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
    none: ""
  };
  const ctx = {
    activeClasses: styledActiveClasses[tabStyle] || activeClasses,
    inactiveClasses: styledInactiveClasses[tabStyle] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.tabStyle === void 0 && $$bindings.tabStyle && tabStyle !== void 0) $$bindings.tabStyle(tabStyle);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0) $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0) $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0) $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0) $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(tabStyle) ? false : divider;
  ulClass = twMerge(defaultClass, tabStyle === "underline" && "-mb-px", $$props.class);
  return `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({ tabStyle }) : ``}</ul> ${divider ? `${slots.divider ? slots.divider({}) : ` <div class="h-px bg-gray-200 dark:bg-gray-700"></div> `}` : ``} <div${add_attribute("class", contentClass, 0)} role="tabpanel" aria-labelledby="id-tab"></div> `;
});
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "color", "aClass"]);
  let { href = "#" } = $$props;
  let { color = "text-primary-600 dark:text-primary-500" } = $$props;
  let { aClass = "inline-flex items-center hover:underline" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0) $$bindings.aClass(aClass);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(twMerge(aClass, color, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const ArrowDownOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "arrow down outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 19V5m0 14-4-4m4 4 4-4"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 19V5m0 14-4-4m4 4 4-4"></path></svg>`} `;
});
const ArrowUpOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "arrow up outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 6v13m0-13 4 4m-4-4-4 4"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 6v13m0-13 4 4m-4-4-4 4"></path></svg>`} `;
});
const ChevronDownOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "chevron down outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="m8 10 4 4 4-4"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="m8 10 4 4 4-4"></path></svg>`} `;
});
const ChevronRightOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "chevron right outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="m10 16 4-4-4-4"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="m10 16 4-4-4-4"></path></svg>`} `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var transactionData = {
    "2024-08-01": [
      {
        description: "PAYTM 9876543210",
        amount: -100,
        category: "Food",
        type: "Debit",
        balance: 1e4
      },
      {
        description: "UBER INVOICE 123456",
        amount: -50,
        category: "Transportation",
        type: "Debit",
        balance: 9950
      }
    ],
    "2024-08-02": [
      {
        description: "BIG BASKET",
        amount: -200,
        category: "Shopping",
        type: "Debit",
        balance: 9750
      },
      {
        description: "GIFT",
        amount: -100,
        category: "Miscellaneous",
        type: "Debit",
        balance: 9650
      },
      {
        description: "MOVIE TICKET",
        amount: -150,
        category: "Entertainment",
        type: "Debit",
        balance: 9500
      }
    ],
    "2024-08-03": [
      {
        description: "FOOD DELIVERY",
        amount: -120,
        category: "Food",
        type: "Debit",
        balance: 9380
      }
    ],
    "2024-08-04": [
      {
        description: "PETROL PUMP",
        amount: -150,
        category: "Transportation",
        type: "Debit",
        balance: 9230
      },
      {
        description: "ONLINE SHOPPING",
        amount: -250,
        category: "Shopping",
        type: "Debit",
        balance: 8980
      }
    ],
    "2024-08-05": [
      {
        description: "RESTAURANT BILL",
        amount: -180,
        category: "Food",
        type: "Debit",
        balance: 8800
      },
      {
        description: "CONCERT TICKET",
        amount: -200,
        category: "Entertainment",
        type: "Debit",
        balance: 8600
      },
      {
        description: "GROCERY",
        amount: -100,
        category: "Shopping",
        type: "Debit",
        balance: 8500
      }
    ],
    "2024-08-06": [
      {
        description: "CAB FARE",
        amount: -80,
        category: "Transportation",
        type: "Debit",
        balance: 8420
      }
    ],
    "2024-08-07": [
      {
        description: "ONLINE ORDER",
        amount: -220,
        category: "Shopping",
        type: "Debit",
        balance: 8200
      },
      {
        description: "SUBSCRIPTION",
        amount: -150,
        category: "Miscellaneous",
        type: "Debit",
        balance: 8050
      }
    ],
    "2024-08-08": [
      {
        "description": "Grubhub order",
        "amount": -25,
        "category": "Food",
        "type": "Debit",
        "balance": 1e4
      },
      {
        "description": "Movie ticket",
        "amount": -15,
        "category": "Entertainment",
        "type": "Debit",
        "balance": 9985
      },
      {
        "description": "Uber ride",
        "amount": -20,
        "category": "Transportation",
        "type": "Debit",
        "balance": 9965
      },
      {
        "description": "Amazon purchase",
        "amount": -50,
        "category": "Shopping",
        "type": "Debit",
        "balance": 9915
      },
      // { "description": "Savings deposit", "amount": 500, "category": "Savings", "type": "Credit", "balance": 9965 },
      {
        "description": "Coffee shop",
        "amount": -10,
        "category": "Food",
        "type": "Debit",
        "balance": 9955
      },
      {
        "description": "Netflix subscription",
        "amount": -12,
        "category": "Entertainment",
        "type": "Debit",
        "balance": 9943
      }
    ],
    "2024-08-09": [
      {
        "description": "COFFEE SHOP",
        "amount": -5.5,
        "category": "Food",
        "type": "Debit",
        "balance": 1e3
      },
      {
        "description": "LUNCH AT BISTRO",
        "amount": -15,
        "category": "Food",
        "type": "Debit",
        "balance": 985
      },
      {
        "description": "GAS STATION",
        "amount": -30,
        "category": "Transportation",
        "type": "Debit",
        "balance": 955
      }
    ],
    // {
    //   "description": "SALARY DEPOSIT",
    //   "amount": 2000.00,
    //   "category": "Miscellaneous",
    //   "type": "Credit",
    //   "balance": 2955.00
    // }
    "2024-08-12": [
      {
        description: "Coffee Shop",
        amount: -150,
        category: "Food",
        type: "Debit",
        balance: 9950
      },
      {
        description: "Grocery Store",
        amount: -500,
        category: "Shopping",
        type: "Debit",
        balance: 9430
      }
    ],
    "2024-08-11": [
      {
        description: "Lunch at Restaurant",
        amount: -250,
        category: "Food",
        type: "Debit",
        balance: 10380
      },
      {
        description: "Taxi Fare",
        amount: -100,
        category: "Transportation",
        type: "Debit",
        balance: 10280
      }
    ],
    "2024-08-10": [
      {
        description: "Dinner at Home",
        amount: -100,
        category: "Food",
        type: "Debit",
        balance: 11330
      },
      {
        description: "Electronics Store",
        amount: -1200,
        category: "Shopping",
        type: "Debit",
        balance: 10080
      },
      {
        description: "Streaming Service",
        amount: -100,
        category: "Entertainment",
        type: "Debit",
        balance: 9930
      }
    ],
    "2024-08-13": [
      {
        "description": "LUNCH AT CAFE",
        "amount": -12,
        "category": "Food",
        "type": "Debit",
        "balance": 988
      },
      {
        "description": "PET STORE PURCHASE",
        "amount": -15,
        "category": "Miscellaneous",
        "type": "Debit",
        "balance": 973
      },
      {
        "description": "MOVIE TICKETS",
        "amount": -20,
        "category": "Entertainment",
        "type": "Debit",
        "balance": 953
      }
    ],
    "2024-08-14": [
      {
        "description": "COFFEE SHOP",
        "amount": -10,
        "category": "Food",
        "type": "Debit",
        "balance": 1e3
      },
      {
        "description": "TRANSFER TO SAVINGS",
        "amount": 500,
        "category": "Transfer",
        "type": "Credit",
        "balance": 1500
      },
      {
        "description": "ONLINE PURCHASE",
        "amount": -200,
        "category": "Shopping",
        "type": "Debit",
        "balance": 1300
      }
    ],
    "2024-08-15": [
      {
        description: "GROCERY STORE",
        amount: -50,
        category: "Food",
        type: "Debit",
        balance: 1e4
      },
      {
        description: "UBER RIDE",
        amount: -20,
        category: "Travel",
        type: "Debit",
        balance: 9980
      },
      {
        description: "MOVIE TICKET",
        amount: -15,
        category: "Entertainment",
        type: "Debit",
        balance: 9965
      }
    ],
    "2024-08-16": [
      {
        description: "PAYTM 9876543210",
        amount: -100,
        category: "Shopping",
        type: "Debit",
        balance: 9865
      },
      {
        description: "COFFEE SHOP",
        amount: -10,
        category: "Food",
        type: "Debit",
        balance: 9855
      }
    ],
    "2024-08-17": [
      {
        description: "AMAZON ORDER",
        amount: -50,
        category: "Shopping",
        type: "Debit",
        balance: 9805
      },
      {
        description: "PETROL PUMP",
        amount: -30,
        category: "Travel",
        type: "Debit",
        balance: 9775
      },
      {
        description: "RESTAURANT BILL",
        amount: -25,
        category: "Food",
        type: "Debit",
        balance: 9750
      }
    ],
    "2024-08-18": [
      {
        description: "CONCERT TICKET",
        amount: -40,
        category: "Entertainment",
        type: "Debit",
        balance: 9710
      },
      {
        description: "GIFT SHOP",
        amount: -20,
        category: "Miscellaneous",
        type: "Debit",
        balance: 9690
      }
    ],
    "2024-08-19": [
      {
        description: "SALON SERVICES",
        amount: -60,
        category: "Miscellaneous",
        type: "Debit",
        balance: 9630
      },
      {
        description: "FOOD DELIVERY",
        amount: -35,
        category: "Food",
        type: "Debit",
        balance: 9595
      },
      {
        description: "TAXI FARE",
        amount: -25,
        category: "Travel",
        type: "Debit",
        balance: 9570
      }
    ]
  };
  var totalsByCategory = {};
  var listCategory = [];
  var rankingList = [];
  let dataModal = false;
  var Statistics = {};
  var options = {};
  function generateForWeek() {
    const today = /* @__PURE__ */ new Date();
    today.getDay();
    const data = [];
    totalsByCategory = {};
    listCategory = [];
    rankingList = [];
    Statistics = {};
    var transactionCount = 0;
    options.title = {
      text: "",
      align: "center",
      offsetX: 0,
      offsetY: 5,
      floating: false,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "Inter, sans-serif",
        color: "#333"
      }
    };
    var currentWeekTotal = 0;
    for (let i = 1; i <= 7; i++) {
      const dateString = new Date(today.getTime() - (i - 1) * 24 * 60 * 60 * 1e3).toISOString().split("T")[0];
      if (transactionData[dateString]) {
        totalsByCategory[dateString] = {};
        transactionData[dateString].forEach((transaction) => {
          if (transaction.amount < 0) {
            totalsByCategory[dateString][transaction.category] = (totalsByCategory[dateString][transaction.category] || 0) + transaction.amount;
            transactionCount += 1;
          }
        });
      }
      const total = transactionData[dateString] ? transactionData[dateString].filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => acc + transaction.amount, 0) : 0;
      rankingList.push({
        x: dateString,
        y: Math.abs(total),
        highlight: totalsByCategory[dateString] ? Object.keys(totalsByCategory[dateString]).length > 0 ? Object.keys(totalsByCategory[dateString]).reduce((a, b) => Math.abs(totalsByCategory[dateString][a]) < Math.abs(totalsByCategory[dateString][b]) ? b : a) : "" : ""
      });
      currentWeekTotal += total;
      data.push({ x: dateString, y: Math.abs(total) });
    }
    for (let date in totalsByCategory) {
      for (let category in totalsByCategory[date]) {
        let existingCategory = listCategory.find((item) => item.category === category);
        if (existingCategory) {
          existingCategory.value += totalsByCategory[date][category];
        } else {
          listCategory.push({
            category,
            value: totalsByCategory[date][category]
          });
        }
      }
    }
    var pastWeekTotal = 0;
    var pastWeekData = [];
    for (let i = 8; i <= 14; i++) {
      const dateString = new Date(today.getTime() - (i - 1) * 24 * 60 * 60 * 1e3).toISOString().split("T")[0];
      const total = transactionData[dateString] ? transactionData[dateString].filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => acc + transaction.amount, 0) : 0;
      pastWeekTotal += total;
      pastWeekData.push({ x: dateString, y: Math.abs(total) });
    }
    data.forEach((item, index) => item.goals = [
      {
        name: "Past",
        value: pastWeekData[index].y,
        strokeHeight: 3,
        strokeColor: "#775DD0"
      }
    ]);
    Statistics.pastWeek = { totalAmount: pastWeekTotal };
    Statistics.currentWeek = {
      totalAmount: currentWeekTotal,
      transactionCount
    };
    rankingList.sort((a, b) => Math.abs(b.y) - Math.abs(a.y));
    return data.reverse();
  }
  var periodStats;
  var pastPeriodStats;
  var ChartSelected = "";
  var PeriodSelected = "Last 7 days";
  var dropdownOpen = false;
  var dropdownToggle = false;
  function toggleCharts(type) {
    dropdownToggle = false;
    if (type === "StartChart") {
      type = "Column";
      ChartSelected = "Column";
    } else {
      ChartSelected = type;
    }
    options = {};
    if (type === "Column") {
      options = {
        colors: ["#FDBA8C"],
        series: [
          {
            name: "Current",
            color: "#FDBA8C",
            data: generateForWeek()
          }
        ],
        chart: {
          type: "bar",
          height: "320px",
          width: "100%",
          fontFamily: "Inter, sans-serif",
          toolbar: { show: true },
          events: {
            click(event, chartContext, config) {
            }
            // console.log(config.dataPointIndex);
            // console.log(options.series[0].data);
            // console.log(config.dataPointIndex);
            // dataModal=true;
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "80%",
            borderRadiusApplication: "end",
            borderRadius: 8
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          style: { fontFamily: "Inter, sans-serif" }
        },
        //       formatter: function() {
        //         console.log(totalsByCategory);
        //   const dateString = this.x;
        //   const categories = totalsByCategory[dateString];
        //   let tooltipContent = `<span style="font-weight: bold">${dateString}</span><br>`;
        //   for (const category in categories) {
        //     tooltipContent += `Category: ${category}<br>Total: ${categories[category]}<br>`;
        //   }
        //   return tooltipContent;
        // }
        states: {
          hover: { filter: { type: "darken", value: 1 } }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["transparent"]
        },
        grid: {
          show: true,
          strokeDashArray: 1,
          padding: { left: 5, right: 5, top: -14 }
        },
        dataLabels: { enabled: true },
        legend: {
          show: true,
          position: "top",
          showForSingleSeries: true,
          customLegendItems: ["Current", "Past"],
          markers: { fillColors: ["#FDBA8C", "#775DD0"] }
        },
        xaxis: {
          floating: false,
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
            }
          },
          axisBorder: { show: true },
          axisTicks: { show: true }
        },
        yaxis: { show: true },
        fill: { opacity: 1 }
      };
      periodStats = Statistics.currentWeek;
      pastPeriodStats = Statistics.pastWeek;
      calculateTrend();
    }
    if (type === "Bar") {
      options = {
        series: [{ name: "Total", data: generateForWeek() }],
        chart: { height: 320, type: "bar", width: "100%" },
        plotOptions: { bar: { horizontal: true } },
        colors: ["#00E396"],
        dataLabels: { show: true },
        // formatter: function(val, opt) {
        //   const goals =
        //     opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
        //       .goals
        //   if (goals && goals.length) {
        //     return `${val} / ${goals[0].value}`
        //   }
        //   return val
        // }
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ["Actual", "Expected"],
          markers: { fillColors: ["#00E396", "#775DD0"] }
        }
      };
    }
    if (type === "Pie") {
      options = {
        series: generateForWeek().map((item) => item.y),
        colors: [
          "#fdba8c",
          "#FDBA8C",
          "#fdba8c",
          "#fdba8c",
          "#fdba8c",
          "#fdba8c",
          "#fdba8c"
        ],
        chart: { height: 350, width: "100%", type: "pie" },
        stroke: { colors: ["white"], lineCap: "" },
        plotOptions: {
          pie: {
            labels: { show: true },
            size: "100%",
            dataLabels: { offset: -25 }
          }
        },
        labels: generateForWeek().map((item) => item.x),
        dataLabels: {
          enabled: true,
          style: { fontFamily: "Inter, sans-serif" }
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif"
        },
        yaxis: {
          labels: {
            formatter(value) {
              return value + "%";
            }
          }
        },
        xaxis: {
          labels: {
            formatter(value) {
              return value + "%";
            }
          },
          axisTicks: { show: false },
          axisBorder: { show: false }
        }
      };
    }
    if (type === "Line") {
      options = {
        chart: {
          height: "320px",
          maxWidth: "100%",
          type: "line",
          fontFamily: "Inter, sans-serif",
          dropShadow: { enabled: false },
          toolbar: { show: false }
        },
        tooltip: { enabled: true, x: { show: false } },
        dataLabels: { enabled: false },
        stroke: { width: 6, curve: "smooth" },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: { left: 2, right: 2, top: -26 }
        },
        series: [
          {
            name: "Clicks",
            data: [6500, 6418, 6456, 6526, 6356, 6456],
            color: "#1A56DB"
          },
          {
            name: "CPC",
            data: [6456, 6356, 6526, 6332, 6418, 6500],
            color: "#7E3AF2"
          }
        ],
        legend: { show: false },
        xaxis: {
          categories: ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
            }
          },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: { show: false }
      };
    }
    if (type === "Area") {
      options = {
        chart: {
          height: "320px",
          width: "100%",
          maxWidth: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: { enabled: false },
          toolbar: { show: false }
        },
        tooltip: { enabled: true, x: { show: false } },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"]
          }
        },
        dataLabels: { enabled: false },
        stroke: { width: 6 },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: { left: 2, right: 2, top: 0 }
        },
        series: [
          {
            name: "New users",
            data: [6500, 6418, 6456, 6526, 6356, 6456],
            color: "#1A56DB"
          }
        ],
        xaxis: {
          categories: [
            "01 February",
            "02 February",
            "03 February",
            "04 February",
            "05 February",
            "06 February",
            "07 February"
          ],
          labels: { show: false },
          axisBorder: { show: false },
          axisTicks: { show: false }
        },
        yaxis: { show: false }
      };
    }
  }
  toggleCharts("StartChart");
  var trend;
  function calculateTrend() {
    const pastTotal = pastPeriodStats.totalAmount;
    const currentTotal = periodStats.totalAmount;
    const difference = currentTotal - pastTotal;
    const percentageDifference = difference / pastTotal * 100;
    if (percentageDifference > 0) {
      trend = {
        result: "increased",
        percentage: percentageDifference.toFixed(2)
      };
    } else if (percentageDifference < 0) {
      trend = {
        result: "decreased",
        percentage: Math.abs(percentageDifference).toFixed(2)
      };
    } else {
      trend = { result: "same", percentage: 0 };
    }
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-103bahb_START -->${$$result.title = `<title>PE | Dashboard</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-103bahb_END -->`, ""} <div class="flex w-full h-full gap-x-2">${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Pick a date or a range",
        autoclose: true,
        open: dataModal
      },
      {
        open: ($$value) => {
          dataModal = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return ` `;
        },
        default: () => {
          return `<form><div class="grid gap-6 mb-6 md:grid-cols-2"><div> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "date",
              name: "customDateForChart",
              id: "customRange",
              required: true
            },
            {},
            {}
          )}</div> <div> ${validate_component(Input, "Input").$$render($$result, { type: "submit", value: "Confirm" }, {}, {})}</div></div></form>`;
        }
      }
    )} <div class="chart flex-col h-full w-2/3">${validate_component(Card, "Card").$$render($$result, { size: "xl", class: "  h-full" }, {}, {
      default: () => {
        return `<div class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"><div class="flex items-center"><div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3" data-svelte-h="svelte-gwdodz"><svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><defs><filter id="svgSpinnersGooeyBalls20"><feGaussianBlur in="SourceGraphic" result="y"${add_attribute("stdDeviation", 1, 0)}></feGaussianBlur><feColorMatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"></feColorMatrix><feBlend in="SourceGraphic" in2="z"></feBlend></filter></defs><g filter="url(#svgSpinnersGooeyBalls20)"><circle${add_attribute("cx", 5, 0)}${add_attribute("cy", 12, 0)}${add_attribute("r", 4, 0)} fill="#5ebc67"><animate attributeName="cx" calcMode="spline" dur="30s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="5;8;5"></animate></circle><circle${add_attribute("cx", 19, 0)}${add_attribute("cy", 12, 0)}${add_attribute("r", 4, 0)} fill="#5ebc67"><animate attributeName="cx" calcMode="spline" dur="30s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="19;16;19"></animate></circle><animateTransform attributeName="transform" dur="3.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></g></svg></div> <div><h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">${escape(periodStats ? periodStats.transactionCount : "")}</h5> <p class="text-sm font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-11gmmp3">Transactions per week</p></div></div> <div>${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            triggeredBy: ".trendChange",
            placement: "left",
            trigger: "hover",
            color: "green",
            class: "bg-white text-inherit"
          },
          {},
          {
            default: () => {
              return `Compared to past period`;
            }
          }
        )} <div class="trendChange">${options.series[0].data ? `${trend.result === "increased" ? `<span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">${validate_component(ArrowUpOutline, "ArrowUpOutline").$$render($$result, { class: "w-2.5 h-2.5 me-1.5" }, {}, {})} ${escape(trend.percentage)}%</span>` : `${trend.result === "decreased" ? `<span class="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-yellow-900 dark:text-yellow-300">${validate_component(ArrowDownOutline, "ArrowDownOutline").$$render($$result, { class: "w-2.5 h-2.5 me-1.5" }, {}, {})} ${escape(trend.percentage)}%</span>` : `<span class="bg-gray-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-red-900 dark:text-red-300">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "pepicons-pencil:line-x",
            width: "0.625rem",
            height: "0.625rem",
            style: "color: #5ebc67"
          },
          {},
          {}
        )}</span>`}`} ` : ``}</div></div></div> <div class="grid grid-cols-2"><dl class="flex items-center"><dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1" data-svelte-h="svelte-d8wv1h">Money spent:</dt><dd class="text-gray-900 text-sm dark:text-white font-semibold">₹ ${escape(options.series[0].data ? options.series[0].data.map((item) => item.y).reduce((accumulator, initialValue) => accumulator + initialValue, 0) : "")}</dd></dl> <dl class="flex items-center justify-end" data-svelte-h="svelte-b1iiye"><dd class="text-gray-900 text-sm dark:text-white font-semibold"></dd></dl></div> ${validate_component(Chart, "Chart").$$render($$result, { options }, {}, {})} <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"><div class="flex justify-between items-center pt-5">${validate_component(Button, "Button").$$render(
          $$result,
          {
            class: "text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0"
          },
          {},
          {
            default: () => {
              return `${escape(PeriodSelected)}${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render($$result, { class: "w-2.5 m-2.5 ms-1.5" }, {}, {})}`;
            }
          }
        )} ${validate_component(Dropdown, "Dropdown").$$render(
          $$result,
          {
            class: "w-40",
            offset: "-6",
            open: dropdownOpen
          },
          {
            open: ($$value) => {
              dropdownOpen = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Today`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Yesterday`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Last 7 days`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Last 30 days`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Last 90 days`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { id: "datePicker" }, {}, {
                default: () => {
                  return `Custom...`;
                }
              })} `;
            }
          }
        )} ${validate_component(A, "A").$$render(
          $$result,
          {
            href: "/",
            class: "uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline"
          },
          {},
          {
            default: () => {
              return `Leads Report
        ${validate_component(ChevronRightOutline, "ChevronRightOutline").$$render($$result, { class: "w-2.5 h-2.5 ms-1.5" }, {}, {})}`;
            }
          }
        )}</div> <div class="flex justify-between items-center pt-5">${validate_component(Button, "Button").$$render(
          $$result,
          {
            class: "text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0"
          },
          {},
          {
            default: () => {
              return `${escape(ChartSelected)}${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render($$result, { class: "w-2.5 m-2.5 ms-1.5" }, {}, {})}`;
            }
          }
        )} ${validate_component(Dropdown, "Dropdown").$$render(
          $$result,
          {
            class: "w-40",
            offset: "-6",
            open: dropdownToggle
          },
          {
            open: ($$value) => {
              dropdownToggle = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Column`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Bar`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Pie`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Line`;
                }
              })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                default: () => {
                  return `Area`;
                }
              })}`;
            }
          }
        )} </div></div>`;
      }
    })}</div> <div class="details flex flex-col w-1/3">${validate_component(Card, "Card").$$render($$result, { size: "xl", class: "    h-full" }, {}, {
      default: () => {
        return `<h3 class="text-gray-900 w-fit text-lg font-semibold dark:text-white">Statistics  - ${escape(PeriodSelected)}</h3> ${validate_component(Tabs, "Tabs").$$render(
          $$result,
          {
            tabStyle: "underline",
            contentClass: "p-0   rounded-lg   mt-4  h-full flex flex-col contentDiv flex flex-col"
          },
          {},
          {
            default: () => {
              return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Statistics" }, {}, {
                default: () => {
                  return `<p class="text-base font-semibold mb-2" data-svelte-h="svelte-duhysj">Breakdown per Category</p> ${validate_component(Listgroup, "Listgroup").$$render($$result, { class: "w-full  scrollableList " }, {}, {
                    default: () => {
                      return `${each(listCategory.sort((a, b) => Math.abs(b.value) - Math.abs(a.value)), (item, index) => {
                        return `${validate_component(ListgroupItem, "ListgroupItem").$$render(
                          $$result,
                          {
                            class: `text-gray-800 gap-1 ${index === 0 ? "bg-[#fdba8c]" : index === 1 ? "bg-[#ffd5b1]" : index === 2 ? "bg-[#fff2e6]" : ""}`
                          },
                          {},
                          {
                            default: () => {
                              return `<div class="flex justify-between justify-center items-center"><div>${escape(item.category)}</div> <div>₹ ${escape(Math.abs(item.value))}</div></div> `;
                            }
                          }
                        )}`;
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(TabItem, "TabItem").$$render(
                $$result,
                {
                  title: "Ranking",
                  contentClass: "p-0 bg-gray-50 rounded-lg dark:bg-gray-800 mt-0"
                },
                {},
                {
                  default: () => {
                    return ` ${validate_component(Tooltip, "Tooltip").$$render(
                      $$result,
                      {
                        triggeredBy: "#highlight",
                        placement: "bottom",
                        trigger: "hover",
                        color: "green",
                        class: "bg-white text-inherit"
                      },
                      {},
                      {
                        default: () => {
                          return `Observed Biggest Expend ${validate_component(Icon, "Icon").$$render(
                            $$result,
                            {
                              icon: "streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow",
                              width: "1.2rem",
                              height: "1.2rem",
                              class: "inline",
                              style: "color: #5ebc67"
                            },
                            {},
                            {}
                          )}`;
                        }
                      }
                    )} ${validate_component(Listgroup, "Listgroup").$$render($$result, { class: "  scrollableList  " }, {}, {
                      default: () => {
                        return `${each(rankingList, (item, index) => {
                          return `${validate_component(ListgroupItem, "ListgroupItem").$$render($$result, { class: `text-gray-800 gap-1  ` }, {}, {
                            default: () => {
                              return `<div class="flex justify-between justify-center items-center"><div class=""><p class="truncate font-medium text-gray-900 dark:text-white mb-1">${escape(item.x)}</p> ${item.highlight ? `${validate_component(Badge, "Badge").$$render(
                                $$result,
                                {
                                  rounded: true,
                                  color: "green",
                                  class: "text-gray-500 mb-1 cursor-pointer",
                                  id: "highlight"
                                },
                                {},
                                {
                                  default: () => {
                                    return `${escape(item.highlight)}`;
                                  }
                                }
                              )}` : ``}</div> <div>₹ ${escape(item.y)}</div></div> `;
                            }
                          })}`;
                        })}`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          }
        )}`;
      }
    })}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
