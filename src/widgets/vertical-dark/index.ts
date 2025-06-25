import { VerticalDarkScript } from "./script";
import { VerticalDarkStyle } from "./style";
import { VerticalDarkTemplate } from "./template";

export const VerticalDark = async () => {
  const style = await VerticalDarkStyle();
  const elements = document.querySelectorAll("[hotelier-widget='vertical-dark']");
  for (const [index, element] of Array.from(elements).entries()) {
    if (element.shadowRoot) return;
    const url = element.getAttribute("data-url");

    const template = VerticalDarkTemplate(index, url);
    const script = VerticalDarkScript(index);

    const shadow = element.attachShadow({ mode: "open" });
    shadow.innerHTML = style + template;
    shadow.appendChild(script);
  }
};
