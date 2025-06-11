export const HorizontalRoundedScript = (index: number) => {
  const scriptElement = document.createElement("script");
  scriptElement.textContent = `(${main.toString().replaceAll("_INDEX", String(index))})();`;

  return scriptElement;
};

const main = () => {
  const index = "_INDEX" as string | number;
  const checkinId = `checkin-horizontal-rounded-${index}`;
  const checkoutId = `checkout-horizontal-rounded-${index}`;
  const guestId = `guest-horizontal-rounded-${index}`;
  const shadowRoot = (document.querySelectorAll("[hotelier-widget='horizontal-rounded']")[index as number] as HTMLElement).shadowRoot!;

  (() => {
    const checkinInput = shadowRoot.getElementById(checkinId)! as HTMLInputElement;
    const checkoutInput = shadowRoot.getElementById(checkoutId)! as HTMLInputElement;
    const guestInput = shadowRoot.getElementById(guestId)! as HTMLInputElement;

    if (!checkinInput || !checkoutInput || !guestInput) {
      return;
    }

    const today = new Date();
    const todayString = today.toISOString().split("T")[0]!;

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0]!;

    checkinInput.min = todayString;
    checkinInput.value = todayString;

    checkoutInput.min = tomorrowString;
    checkoutInput.value = tomorrowString;

    guestInput.min = String(1);
    guestInput.value = String(1);

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
