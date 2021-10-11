//呼び出す関数
let upTrianges = () => {
  let itemElements = document.getElementsByClassName("item");
  console.log(itemElements);
  //itemクラスの要素ごとに同じ処理をする
  //要素の個数が変更されてもいいようにitemElements.lengthとする
  for (let i = 0; i < itemElements.length; i++) {
    let itemElement = itemElements[i];
    let randomDuration = getRandomParameter(23, 8);
    let randomLeft = getRandomParameter(100, 0);
    let randomDelay = getRandomParameter(17, 25) / 10;
    console.log(itemElement);
    itemElement.style.cssText = `animation-duration: ${randomDuration}s; animation-delay: ${randomDelay}s; left: ${randomLeft}%; `;
  }
};
//最大値、最小値を引数にとり、最大値~最小値の中でランダムな数値を出力する関数
let getRandomParameter = (max, min) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};
//関数呼び出し
upTrianges();
