// First Attempt

let fizzBuzz = () => {
    for (i=1; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else console.log(i)
    }
}

fizzBuzz()

// Second Attempt - any range of numbers

let fizzBuzz2 = (n) => {
    for (i=1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else console.log(i)
    }
}

fizzBuzz2(50)