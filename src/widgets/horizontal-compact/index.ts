import { HorizontalCompactScript } from "./script";
import { HorizontalCompactStyle } from "./style";
import { HorizontalCompactTemplate } from "./template";

export const HorizontalCompact = async () => {
  const style = await HorizontalCompactStyle();
  const elements = document.querySelectorAll("[hotelier-widget='horizontal-compact']");
  for (const [index, element] of Array.from(elements).entries()) {
    const url = element.getAttribute("data-url");

    const template = HorizontalCompactTemplate(index, url);
    const script = HorizontalCompactScript(index);

    const shadow = element.attachShadow({ mode: "open" });
    shadow.innerHTML = style + template;
    shadow.appendChild(script);
  }
};
