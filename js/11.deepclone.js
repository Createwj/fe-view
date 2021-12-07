function deepClone(val){
  const isObject = val => val !== null && (typeof val === 'object' || typeof val === 'function')
  if(!isObject(val)){
    console.error('err');
    return
  }
  let isArray = Array.isArray(val);
  let newObj = isArray ? [...val] : {...val};
  Reflect.ownKeys(newObj).forEach(res => {
    newObj[res] = isObject(newObj[res]) ? deepClone(newObj[res]) : val[res];
  })
  return newObj
}
// test code
let obj = {
  a: [1, 2, 3],
  b: {
    c: 2,
    d: 3
  }
}
let newObj = deepClone(obj)
newObj.b.c = 1;
console.log(obj.b.c) // 2



function deepClone(obj) {
    const isObject = val => val === null || (typeof val !== 'object' && typeof val !== 'function');
    if(!isObject(obj)) { return };
    let newVal = Array.isArray(obj) ? [...obj] : {...obj};
    Reflect.ownKeys(newVal).forEach(res => {
      newVal[res] = isObject(newVal[res]) ? deepClone(newVal[res]) : obj[res];
    })
    return newVal
}

















