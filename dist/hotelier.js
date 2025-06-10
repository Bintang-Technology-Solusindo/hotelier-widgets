var n=()=>{document.querySelectorAll("[hotelier-widget='horizontal']").forEach((e)=>{let o=e.attachShadow({mode:"open"});o.innerHTML=`
      <link href="https://cdn.jsdelivr.net/gh/Bintang-Technology-Solusindo/hotelier-widget@main/dist/hotelier.css" rel="stylesheet">
      <div class="hotelier:bg-black">
        <span class="counter-text">0</span>
        <button class="counter-button">Tambah</button>
      </div>
    `})},t=n;t();
