//Array Methods

//1 push() --> add the element to the last

let arr = ["Apple","Mango","Orange","Guava","Berries"];
arr.push("WaterMelon","MuskMelon","Litchi");
console.log(arr)

//2 pop() --> remove the element from the last
let arr2 = [1,2,3,4,5,6];
arr2.pop();
console.log(arr2); // [1,2,3,4,5]

//3 shift() --> remove the first element in an array
let arr3 = ["suki","muki","saki","daki","maki"];
arr3.shift();
console.log(arr3); // ["muki","saki","daki","maki"]

//4 unshift() --> remove the last element in an array
let arr4 = [4,5,6,7];
arr4.unshift(2,3);
console.log(arr4); // [2,3,4,5,6,7]

//5
let arr5 = [10, 20, 30, 40, 50];
arr5.splice(1,2);
console.log(arr5); // [10,40,50]

//6
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2,1,(100));
console.log(arr6); //[1,2,100,4,5]

//7
let arr7 = [0,1,2,3,4,5,6];
arr7.fill("hello",2,5);
console.log(arr7); // [0,1,'hello','hello','hello',5,6]

//8
let a1 = [55,66];
let a2 = [77,88,99];
let total = a1.concat(a2);
console.log(total); // [55,66,77,88,99]

//9              1   2   3   4   5
let arr8 = [10, 20, 30, 40, 50, 60]
console.log(arr8.slice(1,5)); // [20,30,40,50]

//10
let arr9 = [1,2,[3,4,[5,6,[7]]]];
console.log(arr9.flat(Infinity)); // [1,2,3,4,5,6,7]

//11
let arr10 = [10, 20, 30, 40, 50];
console.log(arr10.includes(30)); // true

//12
let arr11 = [5, 10, 15, 20, 25];
console.log(arr11.indexOf(20)); // 3

//13
let arr12 = [1, 2, 3, 2, 1, 2];
console.log(arr12.lastIndexOf(2)); //5

//14
let arr13 = [6,8,2,5,9];
console.log(arr13.sort()); // [2,5,6,8,9]

//15
let arr14 = [1,2,3,4,5,6,7];
console.log(arr14.reverse()); // [7,6,5,4,3,2,1]

//16
let b1 = [1,2,3,4];
let b2 = [5,6,7,8];
let total1 = [...b1,...b2];
console.log(total1); // [1,2,3,4,5,6,7,8]

//17
let studet = {
    name : "sk",
    city : "Chennai",
    age : 24
}
let jobdet = {
    jobname : "IT",
    jobcity : "remote",
    jobrole : "FD"

}
let total2 = {...studet,...jobdet}
console.log(total2);

//18
function x(m,n,...o){
    console.log(m+n); // 5 
    console.log(o);  // [4,5,6,7,8]

}
x(2,3,4,5,6,7,8)

//19
function one(a,b,...c){ // c = [3,4,5]
    console.log(a+b); // 3
    console.log(c[0],c[1]); // 3 4
}
one(1,2,3,4,5)

// 20
let x1 = [1,2,3,4];
let x2 = [1,2,3,4];
let total3 = [...x1,...x2];
console.log(total3); // [1,2,3,4,1,2,3,4]

//21
let arr15 = [10,20,30,40];
let [a,b,c,d] = arr15;
console.log(a); //10
console.log(b); //20
console.log(c); //30
console.log(d); //40

//22
let nested = [1, 2, [3, 4, [5, 6]]]
let [d1,d2,[d3,d4,[d5,d6]]] = nested;
console.log(d1,d2,d3,d4,d5,d6); // [1,2,3,4,5,6]

//23
let student = ["kavi",24,8.7];
let [name,age,CGPA] = student;
console.log("Name:",name);
console.log("Age:",age);
console.log("CGPA:",CGPA);

//24
let object = {
    names : "kk",
    role : "fd",
    loc : "Chennai"
}
let  {names,role,loc} = object 
console.log(names,role,loc);

//25
let objjj = {
    stu_name : "suri",
    address : {
        city : "Chennai",
        state : "TN"
    }
}
let {stu_name , address:{city,state}} = objjj;
console.log(city,state); // Chennai TN

//26
let kk = {
    NAMES : "kk",
    roles : "testing",
    locations : {
        mainloc : "Sakagiri",
        curloc : "chennai"
    }
}
let {NAMES , roles , locations:{mainloc,curloc}} = kk;
console.log(NAMES ,roles , mainloc,curloc);

//27
let arr16 = [0,1,2,3,4,5,6,7,8,9];
arr16.pop(); // removes the last element
arr16.shift(); // removes the first element
arr16.unshift(11,22); // 11,22 is added in the beggining
console.log(arr16);

//28
let numbers = [10, 20, 30, 20, 40, 20, 50];
let selected = 20;

console.log("Array:", numbers);
console.log("Selected number:", selected);

// includes() checks whether the number exists
console.log("Is the number present?", numbers.includes(selected));

// indexOf() gives the first position
console.log("First index:", numbers.indexOf(selected));

// lastIndexOf() gives the last position
console.log("Last index:", numbers.lastIndexOf(selected));

//29
let obj1 = {
    emp_name1 : "Kavi",
    emp_id1 : 6273,
    emp_role1 : "CEO"
}
let obj2 = {
    emp_name2 : "priya",
    emp_id2 : 6345,
    emp_role2 : "HR"
}
let q = {...obj1,...obj2};
console.log(q);

let {emp_name1 ,emp_id1 ,emp_role1,emp_name2 ,emp_id2 ,emp_role2} = q ;
console.log(emp_name1,emp_role1,emp_name2,emp_role2);

//30
let nest = [1,2,[3,4,[5,6]]];
let nest2 = nest.flat(Infinity);
console.log(nest2)
nest2.reverse();
console.log(nest2)
