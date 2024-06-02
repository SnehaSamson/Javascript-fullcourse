const fruit = 'Apple';

switch(fruit){
    case 'Papaya' :
        console.log("The cost of papaya is 30")
        break;

    case 'Orange' :
        console.log("Oranges are available ")
        break;

    case 'Apple' :
    case 'Banana' : 
    console.log("Both apple and banaya have the buy one get one free offere");
    break;

    default : console.log("This is out of stock invalid fruit name");
    
}