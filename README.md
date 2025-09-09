
---
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?
Answer:var=>Its a backdated way of declaring variables in javascript.You can use it anywhere in a function.It can be used multiple time as well as can be changed.
  let=>New way of declaration.It only works inside function.Its value can be changed.It can not be declared in same scope.
  const => It is also blocked based .Once set the value can not be changed.But non-premitive declaration can be changed.

#### 2) What is the difference between map(), forEach(), and filter()? 
map() -> map() function loops through an array and makes a new array with results.It always returns a new array.

forEach()->It is similar to map but it don't return a new array.It does something based on condition in each item.

filter() -> It also loops through an array and makes a new array only with condition satisfying results.

#### 3) What are arrow functions in ES6?
An arrow function in ES6 is a shorter way to write functions in JavaScript.
It uses => instead of the function keyword.
Example,
        const add =(a,b) => a + b;
        key points:
        i)If there is only one line return,you don't need to use return key word or {}.
        ii)shorter and cleaner

#### 4) How does destructuring assignment work in ES6?
Destructuring assignment in ES6 is a wday to unpack values from array and objects into variables.
        Examples,
                i)From arrays:let [x, y, z] =  [10, 20, 30],
                ii)From objects:let { name, age } =  { name: "Rahim", age: 22 }

Key points: i) Makes code short and clean.
                ii)You can also give default values.               
#### 5) Explain template literals in ES6. How are they different from string concatenation?

Template literals in ES6 are a new way to work with strings.They use backticks ( ` ` ) instead of quotes ("" or '').Concatenation uses + that make string harder to read.Template literals use backticks ` and ${ } that makes the code cleaner also supports to write multiline string.By using template literal we can  insert variables and expressions directly with ${ } .But in string contatenation we can't do it.
         Example, 
                i)Template literals:
                let poem = `I am Efty.
                I am a university student
                I want to be an software engineer`

                ii)string concatenation:
                let text1 = "My name is " + name + " and I am " + age + " years old."




