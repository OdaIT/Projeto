document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (event) => {
    if (
      event.target.tagName === "INPUT" ||
      event.target.tagName === "TEXTAREA"
    ) {
      return;
    }

    const sections = {
      "1": "QuemSomos",
      "2": "ANossaVisao",
      "3": "OqueDefendemos",
      "4": "OqueOferecemos",
      "5": "Juntar-se",
    };

    const sectionId = sections[event.key];

    if (sectionId) {
      document
        .getElementById(sectionId)
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const r1 = document.getElementById("radioSim");
  const r2 = document.getElementById("radioNao");
  const l1 = document.getElementById("label1");
  const l2 = document.getElementById("label2");

  function swapIfNo(clickedRadio) {
    if (clickedRadio.value === "Não") {
      [r1.value, r2.value] = [r2.value, r1.value];

      [l1.textContent, l2.textContent] = [l2.textContent, l1.textContent];

      r1.checked = r1.value === "Sim!";
      r2.checked = r2.value === "Sim!";
    }
  }
  r1.addEventListener("change", () => swapIfNo(r1));
  r2.addEventListener("change", () => swapIfNo(r2));
});

const audioclick = document.getElementById("background-song");
audioclick.volume = 0.5;

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-song");
  const soundToggle = document.querySelector(".SoundButton input");

  audio.muted = false;

  soundToggle.addEventListener("change", () => {
    audio.muted = soundToggle.checked;
  });
})

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("Nav_List");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  // fecha o menu ao clicar num link
  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
    });
  });
});