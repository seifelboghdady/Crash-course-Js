function* generateNums(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

function* generateLatter(){
    yield 'A';
    yield 'B';
    yield 'C';
}

function* GenerateAll(){
    yield* generateNums();
    yield* generateLatter();
    yield* [4, 5, 6, 7]
}


let generate = GenerateAll();

console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.return('stoop'));
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());