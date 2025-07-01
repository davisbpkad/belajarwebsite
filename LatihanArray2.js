//soal 1 sumArray
function sumArray(arr, int) {
    const pairs = [];
    const seen = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = int - num;
        if (seen.includes(complement)) {
            pairs.push([complement, num].sort((a, b) => a - b));
            
        }
        seen.push(num);
    }
    return pairs;
}

console.log(sumArray([2, 1, 4, 3], 5));
console.log(sumArray([1, 8, 10, 3], 11));
console.log(sumArray([1, 1, 1, 1], 2));

//soal 2 groupByDepartment
 //output :
    //{
    //   "HR": ['alice', 'david'],
    //   "Engineering": ['bob', 'charlie'],
    //   "Marketing": ['eve']
    //}
function groupByDepartment(employees) {
    const grouped = {};
    for (const employee of employees) {
        const department = employee.department;
        if (!grouped[department]) {
            grouped[department] = [];
        }
        grouped[department].push(employee.name);
    }
    return grouped; 
}

const employees = [
    { name: 'Alice', age: 28, department: 'HR' },
    { name: 'Bob', age: 34, department: 'Engineering' },
    { name: 'Charlie', age: 25, department: 'Engineering' },
    { name: 'David', age: 42, department: 'HR' },
    { name: 'Eve', age: 22, department: 'Marketing' }
];

const groupedEmployees = groupByDepartment(employees, 'department');
console.log(groupedEmployees);

//soal 3 modifySentence
//contoh input modifySentence "I love programming in JavaScript"
//contoh output "I LOVE PROGRAMMING IN JAVASCRIPT"

function modifySentence(sentence) {
    let words = sentence.split(' ');
    let modifiedWords = words.map(word => {
        return word.toUpperCase();
    });
    return modifiedWords.join(' ');
}

console.log(modifySentence("I love programming in JavaScript"));

//soal 4 countEmployeesByAgeRange(pegawai)
//input : const pegawai = [
//     { name: 'Alice', age: 23 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 27 },
//     { name: 'David', age: 35 },
//     { name: 'Eve', age: 24 }]
// 
// ouput :
//{
// "under 25": 2,
// "25-30": 2,
// "above 30": 1
//}
function countEmployeesByAgeRange(pegawai) {
    let ageRanges = {
        "under 25": 0,
        "25-30": 0,
        "above 30": 0
    };

    for (const p of pegawai) {
        if (p.age < 25) {
            ageRanges["under 25"]++;
        } else if (p.age >= 25 && p.age <= 30) {
            ageRanges["25-30"]++;
        } else {
            ageRanges["above 30"]++;
        }
    }
    return ageRanges;
}

const pegawai = [
    { name: 'Alice', age: 23 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 27 },
    { name: 'David', age: 35 },
    { name: 'Eve', age: 24 }];

    console.log(countEmployeesByAgeRange(pegawai));

    //soal 5 validateStudentData(students)
    //const students = 
    // [  { name: "Andi", age: 20, score: 85 },
    //   { name: "Budi", age: -5, score: 90 }, // Invalid (age negatif)
    //   { name: "", age: 22, score: 75 }, // Invalid (name kosong)
    //   { name: "Citra", age: 19, score: 110 } // Invalid (score lebih dari 100)
    // ];
    // validateStudentsData(students);
    //
    // Mengembalikan true jika semua data valid.
    // Mengembalikan false jika ada data yang tidak sesuai:
    // Expected Output : false

    function validateStudentsData(students) {
        for(let s of students) {
            if (!s.name || s.age < 0 || s.age > 100 || s.score < 0 || s.score > 100) {
                return false; 
            }
        }
        return true; 
    }

    const students = [
        { name: "Andi", age: 20, score: 85 },
        { name: "Budi", age: 101, score: 90 },
        { name: "Patra", age: 22, score: 75 }, 
        { name: "Citra", age: 19, score: 100 } 
    ];

    console.log(validateStudentsData(students)); 