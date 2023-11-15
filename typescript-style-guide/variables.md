# 변수 (Variables)

## Const Assertion

- **`const`** 단언(const assertion)을 사용하도록 노력하세요.
    - 타입이 좁혀집니다 (narrowed)
    - 객체에는 읽기 전용 속성이 생깁니다
    - 배열은 읽기 전용 튜플이 됩니다

```tsx
// ❌ Avoid declaring constants without const assertion
const FOO_LOCATION = { x: 50, y: 130 }; // Type { x: number; y: number; }
FOO_LOCATION.x = 10;
const BAR_LOCATION = [50, 130]; // Type number[]
BAR_LOCATION.push(10);
const RATE_LIMIT = 25;
// RATE_LIMIT_MESSAGE type - string
const RATE_LIMIT_MESSAGE = `Rate limit exceeded! Max number of requests/min is ${RATE_LIMIT}.`;

// ✅ Use const assertion
const FOO_LOCATION = { x: 50, y: 130 } as const; // Type '{ readonly x: 50; readonly y: 130; }'
FOO_LOCATION.x = 10; // Error
const BAR_LOCATION = [50, 130] as const; // Type 'readonly [10, 20]'
BAR_LOCATION.push(10); // Error
const RATE_LIMIT = 25;
  // RATE_LIMIT_MESSAGE type - 'Rate limit exceeded! Max number of requests/min is 25.'
const RATE_LIMIT_MESSAGE = `Rate limit exceeded! Max number of requests/min is ${RATE_LIMIT}.` as const;
```

- `exhaustiveness check`, TypeScript에서 스위치문이나 타입 판별 구조에서 모든 가능한 타입 값들을 다루고 있는지 확인하는 기능입니다. ([eslint rule](https://typescript-eslint.io/rules/switch-exhaustiveness-check/))

```tsx
const shapes = [
  { kind: 'square', size: 7 },
  { kind: 'rectangle', width: 12, height: 6 },
  { kind: 'circle', radius: 23 },
] as const;

type Shape = (typeof shapes)[number];

const getShapeArea = (shape: Shape) => {
  // Error - Switch is not exhaustive. Cases not matched: "circle"
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.width * shape.size; // Error - Property 'size' does not exist on type 'rectangle'
  }
};
```

## Enums & Const Assertion

- **`const`** 단언은 열거형(enum) 대신 사용되어야 합니다.
    - 열거형은 여전히 **`const`** 단언이 수행하는 역할을 수행할 수 있지만, 대개 피하는 경향이 있습니다. TypeScript 문서에서 언급된 몇 가지 이유는 다음과 같습니다: "[Const enum pitfalls](https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls)" (const 열거형의 함정), "[Objects vs Enums](https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums)" (객체 vs 열거형), "[Reverse mappings](https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings)" (역 매핑) 등.

```tsx
// ❌ Avoid using enums
enum UserRole {
  GUEST,
  MODERATOR,
  ADMINISTRATOR,
}

enum Color {
  PRIMARY = '#B33930',
  SECONDARY = '#113A5C',
  BRAND = '#9C0E7D',
}

// ✅ Use const assertion
const USER_ROLES = ['guest', 'moderator', 'administrator'] as const;
type UserRole = (typeof USER_ROLES)[number]; // Type "guest" | "moderator" | "administrator"

// Use satisfies if UserRole type is already defined - e.g. database schema model
type UserRoleDB = ReadonlyArray<'guest' | 'moderator' | 'administrator'>;
const AVAILABLE_ROLES = ['guest', 'moderator'] as const satisfies UserRoleDB;

const COLOR = {
  primary: '#B33930',
  secondary: '#113A5C',
  brand: '#9C0E7D',
} as const;
type Color = typeof COLOR;
type ColorKey = keyof Color; // Type "PRIMARY" | "SECONDARY" | "BRAND"
type ColorValue = Color[ColorKey]; // Type "#B33930" | "#113A5C" | "#9C0E7D"
```

## Null & Undefined

- TypeScript에서 `null`과 `undefined`는 많은 경우에 서로 교환하여 사용될 수 있습니다. 다음과 같은 가이드라인을 따라 노력하세요.
    - **null 사용**
        - 명시적으로 값이 없음을 나타낼 때 `null`을 사용하세요. 이는 변수에 할당하거나 함수의 반환 타입 등에서 명시적으로 사용될 수 있습니다.
    - **undefined 사용**
        - 값이 존재하지 않을 때 `undefined`를 사용하세요. 예를 들어, 폼의 필드를 제외하거나 요청 페이로드, 데이터베이스 쿼리 ([Prisma의 경우](https://www.prisma.io/docs/concepts/components/prisma-client/null-and-undefined))에서 값이 없음을 나타낼 때 `undefined`를 사용하세요.
