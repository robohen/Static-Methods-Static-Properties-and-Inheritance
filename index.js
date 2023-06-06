// // class Governor {
// //     name;
// //     state;
  
// //     announcePolicy(policy) {
// //       console.log(`Governor ${this.name} of ${this.state} announces a new policy: ${policy}`);
// //     }
  
// //     vetoBill(bill) {
// //       console.log(`Governor ${this.name} of ${this.state} vetoes the bill: ${bill}`);
// //     }
  
// //     signBill(bill) {
// //       console.log(`Governor ${this.name} of ${this.state} signs the bill: ${bill}`);
// //     }
// //   }
// //   const governor = new Governor();
// // governor.name = "John Smith";
// // governor.state = "California";
// // governor.announcePolicy("Tuition loan forgiveness");
// // governor.vetoBill("Infrastructure bill");
// // governor.signBill("Healthcare bill");
class Person{
    constructor (name, hair, eyes) {
        this.name= name;
        this.hair=hair;
        this.eyes=eyes;
    }
    intro(){
        return(`hi my name is ${this.name}.`);
    }
    hColor(){
        return(`my hair color is ${this.hair}.`);
    }
    eColor(){
        return(`my eyes color is ${this.eyes}.`);
    }
}
// class PostalWorker extends Person {
//     constructor(name,shift, hours, packages){
//         super(name, "black", "brown");
//         this.shift=shift;
//         this.hours=hours;
//         this.packages=packages;
//     }
//     intro1(){
//         return (` hi I am ${this.name}, I work ${this.shift} shift, for this many hours: ${this.hours}, and I'll deliver this many packages today: ${this.packages}.`);
//     }
// }
// // // let John = new PostalWorker("John","morning", 8, 12);
// // let Max = new PostalWorker("Max","afternoon", 4, 16);
// // // console.log(John);
// console.log(Max.intro1());
class Chef extends Person {
    constructor(name, shift, specialty, favDish){
        super(name, "brown", "brown");
        this.shift = shift;
        this.specialty = specialty;
        this.favDish = favDish;
    }
    cook(){
    return(` I work ${this.shift} shift, this is my specialty: ${this.specialty}, and ${this.favDish} is my favorite dish to make!`);
    }
}
let Leya = new Chef("Leya","morning", "Indian cuisine", "Flan");
let Rei = new Chef("Rei","night", "Mexican cuisine", "Japanese Curry");
console.log(Leya.cook());
console.log(Rei.cook());
// class BankAccount {

// }