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

## 1 Step - MV* 패턴
### MVC 패턴
- Model, View, Controller를 분리한다.
- Model, View, Controller는 서로의 존재를 모르게 구현되어야 한다.
- `Model` 데이터에 대한 관리
- `View` DOM에 접근하고 렌더링 관리
- `Controller` Model과 View를 연결시켜주는 중개자

### MVVM 패턴
- MVC 패턴에서 Controller에 대한 높은 결합도를 낮춰준다.

## 2 Step - Observer 패턴
- 구독/발행하는 형태로 구현
- 데이터를 pull 방식이 아닌 push 방식으로 받아온다.
- 상태가 변경되는 Model이 Observable이 되고, 상태를 감지할 View가 Observer가 된다.
- 결합도가 있는 Controller를 제거한다.