// Node 17 버전 이상이면 structuredClone를 바로 사용 가능
// Node 17 미만이면 아래와 같이 정의해서 사용
const v8 = require("v8");
const structuredClone = (obj) => v8.deserialize(v8.serialize(obj));

const a = {
  name: "Tom",
  obj: { first: "HA", last: "HO" },
};
const b = structuredClone(a);

console.log(b);
