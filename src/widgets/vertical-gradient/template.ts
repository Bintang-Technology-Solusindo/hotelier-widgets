export const VerticalGradientTemplate = (index: number, url: string | null) => {
  return /*html*/ `
    <div class="widget-wrapper">
      <form target="_blank" action="${url}" class="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-xl shadow-lg w-full max-w-2xl text-white">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="checkin-vertical-gradient-${index}" class="block text-sm font-medium mb-1 opacity-80">Check-in</label>
            <input type="date" id="checkin-vertical-gradient-${index}" name="checkin" class="w-full p-3 rounded-lg bg-white/20 border-2 border-transparent focus:border-white focus:ring-0 text-base" required>
          </div>
          <div>
            <label for="checkout-vertical-gradient-${index}" class="block text-sm font-medium mb-1 opacity-80">Check-out</label>
            <input type="date" id="checkout-vertical-gradient-${index}" name="checkout" class="w-full p-3 rounded-lg bg-white/20 border-2 border-transparent focus:border-white focus:ring-0 text-base" required>
          </div>
          <div class="md:col-span-2">
            <label for="guest-vertical-gradient-${index}" class="block text-sm font-medium mb-1 opacity-80">Guest</label>
            <input type="number" id="guest-vertical-gradient-${index}" name="guest" value="1" min="1" placeholder="Min 1" class="w-full p-3 rounded-lg bg-white/20 border-2 border-transparent focus:border-white focus:ring-0 text-base" required>
          </div>
        </div>
        <button class="w-full mt-8 py-3 bg-white text-indigo-600 rounded-lg text-lg font-bold cursor-pointer hover:bg-gray-200">Search Now</button>
      </form>
    </div>
  `;
};
