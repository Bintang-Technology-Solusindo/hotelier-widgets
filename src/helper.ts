export const isDevelopment = import.meta.env.DEV as boolean;

let styles = "";
if (isDevelopment) {
  styles = ""; // pakai <link>, bukan <style>
} else {
  import("../dist/hotelier-widgets.css?raw").then((res) => {
    styles = res.default;
  });
}
export const getStyleFromTailwindcss = () => {
  if (!isDevelopment) {
    return styles;
  }
  return "";
};
