let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
// It will return false because there is no class name as class 
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

console.log(sp1.closest(".box"))
console.log(sp1.contains(id1))
console.log(id1.contains(sp1))


