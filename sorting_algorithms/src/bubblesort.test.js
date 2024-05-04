import { bubblesort } from "./bubblesort.js";

test('arrange the unsorted array into sorted array using bubble sort', () => {
  var result = [1, 5, 3, 4, 2, 8, 6];
  expect(bubblesort(result)).toEqual([1, 2, 3, 4, 5, 6, 8]);
});
