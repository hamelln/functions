/**
 * @param {배열} arr
 * @param {가짓수} r
 */
const getPermutation = (arr, r) => {
  if (r === 1) return [arr];
  return arr.reduce((acc, next, idx) => {
    const rest = arr.filter((_, i) => i !== idx);
    const permutation = getPermutation(rest, r - 1);
    const combine = permutation.map((e) => [next, ...e]);
    acc.push(...combine);
    return acc;
  }, []);
};
