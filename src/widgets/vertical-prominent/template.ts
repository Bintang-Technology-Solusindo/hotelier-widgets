export const VerticalProminentTemplate = (index: number, url: string | null) => {
  return /*html*/ `
    <form target="_blank" action="${url}" class="bg-white p-6 rounded-xl shadow-lg w-full max-w-md dark:bg-slate-800">
      <div class="mb-4">
        <label for="checkin-vertical-prominent-${index}" class="font-bold text-gray-700 block mb-2 dark:text-slate-100">Check-in</label>
        <input type="date" id="checkin-vertical-prominent-${index}" name="checkin" class="w-full p-2.5 rounded-lg border border-gray-300 text-base focus:border-blue-500 focus-visible:outline-none invalid:border-red-500 invalid:text-red-500 invalid:focus:border-red-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white" required>
      </div>
      <div class="mb-4">
        <label for="checkout-vertical-prominent-${index}" class="font-bold text-gray-700 block mb-2 dark:text-slate-100">Check-out</label>
        <input type="date" id="checkout-vertical-prominent-${index}" name="checkout" class="w-full p-2.5 rounded-lg border border-gray-300 text-base focus:border-blue-500 focus-visible:outline-none invalid:border-red-500 invalid:text-red-500 invalid:focus:border-red-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white" required>
      </div>
      <div class="mb-6">
        <label for="guest-vertical-prominent-${index}" class="font-bold text-gray-700 block mb-2 dark:text-slate-100">Guest</label>
        <input type="number" id="guest-vertical-prominent-${index}" name="guest" value="1" min="1" placeholder="Min 1" class="w-full p-2.5 rounded-lg border border-gray-300 text-base focus:border-blue-500 focus-visible:outline-none invalid:border-red-500 invalid:text-red-500 invalid:focus:border-red-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white" required>
      </div>
      <div>
        <button class="w-full p-3 bg-green-500 text-white rounded-lg text-base font-bold cursor-pointer hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 duration-200" type="submit">
          Search
        </button>
      </div>
    </form>
  `;
};
