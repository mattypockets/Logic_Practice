// Create a new array without duplicates

let array = [1,2,2,3,4,2,3,5]

let removeDuplicate = (n) => {
    workingArray = n.sort()
    newArray = []
    for (i = 0; i < workingArray.length; i++) {
        current = workingArray[i];

        if (i === 0) {
            newArray.push(current);
        }

        if (current != newArray[newArray.length-1]) {
            newArray.push(current)
        } 
    
    }

    console.log(newArray)
}
