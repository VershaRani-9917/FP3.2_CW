 const data = [

    {key: "name", value: "John"},
    {key: "age", value: 25},
    {key: "city", value: "Landon"}
]

// {name: "John", age: 25, city: "Landon"}

const transformedData = data.reduce((acc, curr) =>{

    acc[curr.key] = curr.value
    
     return acc
}, {})
console.log(transformedData)

const  nestedArray = [[1, 2], [3, 4], [5, 6]]
// [1, 2, 3, 4, 5, 6]

const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), [
    console.log(flattenedArray)

// Arrray of objects into an array
    const students = [
        {name: "Alice", grade: "A"},
        {name: "Bob", grade: "B"},
        {name: "Jhon", grade: "C"}
    ]

    // ["A", "B", "C"]

    const grade = students.reduce((acc, curr) => {
        acc.push(curr.grade)
        return acc
    }, [])
    console.log(grades)