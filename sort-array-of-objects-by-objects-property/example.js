
/**
 * USAGE:
 *
 *  var array = [{'name': 'John', 'age': "48"}, {'name': 'William', 'age': '20'}]
 *
 *  array.sort(dynamicsort('name'))
 *
 *  source: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
 */
function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a,b) {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}
