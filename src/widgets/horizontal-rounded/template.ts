export const HorizontalRoundedTemplate = (index: number, url: string | null) => {
  return /*html*/ `
    <div class="widget-wrapper">
      <form target="_blank" action="${url}" class="bg-white p-4 sm:p-2 rounded-2xl sm:rounded-full shadow-lg w-full max-w-2xl flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-0 dark:bg-slate-800">
        <div class="flex-1 flex items-center sm:pl-4">
          <svg class="h-5 w-5 text-gray-400 dark:text-slate-100 mr-2 hidden sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>
          <div class="w-full">
            <label for="checkin-horizontal-rounded-${index}" class="text-xs text-gray-500 sm:hidden dark:text-slate-100">Check-in</label>
            <input type="date" id="checkin-horizontal-rounded-${index}" name="checkin" class="w-full bg-transparent border-0 focus:ring-0 text-gray-700 p-0 focus-visible:outline-none dark:text-white" required>
          </div>
        </div>
        <div class="border-t sm:border-t-0 sm:border-l border-gray-200 sm:h-8 sm:mx-2"></div>
        <div class="flex-1 flex items-center">
          <div class="w-full">
            <label for="checkout-horizontal-rounded-${index}" class="text-xs text-gray-500 sm:hidden dark:text-slate-100">Check-out</label>
            <input type="date" id="checkout-horizontal-rounded-${index}" name="checkout" class="w-full bg-transparent border-0 focus:ring-0 text-gray-700 p-0 focus-visible:outline-none dark:text-white" required>
          </div>
        </div>
        <div class="border-t sm:border-t-0 sm:border-l border-gray-200 sm:h-8 sm:mx-2"></div>
        <div class="flex-1 flex items-center sm:pr-2">
          <svg class="h-5 w-5 text-gray-400 dark:text-slate-100 mr-2 hidden sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
          <div class="w-full">
            <label for="guest-horizontal-rounded-${index}" class="text-xs text-gray-500 sm:hidden dark:text-slate-100">Tamu</label>
            <input type="number" id="guest-horizontal-rounded-${index}" name="guest" value="1" min="1" placeholder="Min 1" class="w-full bg-transparent border-0 focus:ring-0 text-gray-700 p-0 focus-visible:outline-none dark:text-white" required>
          </div>
        </div>
        <button class="sm:ms-2.5 bg-blue-500 text-white sm:rounded-full p-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto sm:self-center rounded-xl flex items-center justify-center gap-2 dark:bg-blue-600 dark:hover:bg-blue-500 duration-200">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span class="sm:hidden font-semibold">Search</span>
        </button>
      </form>
    </div>
  `;
};
