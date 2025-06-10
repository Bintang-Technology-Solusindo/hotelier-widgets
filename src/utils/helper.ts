export const isDevelopment = import.meta.env.DEV as boolean;

let styles = "";

export const getStyleFromTailwindcss = async () => {
  if (!isDevelopment) {
    if (!styles) styles = await import("../../dist/hotelier-widgets.css?raw").then((res) => res.default);
    return styles;
  }
  return "";
};
