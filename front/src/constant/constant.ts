// 대사
export type Script = Record<number, string>;

// 아이콘 태그
export type IconNames = Record<string, string>;

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
