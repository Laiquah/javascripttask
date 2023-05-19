//first way of swapping the values
var first_number = 15;
var second_number = 17;
first_number = 17;
second_number = 15;
console.log(first_number);
console.log(second_number);

//declaration of values for second and third way
let first_number = 15;
let second_number = 17;

//second way of swapping the values
if (first_number = 15){
    console.log('17');
}else {
    console.log('17')
}

if (second_number = 17){
    console.log('15');
}else {
    console.log('15')
}

// third way of swapping the values
[first_number, second_number] = [second_number, first_number]
console.log(first_number);
console.log(second_number);