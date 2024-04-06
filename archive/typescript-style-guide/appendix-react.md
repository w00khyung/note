# Appendix - React

- React 컴포넌트와 훅도 함수이기 때문에 관련된 함수 규칙이 적용됩니다.

## **Required & Optional Props**

- 대부분의 Props를 필수로 가져가도록 노력하고, 선택적인 Props는 삼가거나 신중하게 사용하세요.
- 특히 처음이나 단일 사용 사례에 대한 새로운 컴포넌트를 작성할 때는 대부분의 Props를 필수로 지정하는 것이 좋습니다. 컴포넌트가 더 많은 사용 사례를 다루기 시작하면 선택적인 Props를 도입하세요.
- 컴포넌트 API가 처음부터 선택적인 Props를 구현해야 하는 경우도 있습니다 (예: 여러 사용 사례를 다루는 공유 컴포넌트, UI 디자인 시스템 컴포넌트 - `isDisabled`와 같은 경우).
- 컴포넌트 또는 훅이 너무 복잡해지면 작은 조각으로 분할하는 것이 좋습니다.
- 예를 들어, 각각 5개의 필수 props를 가진 10개의 React 컴포넌트를 구현하는 것이 50개의 선택적 props를 허용하는 "모든 것을 할 수 있는" 하나의 컴포넌트를 구현하는 것보다 낫습니다.

## **Props as Discriminated Type**

- 적용 가능한 경우, Discriminated Type을 사용하여 선택적인 props를 제거하여 컴포넌트 API의 복잡성을 감소시키고 해당 사용 사례에 따라 필요한 props만 전달합니다.

```tsx
// ❌ 선택적인 props를 사용하는 것은 컴포넌트 API의 복잡성을 높일 수 있으므로 피하세요
type StatusProps = {
  data?: Products;
  title?: string;
  time?: number;
  error?: string;
};

// ✅ 대부분의 props를 필수로 가져가도록 노력하며, 그렇게 할 수 없는 경우에는
// discriminated union을 사용하여 컴포넌트 사용 목적을 명확히 표현하세요
type StatusSuccess = {
  status: 'success';
  data: Products;
  title: string;
};

type StatusLoading = {
  status: 'loading';
  time: number;
};

type StatusError = {
  status: 'error';
  error: string;
};

type StatusProps = StatusSuccess | StatusLoading | StatusError;

export const Status = (status: StatusProps) => {...

```

## **Props To State**

일반적으로 props를 상태로 사용하는 것은 피하는 것이 좋습니다. 왜냐하면 컴포넌트는 prop의 변경으로 업데이트되지 않기 때문에 추적하기 어려운 버그, 의도하지 않은 부작용, 테스트의 어려움 등을 야기할 수 있습니다.
초기 상태에 prop을 사용해야 하는 경우 해당 prop은 `initial`접두어로 지정되어야 합니다 (예: `initialProduct`, `initialSort`등).

```tsx
// ❌ props를 상태로 사용하는 것을 피하세요
type FooProps = {
  productName: string;
  userId: string;
};

export const Foo = ({ productName, userId }: FooProps) => {
  const [productName, setProductName] = useState(productName);
  ...
};

// ✅ 합당한 사용 사례가 있는 경우 prop에 `initial` 접두어 사용
type FooProps = {
  initialProductName: string;
  userId: string;
};

export const Foo = ({ initialProductName, userId }: FooProps) => {
  const [productName, setProductName] = useState(initialProductName);
  ...
};
```

## Props Type

```tsx
// ❌ Avoid using React.FC type
type FooProps = {
  name: string;
  score: number;
};

export const Foo: React.FC<FooProps> = ({ name, score }) => {

// ✅ Use props argument with type
type FooProps = {
  name: string;
  score: number;
};

export const Foo = ({ name, score }: FooProps) => {...
```

## Component Types

### Container

