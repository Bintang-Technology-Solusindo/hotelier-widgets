import { getStyleFromTailwindcss } from "../utils/helper";

const Horizontal = async (isDevelopment: boolean) => {
  const style = await getStyleFromTailwindcss();
  const elements = document.querySelectorAll("[hotelier-widget='horizontal']");

  for (const [index, element] of Array.from(elements).entries()) {
    const shadow = element.attachShadow({ mode: "open" });
    const url = element.getAttribute("hotelier-url");

    const htmlAndCssContent = /*html*/ `
      ${isDevelopment ? `<link href="/src/index.css" rel="stylesheet">` : `<style>${style}</style>`}
      <form target="_blank" action="${url}" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 items-end bg-white p-5 rounded-xl shadow-lg w-full">
        <div class="col-span-1 lg:col-span-2">
          <label for="checkin-${index}" class="text-sm text-gray-600 block mb-1">Check-in</label>
          <input type="date" id="checkin-${index}" name="checkin" class="w-full p-2.5 rounded-lg border border-gray-300 text-base focus:border-blue-500 focus-visible:outline-none invalid:border-red-500 invalid:text-red-500 invalid:focus:border-red-500" required>
        </div>
        <div class="col-span-1 lg:col-span-2">
          <label for="checkout-${index}" class="text-sm text-gray-600 block mb-1">Check-out</label>
          <input type="date" id="checkout-${index}" name="checkout" class="w-full p-2.5 rounded-lg border border-gray-300 text-base focus:border-blue-500 focus-visible:outline-none invalid:border-red-500 invalid:text-red-500 invalid:focus:border-red-500" required>
        </div>
        <div class="col-span-full md:col-span-1">
          <label for="guest-${index}" class="text-sm text-gray-600 block mb-1">Guest</label>
          <input type="number" id="guest-${index}" name="guest" value="1" min="1" placeholder="Min 1" class="w-full p-2.5 rounded-lg border border-gray-300 text-base focus:border-blue-500 focus-visible:outline-none invalid:border-red-500 invalid:text-red-500 invalid:focus:border-red-500" required>
        </div>
        <div class="col-span-full lg:col-span-1">
          <button class="w-full p-3 bg-blue-500 text-white rounded-lg text-base font-bold cursor-pointer hover:bg-blue-600" type="submit">
            Search
          </button>
        </div>
      </form>`;

    shadow.innerHTML = htmlAndCssContent;

    const scriptElement = document.createElement("script");

    scriptElement.textContent = `
      function setupWidget(shadowRoot) {
        const checkinInput = shadowRoot.getElementById('checkin-${index}');
        const checkoutInput = shadowRoot.getElementById('checkout-${index}');
        const guestInput = shadowRoot.getElementById('guest-${index}');

        if (!checkinInput || !checkoutInput || !guestInput) {
            return;
        }

        const today = new Date();
        const todayString = today.toISOString().split('T')[0];

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const tomorrowString = tomorrow.toISOString().split('T')[0];

        checkinInput.min = todayString;
        checkinInput.value = todayString;

        checkoutInput.min = tomorrowString;
        checkoutInput.value = tomorrowString;

        guestInput.min = 1;
        guestInput.value = 1;

        function handleDateChange() {
          const checkinDate = new Date(checkinInput.value);
          const checkoutDate = new Date(checkoutInput.value);

          const minCheckoutDate = new Date(checkinDate);
          minCheckoutDate.setDate(checkinDate.getDate() + 1);
          const minCheckoutDateString = minCheckoutDate.toISOString().split('T')[0];

          checkoutInput.min = minCheckoutDateString;

          if (checkoutDate <= checkinDate) {
              checkoutInput.value = minCheckoutDateString;
          }
        }

        checkinInput.addEventListener('change', handleDateChange);
        checkoutInput.addEventListener('change', handleDateChange);
      }
    
      setupWidget(document.querySelectorAll("[hotelier-widget='horizontal']")[${index}].shadowRoot);
    `;

    shadow.appendChild(scriptElement);
  }
};

export default Horizontal;
