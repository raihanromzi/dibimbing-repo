// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different
// day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
    let buy = 0
    let sell = 1
    let maxProfit = 0

    while (sell < prices.length) {
        if (prices[buy] > prices[sell]) {
            buy = sell
        } else {
            let profit = prices[sell] - prices[buy]
            maxProfit = Math.max(maxProfit, profit)
        }
        sell++
    }
    return maxProfit
}

console.log(maxProfit([7, 6, 4, 3, 1]))