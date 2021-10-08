for (let i = 0; i <= 20; i++) {
  //8から24までの数字がランダムに出てくる。
  let min_animation = 8; //最小値
  let max_animation = 23; //最大値
  let random_animation =
    Math.floor(Math.random() * (max_animation + 1 - min_animation)) +
    min_animation;
  // console.log(random_animation);

  let min_left = 0;
  let max_left = 100;
  let random_left =
    Math.floor(Math.random() * (max_left + 1 - min_left)) + min_left;

  // console.log(random_left);

  let min_delay = 17;
  let max_delay = 25;
  let random_delay =
    Math.floor(Math.random() * (max_delay + 1 - min_delay) + min_delay) / 10;

  // console.log(random_delay);

  const list = document.getElementsByClassName("list")[i];
  list.style.cssText =
    "animation-duration: " +
    random_animation +
    "s; left:" +
    random_left +
    "%; animation-delay:" +
    random_delay +
    "s;";
  // console.log(list);
}
