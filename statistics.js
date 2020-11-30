
function max(arr) {
    let biggest 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i]
        }

    }
    return biggest
}

function min(arr) {
    let smallest 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < biggest) {
            smallest = arr[i]
        }
        
    }
    return smallest
}

function mean(arr) {
    let all
    for (let i = 0; i < arr.length; i++) {
        all = all + arr[i]
        
    }
    return all / arr.length
}

console.log(max([1, 2, 3, 4, 5]))
console.log(min([1, 2, 3, 4, 5]))
console.log(mean([1, 2, 3, 4, 5]))
