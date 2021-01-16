/* 
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
 You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array 
 in ascending order.
*/
/*
For example, given the array arr = [7, 1, 3, 2, 4, 5, 6] we perform the following steps:
i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]

It took 5 swaps to sort the array
*/

// solutions O(nlogn) complexity

/*
1) make a map that stores the numbers in the arr with their corresponding index in a k,v pair
2) initialize the number of swaps to 0 (swap = 0)
3) loop over the elemt of the array starting at i =0 to i < arr.length:
    (elmts of the array are unordered list of consecutive numbers so the first elmt in a ordered list should be 1)
    a) check  if arr[i] === i+1.
    b) if th codition is not met,
        get the index of i + 1 from the map : ind = map.get(i + 1)
        swap arr[i] with arr[ind]
        update the position of the elemnts in the map accordingly
        then increase the num of swaps by 1
4) return swap
*/
function minimumSwaps(arr) {

    const map = new Map();
    for (let i = 0; i < arr.length; i++) map.set(arr[i], i);

    let swap = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            const targetIdx = map.get(i + 1);
            const temp = arr[i];
            arr[i] = arr[targetIdx];
            arr[targetIdx] = temp;
            map.set(arr[i], i);
            map.set(arr[targetIdx], targetIdx);
            swap++;
        }
    }
    return swap;

}