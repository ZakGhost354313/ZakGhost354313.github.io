ls = window.localStorage;
ss = window.sessionStorage;

function localStorageTest() {
  ls.setItem('key','value');
  let test = ls.getItem('key');
  print(test);
  ls.removeItem('Key');
  ls.clear();
}
storageTest();

