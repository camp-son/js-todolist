# Todo list

## Initialize
```
npm i
```

```
npm run serve
```

## 개요
- Vanilla js를 활용하여 다양한 패턴 설계와 구현을 하기 위함이다.

## 1 Step - MVC 패턴
- Model, View, Controller를 분리한다.
- Model, View, Controller는 서로의 존재를 모르게 구현되어야 한다.
- `Model` 데이터에 대한 관리
- `View` DOM에 접근하고 렌더링 관리
- `Controller` Model과 View를 연결시켜주는 중개자
- 폼이 많아지거나 기능이 다양해질 때 컨트롤러가 거대해질 수 있다.

## 2 Step - MVVM 패턴
- Model, View, View Model로 분리한다.
- Observable 패턴을 적용하여 반응형 웹으로 구현한다.
- Model의 데이터가 변경될 때, 구독하고 있던 View에 데이터를 바로 반영한다.
