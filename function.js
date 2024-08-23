function fitsInOneBox(boxes) {
  boxes.sort((box1, box2) => {
      return box1.l - box2.l || box1.w - box2.w || box1.h - box2.h;
  });

  for (let i = 0; i < boxes.length - 1; i++) {
      if (
          boxes[i].l >= boxes[i + 1].l ||
          boxes[i].w >= boxes[i + 1].w ||
          boxes[i].h >= boxes[i + 1].h
      ) {
          return false; 
      }
  }

  return true; 
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

console.log(fitsInOneBox(boxes))