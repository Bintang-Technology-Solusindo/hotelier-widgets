export const HorizontalMinimalisTemplate = (index: number, url: string | null) => {
  return /*html*/ `
    <div class="widget-wrapper">
      <form target="_blank" action="${url}" class="grid grid-cols-1 gap-4 bg-white dark:bg-slate-800 p-5 rounded-xl shadow-lg w-full">
        <div class="flex flex-wrap gap-6 items-center">
          <div class="flex-grow-[2] min-w-[200px] flex gap-4">
            <div class="flex-1">
              <label for="checkin-horizontal-minimalis-${index}" class="text-sm text-gray-500 dark:text-slate-200">Check-in</label>
              <input type="date" id="checkin-horizontal-minimalis-${index}" name="checkin" class="w-full border-0 border-b-2 border-gray-300 py-2 px-0 text-base bg-transparent focus:border-blue-500 focus:ring-0 focus-visible:outline-none dark:text-white" required>
            </div>
            <div class="flex-1">
              <label for="checkout-horizontal-minimalis-${index}" class="text-sm text-gray-500 dark:text-slate-200">Check-out</label>
              <input type="date" id="checkout-horizontal-minimalis-${index}" name="checkout" class="w-full border-0 border-b-2 border-gray-300 py-2 px-0 text-base bg-transparent focus:border-blue-500 focus:ring-0 focus-visible:outline-none dark:text-white" required>
            </div>
          </div>
          <div class="flex-1 min-w-[100px]">
            <label for="guest-horizontal-minimalis-${index}" class="text-sm text-gray-500 dark:text-slate-200">Guest</label>
            <input type="number" id="guest-horizontal-minimalis-${index}" name="guest" value="1" min="1" placeholder="Min 1" class="w-full border-0 border-b-2 border-gray-300 py-2 px-0 text-base bg-transparent focus:border-blue-500 focus:ring-0 focus-visible:outline-none dark:text-white" required>
          </div>
          <div class="md:h-full w-full md:w-fit flex items-end justify-center">
            <button class="h-12 w-full md:w-12 bg-yellow-400 text-[#040A10] rounded-full  font-medium flex items-center justify-center gap-x-2 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400 duration-200 transition-colors" type="submit">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
              </span>  
              <span class="md:hidden">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  `;
};
