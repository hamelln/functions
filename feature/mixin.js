/**
 *
 * @param {복사할 객체} target
 * @param {복사하려는 원본} source
 * @returns
 */
function mixin(target, source) {
  const keys = Object.keys(source);
  for (let i = 0; i < keys.length; i++) {
    const descriptor = Object.getOwnPropertyDescriptor(source, keys[i]);
    Object.defineProperty(target, keys[i], descriptor);
  }
  return target;
}

const a = {
  name: "Tom",
  obj: { first: "HA", last: "HO" },
  hello() {
    console.log("Hi!");
  },
};
const b = {};

mixin(b, a);
console.log(b);
