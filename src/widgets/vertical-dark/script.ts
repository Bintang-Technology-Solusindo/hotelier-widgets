export const VerticalDarkScript = (index: number) => {
  const scriptElement = document.createElement("script");
  scriptElement.textContent = `(${main.toString().replaceAll("_INDEX", String(index))})();`;

  return scriptElement;
};

const main = () => {
  const index = "_INDEX" as string | number;
  const checkinId = `checkin-vertical-dark-${index}`;
  const checkoutId = `checkout-vertical-dark-${index}`;
  const guestId = `guest-vertical-dark-${index}`;

  const hostEl = document.querySelectorAll("[hotelier-widget='vertical-dark']")[index as number] as HTMLElement;
  const shadowRoot = hostEl.shadowRoot!;
  const shadowHostWrapper = (shadowRoot.querySelector(".widget-wrapper") || shadowRoot) as HTMLElement;

  const syncDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");
    shadowHostWrapper.classList.toggle("dark", isDark);
  };

  syncDarkMode();

  const observer = new MutationObserver(() => {
    syncDarkMode();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  (() => {
    const checkinInput = shadowRoot.getElementById(checkinId)! as HTMLInputElement;
    const checkoutInput = shadowRoot.getElementById(checkoutId)! as HTMLInputElement;
    const guestInput = shadowRoot.getElementById(guestId)! as HTMLInputElement;

    if (!checkinInput || !checkoutInput || !guestInput) return;

    const today = new Date();
    const todayString = today.toISOString().split("T")[0]!;
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0]!;

    checkinInput.min = todayString;
    checkinInput.value = todayString;
    checkoutInput.min = tomorrowString;
    checkoutInput.value = tomorrowString;

    guestInput.min = "1";
    guestInput.value = "1";

    function handleDateChange() {
      const checkinDate = new Date(checkinInput.value);
      const checkoutDate = new Date(checkoutInput.value);

      const minCheckoutDate = new Date(checkinDate);
      minCheckoutDate.setDate(checkinDate.getDate() + 1);
      const minCheckoutDateString = minCheckoutDate.toISOString().split("T")[0]!;

      checkoutInput.min = minCheckoutDateString;

      if (checkoutDate <= checkinDate) {
        checkoutInput.value = minCheckoutDateString;
      }
    }

    checkinInput.addEventListener("change", handleDateChange);
    checkoutInput.addEventListener("change", handleDateChange);
  })();
};
