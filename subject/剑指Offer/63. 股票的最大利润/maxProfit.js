/**
 * @param {number[]} prices
 * @return {number}
 * 84ms 38.6mb
 * 动态规划
 */
var maxProfit2 = function ( prices ) {
  if ( prices.length <= 1 ) return 0;
  const length = prices.length;
  let min = prices[ 0 ];
  let max = 0;
  for ( let i = 1; i < length; i++ ) {
    min = Math.min( prices[ i ], min )
    max = Math.max(prices[ i ] - min, max)
  }
  return max;
};
