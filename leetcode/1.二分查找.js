/**
 给定一个 n 个元素有序的--（升||||序）--整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/binary-search
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
**/
const arr = [-1, 2 ,4, 9, 5];
const key = 9;

function search(arr, key) {
  let min = 0;
  let height = arr.length;
  while (min <=height) {
    var mins = parseInt((height + min) / 2);
    if(arr[mins] === key){
      return mins
    }else if(key < arr[mins]){
      min = mins + 1;
    }else if(key > arr[mins]) {
      height = mins - 1
    }else {
      return -1
    }
  }
}
