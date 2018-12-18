let array = [1,2,2,3,4,5]

let removeDuplicate = (n) => {
    newArray = []
    for (i = 0; i < n.length; i++) {
        current = n[i];

        if (i === 0) {
            newArray.push(current);
        }

        if (current != newArray[newArray.length-1]) {
            newArray.push(current)
        } 
    
    }

    console.log(newArray)
}

removeDuplicate(array)