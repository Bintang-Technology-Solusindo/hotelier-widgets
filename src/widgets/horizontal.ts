const Horizontal = () => {
  const element = document.querySelectorAll("[hotelier-widget='horizontal']");

  element.forEach((element) => {
    const shadow = element.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link href="https://cdn.jsdelivr.net/gh/Bintang-Technology-Solusindo/hotelier-widget@main/dist/hotelier.css" rel="stylesheet">
      <div class="hotelier:bg-black">
        <span class="counter-text">0</span>
        <button class="counter-button">Tambah</button>
      </div>
    `;
  });
}

export default Horizontal;