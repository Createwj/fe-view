var arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

/**
 * 插入排序
 * **/

/**
 * 描述：
 *      通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描
 *      找到相应位置并插入。插入排序在实现上，通常采用in-place排序
 *      因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间
 *
 * 实现：
 *      <1>.从第一个元素开始，该元素可以认为已经被排序；
 *      <2>.取出下一个元素，在已经排序的元素序列中从后向前扫描
 *      <3>.如果该元素（已排序）大于新元素，将该元素移到下一位置；
 *      <4>.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 *      <5>.将新元素插入到该位置后；
 *      <6>.重复步骤2~5。
 * **/


function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var key = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  console.timeEnd('插入排序耗时：');
  return array;
}

let a = [ 8, 7, 5, 4, 3, 2, 9, 1, 6, 0 ];
/**
 *  i=1 key=7 j=0; 8>7 [ 8, 8, 5, 4, 3, 2, 9, 1, 6, 0 ];
 *  i=1 key=7 j=-1; 8>7 [ 7, 8, 5, 4, 3, 2, 9, 1, 6, 0 ];
 *  i=2 key=5 j=1; 8>5 [ 7, 8, 5, 4, 3, 2, 9, 1, 6, 0 ];
 *  i=2 key=5 j=0; 7>5 [ 7, 8, 8, 4, 3, 2, 9, 1, 6, 0 ];
 *  i=2 key=5 j=0; 7>5 [ 7, 7, 8, 4, 3, 2, 9, 1, 6, 0 ];
 *  i=2 key=5 j=-1; 7>5 [ 5, 7, 8, 4, 3, 2, 9, 1, 6, 0 ];
 *  i=3 key=4 j=2; 8>4 [ 5, 7, 8, 8, 3, 2, 9, 1, 6, 0 ];
 *  i=3 key=4 j=1; 8>4 [ 5, 7, 4, 8, 3, 2, 9, 1, 6, 0 ];
 *  i=3 key=4 j=0; 5>4 [ 5, 7, 5, 8, 3, 2, 9, 1, 6, 0 ];
 *  i=3 key=4 j=-1; 5>4 [ 4, 7, 5, 8, 3, 2, 9, 1, 6, 0 ];
 *
 *
 * **/









