export const VerticalDarkTemplate = (index: number, url: string | null) => {
  return /*html*/ `
    <form target="_blank" action="${url}" class="bg-slate-800 p-6 rounded-xl w-full max-w-lg">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="checkin-vertical-dark-${index}" class="text-slate-200 block text-sm font-medium mb-1 opacity-80">Check-in</label>
          <input type="date" id="checkin-vertical-dark-${index}" name="checkin" title="Check-in" class="w-full p-3 border border-slate-600 rounded-lg text-base bg-slate-700 text-gray-200" required>
        </div>
        <div>
          <label for="checkout-vertical-dark-${index}" class="text-slate-200 block text-sm font-medium mb-1 opacity-80">Check-out</label>
          <input type="date" id="checkout-vertical-dark-${index}" name="checkout" title="Check-out" class="w-full p-3 border border-slate-600 rounded-lg text-base bg-slate-700 text-gray-200" required>
        </div>
        <div class="sm:col-span-2">
          <label for="guest-vertical-dark-${index}" class="text-slate-200 block text-sm font-medium mb-1 opacity-80">Guest</label>
          <input type="number" id="guest-vertical-dark-${index}" name="guest" value="1" min="1" placeholder="Min 1" class="w-full p-3 border border-slate-600 rounded-lg text-base bg-slate-700 text-gray-200" required>
        </div>
      </div>
      <button class="w-full mt-8 py-3 bg-red-500 text-white rounded-lg text-lg font-bold cursor-pointer hover:bg-red-600">Search</button>
    </form>
  `;
};
