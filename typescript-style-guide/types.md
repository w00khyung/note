## Types

### Type Inference (타입 추론)

- 경험상, 타입을 좁히는 데 도움이 되는 경우 타입을 명시적으로 선언하는 것이 좋습니다.
- 타입을 추가할 필요가 없다고 해서 추가하지 않아도 된다는 의미는 아닙니다. 경우에 따라 명시적인 타입 선언이 코드 가독성과 의도를 향상시킬 수 있습니다.

```tsx
// ❌ Avoid - Type can be inferred
const userRole: string = 'admin'; // Type 'string'
const employees = new Map<string, number>([['gabriel', 32]]);
const [isActive, setIsActive] = useState<boolean>(false);

// ✅ Use
const USER_ROLE = 'admin'; // Type 'admin'
const employees = new Map([['gabriel', 32]]); // Type 'Map<string, number>'
const [isActive, setIsActive] = useState(false); // Type 'boolean'

// ❌ Avoid - Type can be narrowed
const employees = new Map(); // Type 'Map<any, any>'
employees.set('lea', 'foo-anything');
type UserRole = 'admin' | 'guest';
const [userRole, setUserRole] = useState('admin'); // Type 'string'

// ✅ Use
const employees = new Map<string, number>(); // Type 'Map<string, number>'
employees.set('gabriel', 32);
type UserRole = 'admin' | 'guest';
const [userRole, setUserRole] = useState<UserRole>('admin'); // Type 'UserRole'
```

### Return Types(반환 타입)

