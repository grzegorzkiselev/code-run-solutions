const flatNotes = [7,7,7,3,10,null,7,3,10,7,14,14,14,15,10,null,6,3,10,7];

const keys = document.querySelector(".keys").children;

const TIMEOUT = 12000;
const noteLength = TIMEOUT / flatNotes.length;
let i = 0;

const play = () => {
  if (i < noteLength) {
    setTimeout((i) => {
      keys[flatNotes[i]] && keys[flatNotes[i]].click();
      play();
    }, noteLength, i);
    i++;
  }
}

play();
