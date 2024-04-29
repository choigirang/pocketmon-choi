import { keyframes } from "styled-components";

// 글자 그라데이션 - PartOneTutorial
export const nameAni = keyframes`
  0% {
    background-position-y: 0%;
  }50%{
    background-position-y: 50%;
  }
  100% {
    background-position-y: 0%;
  }
`;

// 깜빡임 애니메이션 - PartOneTutorial, pokemon/save,
export const lightAni = keyframes`
  0%{
    visibility: hidden;
    opacity: 1;
  }50%{
    visibility: visible;
    opacity: 0;
  }
`;
