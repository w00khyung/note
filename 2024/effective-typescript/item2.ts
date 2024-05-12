function add(a: number, b: number) {
  return a + b;
}

add(10, null);

const c: number = null;

const el = document.getElementById('status');
el.textContent = 'Ready';
// Object is possibly 'null'

if (el) {
  // null 체크
  el.textContent = 'Ready';
}
// 단언
el!.textContent = 'Ready';
