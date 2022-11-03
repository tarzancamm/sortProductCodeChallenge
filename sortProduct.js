// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

// For sorting the index starts at 1, NOT at 0!

// The sorting has to be ascending.

// The array will never be null and will always contain numbers.


// Find new values of array. Sort smallest to largest.


const sortArr = (arr) => {
    // For each number in the array, add some additional data: the index
    // I'm going to do this by changing each array number into a 2 value array. First value being number, second value being index.
    // Then, I'll change last number to be the first value multiplied by the second value.
    // Then, I'll sort array by the the sub-arrays second values
    // Then, I'll convert the array back to its original numbers
    // The numbers will be the first numbers in the array

    arr = arr.map((num, index) => {
        return [num, index + 1]
    })

    arr = arr.map((numArr) => {
        return [numArr[0], numArr[0] * numArr[1]]
    })

    arr.sort((a, b) => {
        return a[1] -b[1]
    })

    arr = arr.map((numArr) => {
        return numArr[0]
    })

    return arr
}

console.log(sortArr([23, 2, 3, 4, 5]))