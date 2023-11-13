const init: { [key: string]: HTMLImageElement } = {};
const imageClass = {
  front: "bg-front",
  frontOne: "bg-front1",
  frontTwo: "bg-front2",
  bikeFront: "bg-bike",
  bikeFrontOne: "bg-bike1",
  bikeFrontTwo: "bg-bike2",
  left: "bg-left",
  leftOne: "bg-left1",
  leftTwo: "bg-left2",
  bikeLeftOne: "bg-left-bike",
  bikeLeftTwo: "bg-left-bike1",
  right: "bg-right",
  rightOne: "bg-right1",
  rightTwo: "bg-right2",
  bikeRightOne: "bg-right-bike",
  bikeRightTwo: "bg-right-bike1",
};

const CharacterImages = Object.entries(imageClass).reduce(
  (images, [key, className]) => {
    const image = document.createElement("div");
    image.className = className;

    return images;
  },
  init
);

export default CharacterImages;
