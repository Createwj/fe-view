
/**
 * 数组去重复
 * **/
let a = [1,2,3,3,4,5,7];
let b = [...new Set(a)];


/**
 * 数组最大 最小
 **/



/**
 * 数组最大 最小
 **/
function arrayMax(arr) {
  return Math.max(...arr); // min
}



/**
 * 数组中数显最多次数个数
 **/
function countOccurrences(arr, value) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}


/**
 * 数组拍平
**/




/**
 * 数组拷贝
**/




/**
 * 数组截取api
**/
