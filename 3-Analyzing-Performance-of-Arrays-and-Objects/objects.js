let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

console.log(Object.keys(instructor));   // This is O(n)
console.log(Object.values(instructor));   // O(n)
console.log(Object.entries(instructor));   // O(n)
console.log(instructor.hasOwnProperty("firstName"));   // O(1); returns boolean