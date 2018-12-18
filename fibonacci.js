// Creating a fibonacci sequence of a given length

let fibonacci = (n) => {
    let solution = [];

    for (i = 0; i < n; i++) {
        
        if (i === 0) {
            solution.push(0);
        } 
        
        else if (i === 1) {
            solution.push(1);
        } 
        
        else {
            solution.push(solution[solution.length - 1]+solution[solution.length-2]);
        }
    }
    console.log(solution)
}

fibonacci(10)