function totalFine(fare) {

    if (typeof fare === 'string' || fare <= 0) {

        return 'invalid'
    }

    let totalFine = fare + fare * 20 / 100 + 30

    return totalFine
}

const result1 = totalFine(0)
// console.log(result1);

// 2

function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    // let result = str.replaceAll(" ", "").toUpperCase();
    let result = str.split(" ").join("").toUpperCase()
    return result;
}

let result2 = onlyCharacter(true);

// console.log(result2);

// 3



function bestTeam(player1, player2) {

    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }

    totalCard1 = player1.foul + player1.cardY + player1.cardR
    totalCard2 = player2.foul + player2.cardY + player2.cardR


    if (totalCard1 === totalCard2) {
        return 'Tie'
    }
    else if (totalCard1 < totalCard2) {
        return player1.name
    }
    else {
        return player2.name
    }
}

const result3 = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")

// console.log(result3);

// 4

function isSame(arr1, arr2) {

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
const result4 = isSame({ data: [2, 5, 6] }, [2, 5, 6]);
// console.log('4', result4);

// 5

function resultReport(marks) {

    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let pass = 0;
    let fail = 0;

    for (let mark of marks) {
        total = total + mark;

        if (mark >= 40) {
            pass++;
        } else {
            fail++;
        }
    }

    let finalScore = marks.length === 0 ? 0 : Math.round(total / marks.length);

    return {
        finalScore: finalScore,
        pass: pass,
        fail: fail
    };
}

const result5 = resultReport(100)
console.log(result5);

