const Horizontal = () => {
  const element = document.querySelectorAll("[hotelier-widget='horizontal']");

  element.forEach((element) => {
    const shadow = element.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <link href="https://pastebin.com/raw/w1xNRRLD" rel="stylesheet">
      <div class="hotelier:bg-black">
        <span class="counter-text">0</span>
        <button class="counter-button">Tambah</button>
      </div>
    `;
    // element.innerHTML = `
    //   <div class="hotelier:bg-black">
    //     <span class="counter-text">0</span>
    //     <button class="counter-button">Tambah</button>
    //   </div>
    // `;
  });
}

export default Horizontal;