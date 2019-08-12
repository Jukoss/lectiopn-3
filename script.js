const age = 25;

let counter = 0;

// while (counter < 1000) {
//     if (counter % age === 0) {
//         console.log('counter', counter);
//     }
//     counter++;
// }

// console.log('do while');

// do {
//     if(counter % age === 0) {
//         console.log('counter', counter);
//     }
//     counter++;
// } while (counter < 1000);

for (let counter = 0; counter < 1000; counter++) {
    if(counter % age === 0) {
        console.log('counter', counter);
    }
} 