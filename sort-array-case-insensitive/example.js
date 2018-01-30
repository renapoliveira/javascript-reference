//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-in-javascript#9645447
["Foo", "bar"].sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
});