- 모든 컨테이너 컴포넌트는 "Container" 또는 "Page" 접미사를 가져야 합니다. **`[ComponentName]Container|Page`** 형식입니다. "Page" 접미사를 사용하여 실제 웹 페이지임을 나타냅니다.
- 각 기능은 컨테이너 컴포넌트를 가져야 합니다 (예: **`AddUserContainer.tsx`**, **`EditProductContainer.tsx`**, **`ProductsPage.tsx`** 등).
- 비즈니스 로직 및 API 통합이 포함됩니다.
- 구조

```
ProductsPage/
├─ api/
│  └─ useGetProducts/
├─ components/
│  └─ ProductItem/
├─ utils/
│  └─ filterProductsByType/
└─ index.tsx
```

### UI - Feature

- 기능 요구 사항을 충족시키기 위해 설계된 표현 컴포넌트입니다.
- 컨테이너 컴포넌트 폴더 안에 중첩되어 있어야 합니다.
- 가능한 한 함수 규칙을 따라야 합니다.
- API 통합이 없어야 합니다.
- 구조

```
ProductItem/
├─ index.tsx
├─ ProductItem.stories.tsx
└─ ProductItem.test.tsx
```

### UI - Design system

- 코드베이스 전체에서 사용되는 전역 재사용/공유 컴포넌트입니다.

```
Button/
├─ index.tsx
├─ Button.stories.tsx
└─ Button.test.tsx
```

## Store & Pass Data

- 특히 필터링, 정렬 등을 위해 상태를 URL에 저장하는 것이 좋습니다.
- URL 상태를 로컬 상태와 동기화하지 마세요.
- 데이터를 단순히 props를 통해 전달하거나 URL, 자식 컴포넌트 조합을 고려하세요. 전역 상태(Zustand, Context)는 마지막 수단으로 사용하세요.
- 컴포넌트가 함께 속하고 작동해야 할 때 React 복합 컴포넌트를 사용하세요.
    - 메뉴, 아코디언, 네비게이션, 탭, 목록 등
- 항상 복합 컴포넌트를 다음과 같이 내보내세요.

```tsx
// PriceList.tsx
const PriceListRoot = ({ children }) => <ul>{children}</ul>;
const PriceListItem = ({ title, amount }) => <li>Name: {name} - Amount: {amount}</li>;

// ❌
export const PriceList = {
  Container: PriceListRoot,
  Item: PriceListItem,
};
// ❌
PriceList.Item = Item;
export default PriceList;

// ✅
export const PriceList = PriceListRoot as typeof PriceListRoot & {
  Item: typeof PriceListItem;
};
PriceList.Item = PriceListItem;

// App.tsx
import { PriceList } from "./PriceList";

<PriceList>
  <PriceList.Item title="Item 1" amount={8} />
  <PriceList.Item title="Item 2" amount={12} />
</PriceList>;
```

- **UI 컴포넌트**
    - 파생된 상태를 표시하고 이벤트를 전송해야 합니다.
    - 다른 프로그래밍 언어에서 함수 인수를 다음 함수로 전달할 수 있듯이 React 컴포넌트도 마찬가지로 프롭 드릴링이 문제가 되지 않아야 합니다.
    - 앱 확장으로 인해 prop drilling이 실제로 문제가 되는 경우 렌더 메서드를 리팩터링하거나 부모 컴포넌트에서 로컬 상태를 사용하거나 구성 등을 사용해야 합니다.
- **데이터 페칭은 컨테이너 컴포넌트에서만 허용됩니다:**
    - 서버 상태 라이브러리의 사용이 권장됩니다 ([react-query](https://github.com/tanstack/query), [apollo client](https://github.com/apollographql/apollo-client) 등).
    - 전역 상태에 대한 클라이언트 상태 라이브러리 사용은 권장되지 않습니다.
    - 어떤 것이 정말로 애플리케이션 전체에서 전역적이어야 하는지 다시 고려하세요 (예: themeMode, 권한 또는 서버 상태에 배치할 수 있는 사용자 설정과 같은 것 - /me 엔드포인트). 여전히 전역 상태가 정말로 필요한 경우 `Zustand`나 `Context`를 사용하세요.
