import { VerticalGradientScript } from "./script";
import { VerticalGradientStyle } from "./style";
import { VerticalGradientTemplate } from "./template";

export const VerticalGradient = async () => {
  const style = await VerticalGradientStyle();
  const elements = document.querySelectorAll("[hotelier-widget='vertical-gradient']");
  for (const [index, element] of Array.from(elements).entries()) {
    const url = element.getAttribute("data-url");

    const template = VerticalGradientTemplate(index, url);
    const script = VerticalGradientScript(index);

    const shadow = element.attachShadow({ mode: "open" });
    shadow.innerHTML = style + template;
    shadow.appendChild(script);
  }
};
