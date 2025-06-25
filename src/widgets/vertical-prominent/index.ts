import { VerticalProminentScript } from "./script";
import { VerticalProminentStyle } from "./style";
import { VerticalProminentTemplate } from "./template";

export const VerticalProminent = async () => {
  const style = await VerticalProminentStyle();
  const elements = document.querySelectorAll("[hotelier-widget='vertical-prominent']");
  for (const [index, element] of Array.from(elements).entries()) {
    if (element.shadowRoot) return;
    const url = element.getAttribute("data-url");

    const template = VerticalProminentTemplate(index, url);
    const script = VerticalProminentScript(index);

    const shadow = element.attachShadow({ mode: "open" });
    shadow.innerHTML = style + template;
    shadow.appendChild(script);
  }
};
