import { debounce } from "./utils/debounce";
import { WidgetInit } from "./widgets";

const init = debounce(() => {
  WidgetInit();
}, 100);

window.addEventListener("load", () => {
  WidgetInit();

  type PageChangeCallback = () => void;

  function onPageChange(callback: PageChangeCallback) {
    const wrapHistoryMethod = (method: "pushState" | "replaceState"): void => {
      const original = history[method];
      history[method] = function (...args) {
        const result = original.apply(this, args);
        window.dispatchEvent(new Event("spa-navigation"));
        return result;
      };
    };

    wrapHistoryMethod("pushState");
    wrapHistoryMethod("replaceState");

    window.addEventListener("popstate", callback);
    window.addEventListener("spa-navigation", callback);
    window.addEventListener("hashchange", callback);
    window.addEventListener("load", callback);
  }

  onPageChange(() => {
    init();
  });
});
