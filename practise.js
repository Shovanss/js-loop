// let i = 0;
// while(i <= 60){
//     console.log(i, "I will invest at least 6 hrs every single day for next 60 days!");
//     i++;
// }

// // odd
// let i = 61;
// while(i <= 100){
//     console.log(i);
//     i = i+2;
// }

// even
// let i = 78;
// while(i <= 98){
//     console.log(i);
//     i = i+2;
// }

// sum
// let num = 81;
// sum = 0;
//  while(num <= 131){
//     console.log(num);
//     sum = sum + num;
//     console.log('sum', sum);
//     num = num+2;
//  }
//  let num = 206;
//  sum = 0;
//  while(num < 311){
//     console.log(num);
//     sum = sum + num;
//     console.log('sum', sum);
//     num = num+2;
//  }

//  for (let i = 0; i < 5; i+=3){
//     console.log(i);
//  }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

const array = [1, 2, 3, 4, 5, 6, 7];

for(let i = 1;i < array.length; i++){
    if (i == 5){
        continue;
    }
    console.log(array[i]);
}