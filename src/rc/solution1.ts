// reverse code
// build logic with no guide, only output

// input
// N
// 60

// output
// S

// input
// N
// -90

// output
// W


export function solution(HDG: string, A: number) {
  const directions = ["N", "E", "S", "W"];

  const actualPosition = directions.indexOf(HDG);

  const movesToPerform = (A / 90 + actualPosition)  % 4;

  const finalPosition = movesToPerform >= 0 ? movesToPerform : 4 - movesToPerform * -1;

  return directions[finalPosition]
}
