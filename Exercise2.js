// Use Javascript to create a game of snake water and gun. The game should ask you to enter s, w or getComputedStyle. The computer should e able to randomly generate S,W or G and declare win or lose using alert use sonfirm and prompt whenever required 

let user = prompt("Enter S, W or G");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];


const match = (cpu,user) =>{
    if(cpu === user){
        return "Nobody"
    }
    else if(cpu === "S" && user === "W"){
        return "CPU"
    }
    else if(cpu === "S" && user === "G"){
        return "User"
    }
    else if(cpu === "G" && user === "S"){
        return "CPU"
    }
    else if(cpu === "G" && user === "W"){
        return "User"
    }
    else if(cpu === "W" && user === "S"){
        return "User"
    }
    else if(cpu === "W" && user === "G"){
        return "CPU"
    }
    
}

let result = match(cpu,user)
document.write(`CPU : ${cpu} <br> User : ${user} <br> The Winner is : ${result}` );