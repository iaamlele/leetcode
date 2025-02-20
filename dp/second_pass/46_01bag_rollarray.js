// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
let input = [
    "6 1",           
    "2 2 3 1 5 2",   
    "2 3 1 5 4 3"   
  ];
  
let [n, bagVolum] = input[0].split(' ').map(Number)
let weight = input[1].split(' ').map(Number)
let value = input[2].split(' ').map(Number)

let dp = Array(bagVolum + 1).fill(0)

for(let i = 0; i < n; i++) {
    for(let j = bagVolum; j >= weight[i]; j--) {
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
    }
}
console.log(dp[bagVolum])

// readline.on('line', (line) => {
//     input.push(line)
// })

// readline.on('close', () => {
//     let [n, bagVolum] = input[0].split(' ').map(Number)
//     let weight = input[1].split(' ').map(Number)
//     let value = input[2].split(' ').map(Number)

//     console.log(n, bagVolum, weight, value)
//     let dp = Array(bagVolum + 1).fill(0)

//     for(let i = 0; i < n; i++) {
//         for(let j = bagVolum; j >= weight[i]; j--) {
//             dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
//         }
//     }
//     console.log(dp[n])
// })