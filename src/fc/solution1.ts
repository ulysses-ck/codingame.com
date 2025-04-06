/*
input 

NN

output
(0, 2)
*/


export function solution(DIRECTIONS: string) {
  let x = 0;
  let y = 0;

  DIRECTIONS.split("").forEach((e) => {
    if (e === "N") {
      y += 1;
    } else if (e === "S") {
      y -= 1;
    } else if (e === "E") {
      x += 1;
    } else if (e === "W") {
      x -= 1;
    }
  });

  return `(${x},${y})`;
}
