var arr3 = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

/**
 * 选择排序
 * **/

/**
 * 描述：
 *       首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
 *       然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
 *       以此类推，直到所有元素均排序完毕。
 *
 * 实现：
 *       <1>.初始状态：无序区为R[1..n]，有序区为空；
 *       <2>.第i趟排序(i=1,2,3...n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。
 *       该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，
 *       使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
 *       <3>.n-1趟结束，数组有序化了。
 * **/

function selectionSort(arr) {
  let len = arr.length;
  var minIndex, temp;
  for(let i = 0; i < len - 1; i++) {
    minIndex = arr[i];
    for(let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     //寻找最小的数
        minIndex = j;                 //将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

let a = [ 8, 7, 5, 4, 3, 2, 9, 1, 6, 0 ];
/**
 *  i = 0; j = 1 | 8 < 7 minIndex = 7  [ 7, 8, 5, 4, 3, 2, 9, 1, 6, 0 ]
 *  i = 0; j = 2 | 5 < 7 minIndex = 5
 *  i = 0; j = 3 | 4 < 5 minIndex = 4
 *  i = 0; j = 4 | 3 < 4 minIndex = 3
 *  i = 0; j = 5 | 2 < 3 minIndex = 2
 *  i = 0; j = 6 | 9 < 2 minIndex = 2
 *  i = 0; j = 7 | 1 < 2 minIndex = 1
 *  i = 0; j = 8 | 6 < 1 minIndex = 1
 *  i = 0; j = 9 | 0 < 1 minIndex = 0
 *
 *  比较完之后进行交换
 *  [ 0, 7, 5, 4, 3, 2, 9, 1, 6, 8 ];  循环10次 最小的位置交换位置 放最前面 指针移动到一位继续比较
 *
 * **/
