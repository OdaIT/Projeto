document.addEventListener("keydown", function (event) {
  if (
    event.target.tagName === "INPUT" ||
    event.target.tagName === "TEXTAREA" ||
    event.target.isContentEditable
  ) {
    return;
  }

  if (event.key === "1") {
    const target = document.getElementById("QuemSomos");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
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

document.addEventListener(
  "click",
  () => {
    audioclick.play();
  },
  { once: true }
);

const audio = document.getElementById("background-song");
const toggle = document.getElementById("sound-toggle");

audio.volume = 0.5;

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    audio.play();
  } else {
    audio.pause();
  }
});

