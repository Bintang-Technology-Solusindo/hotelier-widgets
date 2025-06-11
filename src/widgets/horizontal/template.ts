export const HorizontalTemplate = (index: number, url: string | null) => {
  return /*html*/ `
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
    </form>
  `;
};
