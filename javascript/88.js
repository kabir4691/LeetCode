/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const nums1Copy = [...nums1];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < m && j < n) {
      if (nums1Copy[i] < nums2[j]) {
          nums1[k++] = nums1Copy[i++];
      } else {
          nums1[k++] = nums2[j++];
      }
  }
  while (i < m) nums1[k++] = nums1Copy[i++];
  while (j < n) nums1[k++] = nums2[j++];
};