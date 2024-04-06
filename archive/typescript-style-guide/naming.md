# 이름 짓기(Naming)

- 일관되고 가독성 있고 중요한 컨텍스트를 제공하는 네이밍 컨벤션을 유지하려고 노력하세요. 왜냐하면 다른 사람이 여러분이 작성한 코드를 유지보수할 것이기 때문입니다.

## Named Export

- 명명된 내보내기(named exports)를 사용하여 모든 가져오기(import)가 균일한 패턴을 따르도록 보장해야 합니다 ([eslint rule](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md)).
- 이를 통해 변수, 함수 등의 이름이 전체 코드베이스에서 일관되게 유지됩니다.
- 명명된 내보내기를 사용하면 가져오기 문에서 선언되지 않은 것을 가져오려고 할 때 오류가 발생하는 장점이 있습니다.
- 예외적인 상황, 예를 들면 Next.js 페이지와 같은 경우에는 규칙을 비활성화하세요.

```tsx
// .eslintrc.js
overrides: [
  {
    files: ["src/pages/**/*"],
    rules: { "import/no-default-export": "off" },
  },
],
```

## Naming Conventions

- 좋은 이름을 찾는 것은 종종 어렵지만, 일관성과 미래의 독자를 위해 코드를 최적화하려면 규칙을 따르세요

### **변수 (Variables)**

- **로컬 변수 (Locals)**
    - 카멜 케이스(camel case)를 사용하세요.
    - 예: **`products`**, **`productsFiltered`**
- **불리언 (Booleans)**
    - **`is`**, **`has`** 등의 접두사를 사용하세요.
    - 예: **`isDisabled`**, **`hasProduct`**
- **상수 (Constants)**
    - 대문자로 표기하세요.
    - 예: **`PRODUCT_ID`**
- **객체 상수 (Object Constants)**
    - 단수형으로 표기하고 대문자로 시작하며 **`const`** 단언을 사용하세요. 선택적으로 타입을 만족하는 경우 (타입이 존재하는 경우) **`satisfies`**를 사용하세요.
    
    ```tsx
    const ORDER_STATUS = {
      pending: 'pending',
      fulfilled: 'fulfilled',
      error: 'error',
    } as const satisfies OrderStatus;
    ```
    

### **함수 (Functions)**

- 카멜 케이스(camel case)를 사용하세요.
- 예: **`filterProductsByType`**, **`formatCurrency`**

**제네릭스 (Generics)**

- 대문자 T로 시작하는 이름을 사용하세요. **`.Net`** 내부 구현과 유사합니다.
- 한 문자로 된 제네릭 이름 (**`T`**, **`K`** 등)은 피하세요. 변수를 도입할수록 혼란이 생길 가능성이 높아집니다.

```tsx
// ❌ 한 문자로 된 제네릭 이름 사용
const createPair = <T, K extends string>(first: T, second: K): [T, K] => {
  return [first, second];
};
const pair = createPair(1, 'a');

// ✅ 대문자 T로 시작하는 이름 사용
const createPair = <TFirst, TSecond extends string>(first: TFirst, second: TSecond): [TFirst, TSecond] => {
  return [first, second];
};
const pair = createPair(1, 'a');
```

