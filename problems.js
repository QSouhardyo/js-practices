/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

const land = area / 2

// console.log(land);

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if (money >= 25000) {
    console.log("laptop");

}
else if (money >= 10000) {
    console.log('cycle');

}
else {
    console.log("chocholate");

}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 4;
//write your code here

for (let i = 1; i <= lastDay; i++) {
    if (i % 3 === 0) {
        console.log(i, '- Medicine');

    }
    else {
        console.log(i, '- Rest');

    }
}

/** Problem 04 - (Delete / Store) */
var fileName = "docx.xpdf";
//write your code here

if (fileName.startsWith("#")) {
    console.log("Store");

}
else if (fileName.endsWith(".pdf")) {
    console.log("Store");
}
else if (fileName.endsWith(".docx")) {
    console.log("Store");
}
else {
    console.log("Delete");

}

// -----or-------//

if (
    fileName.startsWith("#") ||
    fileName.endsWith(".pdf") ||
    fileName.endsWith(".docx")
) {
    console.log("Store");
} else {
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "monu", roll: 99, department: "eee" };
//write your code here

// jhankar1014.cse@ph.ac.bd

const email = student.name + student.roll + '.' + student.department + '@ph.ac.bd'

console.log(email);

