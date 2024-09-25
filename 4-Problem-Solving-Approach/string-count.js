// Write a function which takes in a string and returns counts of each character in the string.

charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}


"my phone number is 182763" // do we consider spaces and numbers?
"Hello hi"  // Do we store both uppercase and lowercase?

charCount(""); // What do we return? What if someone passes in an object or null?

charCount("Your PIN number is 1234!")
/*
    {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        b: 1,
        e: 1,
        i: 2,
        m: 1,
        n: 2,
        o: 1,
        p: 1,
        r: 2,
        s: 1,
        u: 2,
        y: 1
    }
*/


function charCount(str) {
    // do something

    // return an object with keys that are lowercase alphanumeric characters in the string; 
    // values should be the counts for those characters
}

function charCount(str) {
    // make object to return at end

    // loop over string
        // if the char is a number/letter AND is a key in the object, add one to count
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        // if character is something else (space, period, etc.) dont' do anything

    // return object at end
}

function charCount(str) {
    // make object to return at end
    var result = {};

    // loop over string
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()

        // if the char is a number/letter AND is a key in the object, add one to count
        if(result[char] > 0) {
            result[char]++;
        } 
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1;
        };
    }
        
        // if character is something else (space, period, etc.) dont' do anything

    // return object at end
    return result;
}

console.log(charCount("hello"));
console.log(charCount("Hi there!"))



// New, refactored solution:
function charCount2(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}


// Even more optimized solution:
function charCount3(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        // Note: regex performance can actually vary depending on what you are doing
        // and what browser is handling the regex
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}


// Another even more optimized solution using an additional newly created function:
function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    // Note: Using numeric codes is actually 55% faster (more efficient)
    // than using regex.
    if (!(code > 47 && code < 58) &&    // numeric (0-9)
        !(code > 64 && code < 91) &&    // upper alpha (A-Z)
        !(code > 96 && code < 123)) {   // lower alpha (a-z)
        return false;
    }
    return true;
}

function charCount4(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}


console.log(charCount4("Hello WORLD hi!!!"));