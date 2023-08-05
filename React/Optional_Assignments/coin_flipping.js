//Function that simulates flipping of a coin
function tossCoin() {
    return Math.random() > 0.5? "heads" : "tails";
}

// console.log(tossCoin());

//Function that returns number of attempts it takes to toss five heads in a row
// function fiveHeadsSync(){
//     let headsCount = 0;
//     let attempts = 0;

//     while (headsCount < 5){
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if (result === "heads"){
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five heads`;
// }

// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads () {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
    
        while (headsCount < 5){
            attempts++;
            if (attempts > 100) reject(`The coin has been flipped ${attempts} times`)
            let result = tossCoin();
            // console.log(`${result} was flipped`);
            if (result === "heads"){
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        resolve( `It took ${attempts} tries to flip five heads`);
    })
}

// fiveHeads()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// console.log("When does this run now?");

async function fiveHeadsAsync () {
    try{
        const res = await fiveHeads();
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

fiveHeadsAsync();
console.log("When does this run now?");