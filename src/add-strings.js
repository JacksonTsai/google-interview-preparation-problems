// https://leetcode.com/problems/add-strings/description/

// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

const add = (s, t) => {
  const w = Math.max(s.length, t.length);
  s = s.padStart(w, '0');
  t = t.padStart(w, '0');
  let c = 0;
  let res = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    const current = parseInt(s[i], 10) + parseInt(t[i], 10) + c;
    if (i === 0) {
      res = current + res;
    } else {
      const dig = current % 10;
      c = Math.floor(current / 10);
      res = dig + res;
    }
  }
  return res;
};

//9789
//0019

console.log(add('9789', '19'));



// |------------|
// | By Jackson |
// |------------|
// |-------------------|
// | Solution 1 : Fail |
// |-------------------|
// 未考慮到多位數
// You must not use any built-in BigInteger library or convert the inputs to integer directly.
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
strIntMaping = {
  '1':1,
  '2':2,
  '3':3,
  '4':4,
  '5':5,
  '6':6,
  '7':7,
  '8':8,
  '9':9,
  '0':0,
}

var addStrings = function(num1, num2) {
return (strIntMaping[num1] +  strIntMaping[num2]).toString();
};
  
console.log(addStrings('9','19')) // 28
console.log(addStrings('9789','19')) // NAN

// |------------|
// | By Jackson |
// |------------|
// |----------------------|
// | Solution 2 : succeed |
// |----------------------|
strIntMaping = {
  '1':1,
  '2':2,
  '3':3,
  '4':4,
  '5':5,
  '6':6,
  '7':7,
  '8':8,
  '9':9,
  '0':0,
}

var addStrings = function(num1, num2) {
const maxLen = Math.max(num1.length,num2.length);
sumStr = ''; 
carry = 0;
for (let i = maxLen.length-1; i < maxLen.length; i--) {
  num1_temp = num1[i]? strIntMaping[num1[i]] :strIntMaping ;
  num2_temp = num2[i]? strIntMaping[num2[i]] :strIntMaping ;
  sum_temp =num1_temp +  num2_temp + carry;

  if(sum_temp > 10){
    sumStr = sum_temp[sum_temp.length-1] + sumStr;
    carry= 1;
  }else{
    sumStr = sum_temp + sumStr;
    carry= 0;
  }
}
 return sumStr 
};
  
console.log(addStrings('29','19'));
// console.log(addStrings('9789','19'));