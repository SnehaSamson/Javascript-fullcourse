// Q1 

const marks ={
    Sneha : 78,
    Santhosh : 87,
    Samantha : 95,
    Pushpa : 76,
    Samson : 89
}

// for(let i=0; i<Object.keys(marks).length;i++)
//     {
//         console.log("The marks of " + Object.keys(marks)[i] + " are " +marks[Object.keys(marks)[i]])
//     }

// Problem no2 

// for(let i in marks)
//     {
//         console.log("The marks of " +i+ " is "+marks[i]);
//     }


// problem no3 

// let cn = 4;
// let i 
// while(i != cn)
//     {
//         console.log("Try again")
//         i = prompt("Enter a number");
        
//     }

//     console.log("You have entered a correct number");


    // Problem no4 

    const mean = (a,b,c,d)=>{
return (a+b+c+d) / 4;
    }

    console.log(mean(2,3,4,5));