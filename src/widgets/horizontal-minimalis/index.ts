import { HorizontalMinimalisScript } from "./script";
import { HorizontalMinimalisStyle } from "./style";
import { HorizontalMinimalisTemplate } from "./template";

export const HorizontalMinimalis = async () => {
  const style = await HorizontalMinimalisStyle();
  const elements = document.querySelectorAll("[hotelier-widget='horizontal-minimalis']");
  for (const [index, element] of Array.from(elements).entries()) {
    const url = element.getAttribute("data-url");

    const template = HorizontalMinimalisTemplate(index, url);
    const script = HorizontalMinimalisScript(index);

    const shadow = element.attachShadow({ mode: "open" });
    shadow.innerHTML = style + template;
    shadow.appendChild(script);
  }
};
