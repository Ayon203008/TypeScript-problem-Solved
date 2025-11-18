1. Difference between type and interface

(i) type cna be declared for  primitive data types , union types, tuples etc where interface is to define object shape

(ii) type can not be reopened once after declaretion where interface can be reopened after declaretion

(iii) type  provides less flexiblity with merging where interface provides more flexible with merging and extending



4. Enum us a special typeScript type that allows to define a set of named constants

It makes code easier to maintain and it makes code more and more readable


enum Color{
    Red="RED",
    Green="GREEN",
    Blue="BLUE"
}

const myColor : Color =Color.Green
console.log(myColor) // out put will be GREEN



enum Grade {
    A = 4,
    B = 3,
    C = 2,
    D = 1,
    F = 0
}

const myGrade : Grade = Grade.B
console.log(myGrade) // output will be 3