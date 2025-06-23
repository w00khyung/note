let x = 'hello';
x = 1234;

interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  // ❗️ instanceof은 런타임에 일어나지만 Ractangle은 타입이다
  // 인터페이스, 타입, 타입 구문은 JS로 컴파일되는 과정에서 제거된다. => erasable
  if (shape instanceof Rectangle) {
    //                 ~~~~~~~~~ 'Rectangle' only refers to a type,
    //                           but is being used as a value here
    return shape.width * shape.height;
    //                         ~~~~~~ Property 'height' does not exist
    //                         on type 'Shape'
  } else {
    return shape.width * shape.width;
  }
}


interface Person {
    first: string
    last: string
  }
  
  const formatName = (p: Person) => `${p.first} ${p.last}`
  const formatNameAny = (p: any) => `${p.first} ${p.last}`
  