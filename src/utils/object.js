export function listToObject(array) {
  if (!array) return {};

  return array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}
