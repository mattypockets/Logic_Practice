// Reverse a string w/ recursion

let example = "example"

let reverse = (string) => {
    if (string == "") {
        return("")
    }
        else {
            console.log(string[string.length-1])
            reverse(string.substr(0, string.length-1)) 
        }
}

reverse(example)