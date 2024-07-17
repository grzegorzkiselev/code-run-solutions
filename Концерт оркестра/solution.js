const line = document.querySelector(".line");
const keys = document.querySelector(".keys").children;
const notes = {
  C1: 0,
  D1: 2,
  E1: 4,
  F1: 5,
  G1: 7,
  A1: 9,
  H1: 11,
  C2: 13,
  D2: 15,
  E2: 17,
  F2: 18,
  G2: 20,
  A2: 22,
  H2: 24,
};

const play = () => {
  Array.from(line.children).forEach((item) => {
    const classList = item.classList;

    const offset = classList.length === 3
      ? classList[2] === "flat"
        ? -1
        : classList[2] === "sharp"
          ? 1
          : 0
      : 0;

    const note = classList[1];
    note !== "separator" && keys[notes[note] + offset];
    note !== "separator" && console.log(keys[notes[note] + offset]);
    const button = note !== "separator" && keys[notes[note] + offset];

    setTimeout((button) => {
      button.click();
    }, 0, button);
  });
};

play();

document.addEventListener("click", play);