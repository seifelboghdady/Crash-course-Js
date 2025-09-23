function* generateinfinite(){
    let index = 0;
    while(true){
        yield index++;
    }
}

let GInfinite = generateinfinite();
console.log(GInfinite.next());
console.log(GInfinite.next());
console.log(GInfinite.next());
console.log(GInfinite.next());
console.log(GInfinite.next());
console.log(GInfinite.next());
console.log(GInfinite.next());
console.log(GInfinite.next());
console.log(GInfinite.next());
console.log(GInfinite.next());
console.log(GInfinite.next());