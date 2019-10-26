"use strict";
//60181660 이지현

function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
  //return arr;
}

/* 필요에 따라 추가 함수 구현 가능 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function partition_point(arr, left, right){
  var r  = getRandomInt(left, right);
  arr = swap(arr, left, r);
  var pivot = left;
  var store = left + 1;

  for (var i=left+1; i<right+1; i++) {
    if( arr[i] < arr[pivot]) {
      arr = swap(arr,i, store);
      store += 1;
    }
  }
  arr = swap(arr, pivot, store-1);
  return store-1;  
}


function quick_partition_sort(arr, left, right){
  if (left >= right){
    return ;
  }
  var pivot = partition_point(arr,left, right);
  quick_partition_sort(arr, left, pivot-1);
  quick_partition_sort(arr, pivot+1, right);
}

function quickSort(arr) {
  /* 구현 필요 */
  quick_partition_sort(arr, 0, (arr.length)-1);
  return arr;
}

var data = [
  [6, 3, 2, 7, 8, 3, 1, 0, 9, 5],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  [1, 10, 2, 21],
  [],
  [1,1,1,1,1,1,1,1,1,1]
];

// 두 배열 a와 b의 내용을 비교. 같으면 true 아니면 false
function compareArray(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for(var i in a) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

//배열 a의 각 원소를 복사하여 새로운 배열을 return
function deepCopyArray(a) {
  var ret = [];
  for(var i in a) {
    ret[i] = a[i];
  }
  return ret;
}

// 주어진 data에 대해 JavaScript Array.sort함수의 결과와 비교하여 다르면 에러 출력
for(var i in data) {
  var arr1 = deepCopyArray(data[i]);
  var arr2 = deepCopyArray(data[i]);
  quickSort(arr1);
  arr2.sort(function(a, b) {return a-b;});
  if (!compareArray(arr1, arr2)) {
    console.log("Fail!!!", data[i], arr1, arr2);
  }
  
  // else{
  //   console.log("success -> ", data[i],"copied arr : ",arr1,"sorted arr : ",arr2)
  // }
}
// function quick_Sort(origArray) {
// 	if (origArray.length <= 1) { 
// 		return origArray;
// 	} else {

// 		var left = [];
// 		var right = [];
// 		var newArray = [];
// 		var pivot = origArray.pop();
// 		var length = origArray.length;

// 		for (var i = 0; i < length; i++) {
// 			if (origArray[i] <= pivot) {
// 				left.push(origArray[i]);
// 			} else {
// 				right.push(origArray[i]);
// 			}
// 		}

// 		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
// 	}
// }

// var myArray = [3, 0, 2, 5, -1, 4, 1 ];

// console.log("Original array: " + myArray);
// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);