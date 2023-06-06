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
    constructor (sex, hair, eyes) {
        this.sex= sex;
        this.hair=hair;
        this.eyes=eyes;
    }
    intro(){
        console.log(`hi my name is ${this.name}.`);
    }
    hColor(){
        console.log(`my hair color is ${this.hair}.`);
    }
    eColor(){
        console.log(`my eyes color is ${this.eyes}.`);
    }
}
// class PostalWorker extends Person {
//     constructor(shift, hours, packages){
//         super("male", "black", "brown");
//         this.shift=shift;
//         this.hours=hours;
//         this.packages=packages;
//     }
//     intro1(){
//         console.log(` hi I work ${this.shift}, for this many hours: ${this.hours} and deliver this many packages: ${this.packages}.`);
//     }
// }
// // let John = new PostalWorker("morning", 8, 12);
// let Max = new PostalWorker("afternoon", 4, 16);
// // console.log(John);
// Max.intro1();
class Chef extends Person {
    constructor(shift, specialty, favDish){
        super("female", "brown", "brown");
        this.shift = shift;
        this.specialty = specialty;
        this.favDish = favDish;
    }
    cook(){
    console.log(` I work ${this.shift} shift this is my specialty, ${this.specialty} and ${this.favDish} is my favorite dish to make!`);
    }
}
let Leya = new Chef("morning", "Indian cuisine", "Flan");
let Rei = new Chef("night", "Mexican cuisine", "Japanese Curry");
console.log(Leya);
Rei.cook();
// class BankAccount {

// }