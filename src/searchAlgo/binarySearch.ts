const arrNum: number[] = [25, 100, 34, 543, 545, 67, 43, 50];
const searchNum = 25;

function binarySearch(arr: number[], target: number): number {
  arr.sort((a, b) => a - b);
  //   console.log("Sorted Array:", arr);

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(`Checking at index ${mid}: ${arr[mid]}`);

    if (arr[start] === target) return start;
    if (arr[end] === target) return end;

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

const result = binarySearch(arrNum, searchNum);
console.log(result !== -1 ? `Found at index: ${result}` : "Not Found");
