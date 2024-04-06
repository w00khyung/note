# Source Organization

## Code Collocation

- 모노레포(monorepo) 내의 각 응용 프로그램이나 패키지는 기능에 따라 프로젝트 파일/폴더를 조직하고 그룹화합니다.
- 코드를 가능한 한 관련된 위치에 가깝게 두세요.
- 깊게 중첩된 폴더는 문제가 되지 않아야 합니다.

## Imports

- Import 경로는 상대 경로로 시작하는 `./` 또는 `../`일 수 있고, 또는 절대 경로인 `@common/utils`일 수 있습니다.

### **가독성을 높이기 위한 Import 가이드**

- Import 문을 더 가독성 있고 이해하기 쉽게 만들기 위해 다음 가이드를 따르세요.
    1. **상대적인 Import 사용**
        - 동일한 기능 내에서 서로 '가까운' 파일을 가져올 때는 상대적인 Import `./`을 사용하세요. 이로써 코드베이스에서 기능을 이동하더라도 이러한 Import 문에 변경이 필요하지 않게 됩니다.
    2. **절대적인 Import 사용**
        - 다른 모든 경우에는 절대적인 Import `@common/utils`를 사용하세요.
    3. **툴링에 의한 자동 정렬 사용**
        - 모든 Import는 툴링(예: `prettier-plugin-sort-imports`, `eslint-plugin-import`)에 의해 자동으로 정렬되어야 합니다.

```tsx
// ❌ 피하기: 거리가 먼 상대 경로 Import
import { bar, foo } from '../../../../../../distant-folder';

// ✅ 사용: 상대 경로 및 절대 경로 Import 혼용
import { locationApi } from '@api/locationApi';

import { foo } from '../../foo';
import { bar } from '../bar';
import { baz } from './baz';
```

## Project Structure

- 각 응용 프로그램이 다음과 같은 파일/폴더 구조를 가지고 있는 예시 프론트엔드 모노레포 프로젝트

```
apps/
├─ product-manager/
│  ├─ common/
│  │  ├─ components/
│  │  │  ├─ Button/
│  │  │  ├─ ProductTitle/
│  │  │  ├─ ...
│  │  │  └─ index.tsx
│  │  ├─ consts/
│  │  │  ├─ paths.ts
│  │  │  └─ ...
│  │  ├─ hooks/
│  │  └─ types/
│  ├─ modules/
│  │  ├─ HomePage/
│  │  ├─ ProductAddPage/
│  │  ├─ ProductPage/
│  │  ├─ ProductsPage/
│  │  │  ├─ api/
│  │  │  │  └─ useGetProducts/
│  │  │  ├─ components/
│  │  │  │  ├─ ProductItem/
│  │  │  │  ├─ ProductsStatistics/
│  │  │  │  └─ ...
│  │  │  ├─ utils/
│  │  │  │  └─ filterProductsByType/
│  │  │  └─ index.tsx
│  │  ├─ ...
│  │  └─ index.tsx
│  ├─ eslintrc.js
│  ├─ package.json
│  └─ tsconfig.json
├─ warehouse/
├─ admin-dashboard/
└─ ...
```

- **`modules`** 폴더는 각 개별 페이지의 구현을 담당하며 해당 페이지에 대한 모든 사용자 정의 기능 (컴포넌트, 훅, 유틸리티 함수 등)이 구현됩니다.
- **`common`** 폴더는 실제로 응용 프로그램 전체에서 사용되는 구현을 담당합니다. "전역 폴더"이기 때문에 절약해서 사용해야 합니다. 예를 들어, 동일한 컴포넌트 (예: **`common/components/ProductTitle`**)가 여러 페이지에서 사용되기 시작하면 이를 **`common`** 폴더로 이동해야 합니다.
- 프론트엔드 프레임워크에서 파일 시스템 기반 라우터를 사용하는 경우 (예: Next.js), **`pages`** 폴더는 라우터의 역할을 수행하며, 해당 폴더의 주요 책임은 라우트를 정의하는 것입니다. 이 폴더에서는 비즈니스 로직의 구현은 이뤄지지 않습니다.
