import { HorizontalScript } from "./script";
import { HorizontalStyle } from "./style";
import { HorizontalTemplate } from "./template";

export const Horizontal = async () => {
  const style = await HorizontalStyle();
  const elements = document.querySelectorAll("[hotelier-widget='horizontal']");
  for (const [index, element] of Array.from(elements).entries()) {
    const url = element.getAttribute("data-url");

    const template = HorizontalTemplate(index, url);
    const script = HorizontalScript(index);

    const shadow = element.attachShadow({ mode: "open" });
    shadow.innerHTML = style + template;
    shadow.appendChild(script);
  }
};