- [Eslint rule](https://typescript-eslint.io/rules/naming-convention) implements

```tsx
// .eslintrc.js
'@typescript-eslint/naming-convention': [
  'error',
  {
    selector: 'typeParameter',
    format: ['PascalCase'],
    custom: { regex: '^T[A-Z]', match: true },
  },
],
```

### **약어 및 머릿말 (Abbreviations & Acronyms)**

- 약어 및 머릿말은 전체 단어처럼 다루며 첫 글자만 대문자로 적용하세요.

```tsx
// ❌ 약어 사용 예
const FAQList = ['qa-1', 'qa-2'];
const generateUserURL = (params) => {...};

// ✅ 약어 사용 예시
const FaqList = ['qa-1', 'qa-2'];
const generateUserUrl = (params) => {...};
```

- **가독성을 위해 약어를 피하라**
    - 약어는 일반적으로 널리 알려지고 필요한 경우를 제외하고는 가독성을 위해 피하도록 노력하세요.

```tsx
// ❌ 약어 사용 예
const GetWin = (params) => {...};

// ✅ 약어 사용하지 않은 예시
const GetWindow = (params) => {...};
```

### **React 컴포넌트 (React Components)**

- 파스칼 케이스(Pascal case)를 사용하세요.
- 예: **`ProductItem`**, **`ProductsPage`**

**프롭 타입 (Prop Types)**

- React 컴포넌트 이름 뒤에 "Props" 접미사를 사용하세요.
- **`[컴포넌트이름]Props`** - **`ProductItemProps`**, **`ProductsPageProps`**

**콜백 프롭 (Callback Props)**

- 이벤트 핸들러 콜백 프롭은 **`on*`**로 접두사를 붙입니다. 예: **`onClick`**.
- 이벤트 핸들러 구현 함수는 **`handle*`**로 접두사를 붙입니다 ([eslint rule](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)).

```tsx
// ❌ 일관성 없는 콜백 프롭 네이밍 피하기
<Button click={actionClick} />
<MyComponent userSelectedOccurred={triggerUser} />

// ✅ prop 접두사 'on*' 및 핸들러 접두사 'handle*' 사용
<Button onClick={handleClick} />
<MyComponent onUserSelected={handleUserSelected} />
```

### **React Hooks (리액트 훅스)**

- 카멜 케이스(camel case)를 사용하고, 'use'로 접두사를 붙입니다 ([eslint rule](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)). **`useState()`**의 경우 [value, setValue]와 같은 대칭적인 패턴을 따릅니다 ([eslint rule](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md#rule-details)).

```jsx
// ❌ 일관성 없는 useState 훅 네이밍 피하기
const [userName, setUser] = useState();
const [color, updateColor] = useState();
const [isActive, setActive] = useState();

// ✅ 사용
const [name, setName] = useState();
const [color, setColor] = useState();
const [isActive, setIsActive] = useState();
```

**커스텀 훅 (Custom Hooks)**

- 커스텀 훅은 항상 객체를 반환해야 합니다.

```jsx
// ❌ 객체를 반환하지 않는 커스텀 훅 피하기
const [products, errors] = useGetProducts();
const [fontSizes] = useTheme();

// ✅ 사용
const { products, errors } = useGetProducts();
const { fontSizes } = useTheme();

```

### **주석 (Comments)**

- 일반적으로 주석을 피하되, 코드 자체를 표현하고 이름을 명확하게 사용하여 주석을 필요 없게 하세요.
- 코드로 표현할 수 없는 선택 사항이나 컨텍스트를 추가해야 할 때 주석을 사용하세요 (예: 설정 파일).
- 주석은 항상 완전한 문장으로 작성되어야 합니다. 주석에서는 어떻게(how)와 무엇(what)보다 왜(why)를 설명하는 것이 좋습니다.

```tsx
// ❌ 피하기: 주석이 필요한 부분을 코드로 표현하기
// 분 단위로 변환
const m = s * 60;
// 분당 평균 사용자 수
const myAvg = u / m;

// ✅ 사용: 코드를 통해 왜를 설명하기
const SECONDS_IN_MINUTE = 60;
const minutes = seconds * SECONDS_IN_MINUTE;
const averageUsersPerMinute = noOfUsers / minutes;

// TODO: 필터링은 API 변경이 릴리스된 후 백엔드로 이동해야 합니다.
// 이슈/PR - https://github.com/foo/repo/pulls/55124
const filteredUsers = frontendFiltering(selectedUsers);

// 푸리에 변환 사용하여 정보 손실 최소화 - https://github.com/dntj/jsfft#usage
const frequencies = signal.FFT();
```
