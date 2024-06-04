// Q1 
// let age = 9;
// if(age>=10 && age<=20)
//     {
//         console.log("Age lies between 10 and 20")
//     }

//     else{
//         console.log("The age doesnot lies between 10 and 20");
//     }

// Q2 Switch case

let age = prompt("Enter your age");
age= Number.parseInt(age);

switch(age) 
{
    case 20 :
        console.log("Your age is 20");
        break;

        case 21 :
            console.log("Your age is 21");
            break;
        case 27 :
            console.log("Your age is 27");
            break;
        case 29 :
            console.log("Your age is 29");
            break;
            default : console.log("Your age is not special");
}

