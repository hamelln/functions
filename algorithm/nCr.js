/**
 *
 * @param {배열} arr
 * @param {선택 수} r
 * @returns
 */
 const nCr = (arr, r) => {
  if (r === 1) return arr.map((e) => [e]);
  return arr.reduce((acc, cur, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = nCr(rest, r - 1);
    const attached = combinations.map((e) => [cur, ...e]);
    acc.push(...attached);
    return acc;
  }, []);
};

/**
 *
 * @param {문자열} str
 * @param {선택 수} r
 * @returns
 */
const nCrStr = (str, r) => {
  const arr = [];
  if (r === 1) return str;
  for (let i = 0; i < str.length; i++) {
    const fixed = str[i];
    const rest = str.substring(i + 1);
    const combination = nCrStr(rest, r - 1);
    for (let j = 0; j < combination.length; j++) {
      arr.push(fixed + combination[j]);
    }
  }
  return arr;
};

console.log(nCr(["A", "B", "C"], 2));
console.log(nCrStr("ABC", 2));
