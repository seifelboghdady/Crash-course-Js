const obj = {
    a : 1,
    b: 2
};

Object.defineProperty(obj, "c",{
    writable: false,
    configurable : false,
    value: 3,
    enumerable : true
})

//console.log(obj);
//check to change the value of c after make property writable == false
//obj.c = 100;
//console.log(obj); // not change c is still 3

//try to loop to obj
console.log(delete obj.c);

//define more than one property
Object.defineProperties(obj,{
    d:{
        writable : true,
        configurable : true,
        value : 5
    },
    e:{
        configurable: true,
        value: 4
    },
    f:{
        configurable: true,
        enumerable: true,
        value: 6

    }
})

for (let prop in obj){
    console.log(prop + ' ' + obj[prop]);
}

// Check descriptors for a property
console.log(Object.getOwnPropertyDescriptor(obj,"c"))
console.log(Object.getOwnPropertyDescriptors(obj))

