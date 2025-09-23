function* generators(){
    yield 1;
    console.log('this after yield 1')
    yield 2;
    yield 3;
    yield 4;
}

let gen1 = generators()
console.log(gen1)
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

//create for loop 
for(let Done of gen1){
    console.log(`Done : ${Done}`);
}