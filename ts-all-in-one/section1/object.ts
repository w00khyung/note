const x: {} = 'hello';
const y: Object = 'hi'; // {}, Object는 모든 타입(null, undefined 제외)
const xx: object = 'hi';
const yy: object = { hello: 'world' }; // object는 지양, interface, type, class 사용 권장
const z: unknown = 'hi';

// unknown = {} | null | undefined
if (z) {
  z;
}
