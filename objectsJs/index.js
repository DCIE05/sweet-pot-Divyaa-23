//1.
/* const walter = {
    lastName: 'White',
    address: {
        city: 'Albuquerque, NM'
    }
};
console.log(walter); 
const jesse = {
    lastName: 'Pinkman',
    address: walter.address
};
jesse.lastName = 'Driscoll';
jesse.address.city = 'Anchorage, AK';
console.log(walter.lastName);
console.log(walter.address.city);
console.log(jesse.lastName);
console.log(jesse.address.city);
console.log(walter.employer.address); */

//2.

let street = '1600 Pennsylvania Avenue';
let potus = {
    address: street
};
street = '721 Fifth Avenue';
console.log(potus.address);
potus.address = '721 Fifth Avenue';
console.log(street);

//3.
let pres = {
    lastName: 'Trump'
};
let incumbent = {
    lastName: 'Trump'
};
console.log(pres.lastName === incumbent.lastName);//true
console.log(pres === incumbent); //false

//4.
let hank = {
    age: undefined
};
let gus = {}; //non existant property has a value undefined
console.log("-----");
console.log(hank.age === gus.age); //True

//5.
let one = { name: 'Will' };
let two = { name: 'Bill' };
one.name = two.name;
two.name = one.name;
console.log(one.name);
console.log(two.name);

//6. What 3 lines of code will swap the names?
let me = { name: 'Paul' };
let you = { name: 'Saul' };
let temp = me;
me=you;
you=temp;

/* let temp = me.name;
me.name=you.name;
you.name=temp.name; */

 //Method 2---array destructuring
/* [me,you]=[you,me]; */

// - ??? -
// - ??? -
// - ??? -
console.log(me.name); // ‘Saul’
console.log(you.name); // ‘Paul’


//7.
const current = {
    name: 'Magnus',
    next: null
};
current.next = {
    name: 'Fabiano',
    next: current
};
console.log(current.next.next.next.name);

//8.
let restaurant = {
    Owner: {
        name: 'Gus Frings'
    }
};
console.log(restaurant.Owner.name === 'Gus Frings');

//9.
const contract = { title: 'sale' };
const copy = contract;
copy.title = copy.title + '(copy)';
console.log(contract.title);

//10.
let rust = {
    address: {
        city: 'New Orleans'
    }
};
let marty = {
    address: rust.address
};
rust.address = {
    city: 'Galveston'
};
console.log(marty.address.city);

//11.
let albert = {
    address: {
        city: 'Prague'
    }
};
let franz = {
    address: {
        city: albert.address.city
    }
};
albert.address = { city: 'Zürich' };
console.log(franz.address.city);

/* 
12. Fill in the missing lines of code */

// - ??? 
const first = {
    taste:"pineapple"
};
const second=first;
console.log(first.taste); // pineapple
second.taste = 'strawberry';
console.log(first.taste); // strawberry


