let arr = [24, 5, 54, 4, 35, 23, 43, 44];
let searchEle = 44;

function lenearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
}

const resultIndex = lenearSearch(arr, searchEle);
console.log(resultIndex !== -1 ? `found on ${resultIndex} index` : `Not found`);
