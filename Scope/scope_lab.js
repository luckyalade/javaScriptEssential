//  Global Scope
var globalVar = "I'm a global varibale";
let globalLet = "I'm a global veribale but scoped with let";
const globalCost = "I'm a global constant";

{
    // Block Scope
    var blockVar = "I'm a block-scoped var";
    let blocklet = "I'm a blocked-scoped let";
    const blockConst = "I'm a blocked-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