- 반환 타입을 명시하는 것을 적극 권장하지만, 필수는 아닙니다. ([eslint rule](https://typescript-eslint.io/rules/explicit-function-return-type/))
- 반환 타입을 명시하면 다음과 같은 장점이 있습니다.
  - 반환값을 사용하면 모든 호출 코드에서 어떤 유형이 반환되는지 명확하고 쉽게 이해할 수 있습니다.
  - **반환 값이 없는 경우(void), 호출 코드는 정의되지 않은 값을 사용해서는 안 되는 경우 이를 사용하려고 시도하지 않습니다.**
  ```tsx
  function doSomething(): void {
    console.log('Doing something');
  }

  const result = doSomething(); // 에러: Type 'void' is not assignable to type 'any'.
  ```
  - 함수의 반환 타입을 변경하는 코드 변경이 있는 경우, 향후 잠재적인 타입 오류를 더 빨리 발견할 수 있습니다.
  - 반환 값이 올바른 유형의 변수에 할당되도록 보장하므로 리팩터링이 더 쉬워집니다.
  - 구현 전 테스트 작성(TDD)과 유사하게 함수 인수와 반환 유형을 정의하면 구현에 앞서 기능의 기능과 인터페이스에 대해 논의할 수 있습니다.
  - 타입 추론은 매우 편리하지만 반환 타입을 추가하면 TypeScript 컴파일러의 작업을 많이 줄일 수 있습니다.

### Template Literal Types

- 문자열 타입 대신 템플릿 리터럴 타입을 사용하세요. 템플릿 리터럴 유형에는 API 엔드포인트, 라우팅, 국제화, 데이터베이스 쿼리, CSS 타이핑 등 적용 가능한 사용 사례가 많습니다.

```tsx
// ❌ Avoid
const userEndpoint = '/api/usersss'; // Type 'string' - no error
// ✅ Use
type ApiRoute = 'users' | 'posts' | 'comments';
type ApiEndpoint = `/api/${ApiRoute}`;
const userEndpoint: ApiEndpoint = '/api/users';

// ❌ Avoid
const homeTitleTranslation = 'transltion.hom.title'; // Type 'string' - no error
// ✅ Use
type LocaleKeyPages = 'home' | 'about' | 'contact';
type TranslationKey = `translation.${LocaleKeyPages}.${string}`;
const homeTitleTranslation: TranslationKey = 'translation.home.title';

// ❌ Avoid
const color = 'blue-450'; // Type 'string' - no error
// ✅ Use
type BaseColor = 'blue' | 'red' | 'yellow' | 'gray';
type Variant = 50 | 100 | 200 | 300 | 400;
// Type blue-50, blue-100, blue-200, blue-300, blue-400, red-50, red-100, #AD3128 ...
type Color = `${BaseColor}-${Variant}` | `#${string}`;
```

### Type any & unknown

- `any`데이터 타입은 TypeScript가 기본값으로 사용하는 문자 그대로 "모든" 값을 나타내며 유형을 유추할 수 없으므로 유형 검사를 생략하므로 사용해서는 안 됩니다. 또한, `any`는 심각한 프로그래밍 오류를 가릴 수 있으므로 위험합니다.
- 모호한 데이터 유형을 처리할 때는 `any`에 대응하는 유형 안전성이 있는 `unknown`을 사용하세요.
- **`unknown`** 타입은 모든 프로퍼티에 대한 참조를 허용하지 않습니다. **`unknown`**은 어떤 값이든 할당할 수 있/지만, **`unknown`** 자체는 다른 타입에 할당할 수 없습니다.

```tsx
// unknown 타입의 변수에 직접적인 프로퍼티 참조가 허용되지 않음.
let myVariable: unknown;
console.log(myVariable.someProperty); // 에러: Property 'someProperty' does not exist on type 'unknown'.
```

```tsx
// unknown에는 어떤 값이든 할당할 수 있음.
let myVariable: unknown;
myVariable = 10; // 가능
myVariable = 'Hello'; // 가능
```

```tsx
// 그러나, unknown 자체는 어떤 타입에도 할당 될 수 없음.
// 즉, unknown을 다른 타입으로 바로 할당하려면 타입을 명시적으로 지정해주어야 함.
let myNumber: number;
myNumber = myVariable; // 에러: Type 'unknown' is not assignable to type 'number'.
```

### Type & Non-nullability Assertions

- 타입 단언 (`user as User`)과 **Non-nullability Assertions** (`user!.name`)은 안전하지 않습니다. 이 두 가지는 TypeScript 컴파일러를 조용히 만들고 런타임에서 애플리케이션 충돌의 위험을 증가시킵니다. 이들은 강력한 이유가 있는 예외적인 상황에서만 사용해야 합니다 (예: 타사 라이브러리의 타입 불일치, unknown을 참조할 때 등).

```tsx
type User = { id: string; username: string; avatar: string | null };
// ❌ Avoid type assertions
const user = { name: 'Nika' } as User;
// ❌ Avoid non-nullability assertions
renderUserAvatar(user!.avatar); // Runtime error

const renderUserAvatar = (avatar: string) => {...}
```

### Type Error

- 만약 TypeScript 오류를 해결할 수 없다면, 마지막 수단으로 **`@ts-expect-error`**를 사용하여 해당 오류를 억제하세요 ([eslint rule](https://typescript-eslint.io/rules/prefer-ts-expect-error/)).
- 만약 나중에 억제된 부분이 오류가 없어진다면 TypeScript 컴파일러가 알려줄 것입니다. **`@ts-ignore`**은 허용되지 않지만, **`@ts-expect-error`**는 제공된 설명과 함께 사용할 수 있습니다 ([eslint rule](https://typescript-eslint.io/rules/ban-ts-comment/#allow-with-description)).

```tsx
// ❌ Avoid @ts-ignore
// @ts-ignore
const result = doSomething('hello');

// ✅ Use @ts-expect-error with description
// @ts-expect-error: The library definition is wrong, doSomething accepts string as an argument.
const result = doSomething('hello');
```

### Type Definition

- TypeScript은 두 가지 타입 정의 옵션을 제공합니다 - **`type`**과 **`interface`**. 이들은 대부분의 경우에 몇 가지 기능적인 차이를 가지지만 대부분의 상황에서는 서로 교환해서 사용할 수 있습니다. 우리는 문법의 차이를 최소화하고 일관성을 유지하기 위해 하나를 선택하려고 노력합니다.
- 모든 타입은 타입 별칭(**`type`**)을 사용하여 정의되어야 합니다 ([eslint rule)](https://typescript-eslint.io/rules/consistent-type-definitions/#type).

```tsx
// ❌ Avoid interface definitions
interface UserRole = 'admin' | 'guest'; // invalid - interface can't define (commonly used) type unions

interface UserInfo {
  name: string;
  role: 'admin' | 'guest';
}

// ✅ Use type definition
type UserRole = 'admin' | 'guest';

type UserInfo = {
  name: string;
  role: UserRole;
};
```

- 선언 병합(declaration merging)의 경우(예: 제3자 라이브러리 유형 확장), **`interface`**를 사용하고 lint 규칙을 비활성화하세요.

```tsx
// types.ts
declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string;
    CUSTOM_ENV_VAR: string;
  }
}

// server.ts
app.listen(process.env.PORT, () => {...}
```

### Array Types

- 배열 타입은 제네릭 구문을 사용하여 정의되어야 합니다. ([eslint rule](https://typescript-eslint.io/rules/array-type/#generic))

```tsx
// ❌ Avoid
const x: string[] = ['foo', 'bar'];
const y: readonly string[] = ['foo', 'bar'];

// ✅ Use
const x: Array<string> = ['foo', 'bar'];
const y: ReadonlyArray<string> = ['foo', 'bar'];
```
