import Computer from "@/app/(common)/(window)/(computer)/computer";
import Pokemon from "@/app/(common)/(window)/(pokemon)/pokemon";

// 대사
export type Script = Record<number, string>;
export type StrScript = Record<string, string>;

// 아이콘 태그
export type IconNames = Record<string, string>;

export interface IconComponent {
  name: string;
  components: React.ReactNode;
}

export const IconData: { [key: string]: IconComponent } = {
  pokemon: {
    name: "pokemon",
    components: Pokemon(),
    // list: [{File: {
    //   exist:
    // }}],
  },
  computer: {
    name: "computer",
    components: Computer(),
  },
};

// PartOneTutorial
export const PART_ONE_DATA: Script = {
  1: "어질어질한 개발자 세계에 잘 왔단다 !",
  2: "나는 지칠 대로 지쳐버린 시니어 오박사...",
  3: "이 세계에는 스택이라고 불리는",
  4: "다양한 포켓몬이 존재한단다.",
  5: "포켓몬을 습득하는 것은 매우 어려운 길이지...",
  6: "우리는 이제 막 트레이너가 된",
  7: " 을 만나러 가보자꾸나",
};

// pokemon/save
export const SAVE_DATA: Script = {
  1: "저장된 데이터를 불러옵니다.",
};

// IconGrid & bottom/NavMenu 바탕화면
export const ICONS_FILE: IconNames = {
  computer: "My-Computer.png",
  pokemon: "Pokemon.png",
};

// character/ItemOpen
export const BACK_PACK: StrScript = {
  React:
    "웹 프레임워크로, 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다.",
  TypeScript:
    "코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거한다.",
  StyledComponents:
    "기존 돔을 만드는 방식인 css, scss 파일을 밖에 두고, 태그나 id, class이름으로 가져와 쓰지 않고, 동일한 컴포넌트에서 컴포넌트 이름을 쓰듯 스타일을 지정한다.",
  Nextjs: "React로 만드는 서버사이드 렌더링 프레인 워크이다.",
};
