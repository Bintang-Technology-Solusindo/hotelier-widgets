import { getStyleFromTailwindcss } from "../helper";

const Horizontal = async (isDevelopment: boolean) => {
  const elements = document.querySelectorAll("[hotelier-widget='horizontal']");

  for (const element of Array.from(elements)) {
    const shadow = element.attachShadow({ mode: "open" });
    shadow.innerHTML = `${isDevelopment ? `<link href="/src/assets/css/main.css" rel="stylesheet">` : `<style>${getStyleFromTailwindcss()}</style>`}
      <div class="hotelier:bg-red-500 hotelier:flex">
        <span class="counter-text">0</span>
        <button class="counter-button">Tambah</button>
        <select>
          <option value="1">1</option>
        </select>
      </div>`;
  }
};

export default Horizontal;
