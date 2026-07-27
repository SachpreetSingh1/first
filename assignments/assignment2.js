

const students = [
  { id: 101, name: "Aman", marks: 82, course: "Java" },
  { id: 102, name: "Priya", marks: 95, course: "Python" },
  { id: 103, name: "Rahul", marks: 67, course: "Java" },
  { id: 104, name: "Neha", marks: 76, course: "Web" },
  { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

// Task 1 - Add a Student (push)
students.push({ id: 106, name: "Simran", marks: 91, course: "Java" });
console.log("Task 1 - After push:");
console.log(students);

// Task 2 - Remove Last Student (pop)
const removedLast = students.pop();
console.log("\nTask 2 - Removed last student:");
console.log(removedLast);

// Task 3 - Add Student at Beginning (unshift)
students.unshift({ id: 100, name: "Ankit", marks: 80, course: "Web" });
console.log("\nTask 3 - After unshift:");
console.log(students);

// Task 4 - Remove First Student (shift)
const removedFirst = students.shift();
console.log("\nTask 4 - Removed first student:");
console.log(removedFirst);

// Task 5 - Update Array Using splice()

const indexToReplace = students.findIndex(s => s.id === 103);
if (indexToReplace !== -1) {
  students.splice(indexToReplace, 1, { id: 107, name: "Karan", marks: 78, course: "Java" });
}
console.log("\nTask 5 - After splice:");
console.log(students);

// Task 6 - Create a New Array Using slice()

const firstThree = students.slice(0, 3);
console.log("\nTask 6 - First three students (slice):");
console.log(firstThree);


// Task 7 - Array Iteration (for...of)

console.log("\nTask 7 - for...of iteration:");
for (const student of students) {
  console.log(`${student.name} - ${student.course} - ${student.marks}`);
}

// Task 8 - forEach()

console.log("\nTask 8 - forEach (names only):");
students.forEach(student => {
  console.log(student.name);
});

// Task 9 - map()

const namesOnly = students.map(student => student.name);
console.log("\nTask 9 - map (names array):");
console.log(namesOnly);

// Task 10 - filter()

const highScorers = students.filter(student => student.marks >= 80);
console.log("\nTask 10 - filter (marks >= 80):");
console.log(highScorers);


// Task 11 - reduce()
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / students.length;
console.log("\nTask 11 - reduce:");
console.log(`Total Marks = ${totalMarks}`);
console.log(`Average = ${averageMarks.toFixed(1)}`);


// Task 12 - sort()

// Ascending
const ascending = [...students].sort((a, b) => a.marks - b.marks);
console.log("\nTask 12 - Sorted ascending (marks):");
ascending.forEach(s => console.log(s.marks));

// Descending
const descending = [...students].sort((a, b) => b.marks - a.marks);
console.log("\nTask 12 - Sorted descending (marks):");
descending.forEach(s => console.log(s.marks));