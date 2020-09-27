/**
 * @param {number[]} prices
 * @return {number}
 * 暴力双循环
 * 472ms  39.2mb
 */
var maxProfit = function ( prices ) {
  if ( prices.length <= 1 ) return 0;
  const length = prices.length;
  let max = 0;
  for ( let i = 0; i < length; i++ ) {
    for ( let j = i + 1; j < length; j++ ) {
      max = Math.max( max, prices[ j ] - prices[ i ] );
    }
  }
  return max;
};
/**
 * @param {number[]} prices
 * @return {number}
 * 108ms 39mb
 * 1. 记录之前最小值
 * 2. 最小和当前价的收益
 * 3. 比较 max 和当前收益
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

console.log( maxProfit2( [ 7, 1, 5, 3, 6, 4 ] ) )
