

// function garde(a)
// {
//     a = 10 / 100;
// switch (a) {
//     case 1:
//         console.log('A');
//         break;
//     case 2:
//         console.log('B');
//         break;
//     case 3:
//         console.log('C');
//         break;
//     case 4:
//     case 5:
//         console.log('E,F');
//         break;
//     default:
//         console.log('Faul...');

// }
// }
// var result = garde(80);


// function grades(marks)
// {
//     let gradeName;
//     switch (true) {
//         case (marks >= 90 && marks <= 100):
//             gradeName = 'A+';
//             break;
//         case (marks > 79 && marks < 90):
//             gradeName = 'A-';
//             break;
//         case (marks > 69 && marks < 80):
//             gradeName = 'B';
//             break;
//         default:
//             gradeName = 'tumi fail';
//     }
//     return gradeName;
// }
// console.log(grades(120));

function grades(marks)
{
    let gradeName;
    switch (marks) {
        case 1:
            if (marks >= 90 && marks <= 100) {
                gradeName = 'A+';
            }
            break;
        case 2:
            if (marks >= 80 && marks <= 90) {
                gradeName = 'A-';
            }
            break;
        case 70:
            if (marks >= 70 && marks <= 80) {
                gradeName = 'B';
            }
            break;
        default:
            gradeName = 'tumi fail';
    }
    return gradeName;
}
console.log(grades(70));




// function myGrading(score)
// {
//     var gscore;

//     switch (true) {
//         case (score <= 100 && score >= 90):
//             gscore = 'A';
//             break;
//         case (score <= 89 && score >= 80):
//             gscore = 'B';
//             break;
//         case (score <= 79 && score >= 70):
//             gscore = 'C';
//             break;
//         case (score <= 69 && score >= 60):
//             gscore = 'D';
//             break;
//         case (score <= 59 && score >= 0):
//             gscore = 'F';
//             break;

//         case (score > 100 && score < 0):
//             gscore = 'INVALID SCORE';
//             break;

//         default:
//             return 'INVALID SCORE';
//     }

//     var last_digit = score % 10;
//     if (last_digit <= 2 && last_digit >= 0 && score != 100) {
//         gscore += '-';
//     }
//     else if ((last_digit <= 9 && last_digit >= 7) || score == 100) {
//         gscore += '+';
//     }

//     return gscore;
// };
// console.log(myGrading(22));
// console.log(myGrading(75));
// console.log(myGrading(27));




// var score = 70;

// switch (true) {
//     case score > 50:
//         console.log("Score is higher than 50");
//         break;
//     default:
//         console.log("Score is 50 or lower");
// }


// let condition1 = 10;
// let condition2 = 0;
// switch (condition2) {
//     // case (condition1 == condition2): 
//     case 10:
//     case 1:
//         console.log('ful fil two condition');
//         break;
//     case 10:
//         console.log('fulfil 1 condition1');
//         break;
//     case 0:
//         console.log('ful fil 1 condiiton 2')
//         break;
//     default:
//         console.log('no condition');
// }

