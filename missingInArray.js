// First Attempt - assuming numbers are sequential

let array = [1,2,3,4,6,7,8,9,10,11,13,15,16,17]
let missing = []

let findMissing = (input) => {
    // Loop through entire array starting at index 1
    for (i=1; i < input.length; i++){
        
        if ((input[i]) - input[i-1] != 1) {
            missing.push(input[i]-1);
        }
    }
    console.log(missing)
}

findMissing(array);