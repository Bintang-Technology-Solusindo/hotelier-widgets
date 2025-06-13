export const HorizontalCompactTemplate = (index: number, url: string | null) => {
  return /*html*/ `
    <div class="widget-wrapper">
      <form target="_blank" action="${url}" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 items-end bg-white dark:bg-slate-800 p-5 rounded-xl shadow-lg w-full max-w-4xl">
        <div class="col-span-1 lg:col-span-2">
          <label for="checkin-horizontal-compact-${index}" class="text-sm text-gray-600 dark:text-slate-200 block mb-1">Check-in</label>
          <input type="date" id="checkin-horizontal-compact-${index}" name="checkin" class="w-full p-2.5 rounded-lg border border-gray-300 text-base focus:border-blue-500 focus-visible:outline-none dark:bg-slate-700 dark:border-slate-600 text-gray-700 dark:text-white" required>
        </div>
        <div class="col-span-1 lg:col-span-2">
          <label for="checkout-horizontal-compact-${index}" class="text-sm text-gray-600 dark:text-slate-200 block mb-1">Check-out</label>
          <input type="date" id="checkout-horizontal-compact-${index}" name="checkout" class="w-full p-2.5 rounded-lg border border-gray-300 text-base focus:border-blue-500 focus-visible:outline-none dark:bg-slate-700 dark:border-slate-600 text-gray-700 dark:text-white" required>
        </div>
        <div class="col-span-full md:col-span-1 mb-3 md:mb-0">
          <label for="guest-horizontal-compact-${index}" class="text-sm text-gray-600 dark:text-slate-200 block mb-1">Guest</label>
          <input type="number" id="guest-horizontal-compact-${index}" name="guest" value="1" min="1" placeholder="Min 1" class="w-full p-2.5 rounded-lg border border-gray-300 text-base focus:border-blue-500 focus-visible:outline-none dark:bg-slate-700 dark:border-slate-600 text-gray-700 dark:text-white" required>
        </div>
        <div class="col-span-full lg:col-span-1">
          <button class="w-full p-3 bg-blue-500 text-white rounded-lg text-base font-bold cursor-pointer hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 duration-200" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  `;
};
