import { HorizontalRoundedScript } from "./script";
import { HorizontalRoundedStyle } from "./style";
import { HorizontalRoundedTemplate } from "./template";

export const HorizontalRounded = async () => {
  const style = await HorizontalRoundedStyle();
  const elements = document.querySelectorAll("[hotelier-widget='horizontal-rounded']");
  for (const [index, element] of Array.from(elements).entries()) {
    if (element.shadowRoot) return;
    const url = element.getAttribute("data-url");

    const template = HorizontalRoundedTemplate(index, url);
    const script = HorizontalRoundedScript(index);

    const shadow = element.attachShadow({ mode: "open" });
    shadow.innerHTML = style + template;
    shadow.appendChild(script);
  }
};
