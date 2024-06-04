function onePlusAvg(x,y)
{
    return 1 + (x+y)/2;
}
let result = onePlusAvg(2,4);
// console.log(result);


// Arrow Function 

const sum = (p,q) => {
    return p+q;
}

console.log(sum(9,7));

const hello = () =>{
    // console.log("Hey How are you?")
    return "Hey how are you doing?"
}

console.log(hello());
// hello();