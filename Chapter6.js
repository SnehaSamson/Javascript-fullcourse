// 1. Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive! 

// let runAgain = true;


// const canDrive = (age)=>{
//     return age<18? true : false;
    
//     }
    
//     while(runAgain)
//         {
//         let age = prompt("Enter your age");
//         age = Number.parseInt(age);

        
//          if(age<0){
//             console.error("Please enter the valid age")
//             break;
//         }

//         if(canDrive(age))
//         {
//             alert("You cannot drive your age is less that 18")
//         // document.write("You cannot drive");
//     }
    
// else{
//     alert("You are eligible to drive");
// // document.write("You can drive")
// }

// runAgain = confirm("You wanna play again?");
// }
    // 2 In Q1 use confirm to ask the user if he wants to see the prompt again 

// Q3 In the previous question, use console.error to log the error if the age entered is negative. 

// Q4 Write a program to change the url to google.com redirection if user enters a number greater than 4 

// Q5 Change the background of the page to yellow red or any other color based on user input through prompt 

// let number = prompt("Enter your number");
// number = Number.parseInt(number);

// if(number > 4)
//     {
//         location.href = "https://google.com";
//     }


let color = prompt("Enter the color of your choice");

document.body.style.background = color;