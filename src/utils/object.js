export function listToObject(array, prop) {
  if (!array) return {};

  return array.reduce((obj, item) => {
    obj[item[prop || "id"]] = item;
    return obj;
  }, {});
}

export function listContainsObjWithPropEqualTo(list, prop, val) {
  if (!list) return false;

  for (var i = 0; i < list.length; i++) {
    if (list[i][prop] == val) return true;
  }
  return false;
}
