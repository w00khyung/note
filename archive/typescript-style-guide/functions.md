# 함수(Fuctions)

- 함수 컨벤션은 가능한 한 많이 따라야 합니다. (일부 규칙은 함수형 프로그래밍 기본 개념에서 파생되었습니다.)

## General

- 단일 책임 원칙을 따라야 합니다
- 상태가 없어야 하며, 동일한 입력에 대해 항상 동일한 값을 반환해야 합니다
- 최소한 하나의 인자를 받아들이고 데이터를 반환해야 합니다
- 부수 효과가 없어야 하며 순수(pure)해야 합니다

## Single Object Arg

- 함수를 가독성 있게 유지하고 미래에 확장 가능하게 유지하려면 (인수 추가/제거), 여러 개의 인수 대신 함수의 단일 객체를 인수로 사용하도록 노력하세요. 예외적으로 이 규칙은 하나의 기본 단일 인수만 있는 경우에 적용되지 않습니다 (예: 간단한 함수 **`isNumber(value)`**, 커링 구현 등).

```tsx
// ❌ Avoid having multiple arguments
transformUserInput('client', false, 60, 120, null, true, 2000);

// ✅ Use options object as argument
transformUserInput({
  method: 'client',
  isValidated: false,
  minLines: 60,
  maxLines: 120,
  defaultInput: null,
  shouldLog: true,
  timeout: 2000,
});
```

## Required & Optional Args

- 대부분의 매개변수를 필수로 지정하고 선택적인 매개변수는 삼가하려고 노력하세요. 함수가 너무 복잡해지면 아마도 그 함수를 더 작은 조각으로 나누는 것이 좋을 것입니다. 10개의 함수를 구현하되 각 함수당 5개의 필수 매개변수를 사용하는 것이, 하나의 "모든 것을 할 수 있는" 함수를 구현하되 50개의 선택적 매개변수를 사용하는 것보다 나은 과장된 예시입니다.

## Args as Discriminated Union

- 적용 가능한 경우, Discriminated Union 타입을 사용하여 선택적 매개변수를 제거하십시오. 이렇게 하면 함수 API의 복잡성이 감소하며 사용 사례에 따라 필요한/필수인 매개변수만 전달됩니다.

```tsx
// ❌ Avoid optional args as they increase complexity of function API
type StatusParams = {
  data?: Products;
  title?: string;
  time?: number;
  error?: string;
};

// ✅ Strive to have majority of args required, if that's not possible,
// use discriminated union for clear intent on function usage
type StatusParamsSuccess = {
  status: 'success';
  data: Products;
  title: string;
};

type StatusParamsLoading = {
  status: 'loading';
  time: number;
};

type StatusParamsError = {
  status: 'error';
  error: string;
};

type StatusParams = StatusSuccess | StatusLoading | StatusError;

export const parseStatus = (params: StatusParams) => {...
```
