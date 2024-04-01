let ninja = 0;
let ninja_sword = 1;

function ninja_click() {
  ninja = ninja + ninja_sword;
  document.getElementById("counter").innerHTML = ninja;
}

function double() {
  if (ninja >= 10) {
    ninja_sword = ninja_sword + 1;
    ninja = ninja - 10;

    document.getElementById("double_counter").innerText = ninja_sword;
    document.getElementById("counter").innerHTML = ninja;
  } else {
    alert("Not Enough Ninja Money! 🤖");
  }
}

let ninja_star = 0;
let ninja_upgrade = 20;

function btn() {
  if (ninja >= 20) {
    ninja_star++;
    ninja = ninja - ninja_upgrade;

    ninja_upgrade = Math.floor(ninja_upgrade * 1.2);

    document.getElementById("counter_two").innerHTML = ninja_star;
    document.getElementById("counter").innerHTML = ninja;
    document.getElementById("star_upgrade").innerHTML = ninja_upgrade;
    ninjaPerSecond();
  } else {
    alert("Not Enough Ninja Money! 🤖");
  }
}

let ninja_warrior = 0;
let ninja_upgrade_cost = 50;

function btn_two(x) {
  if (ninja >= 50) {
    ninja_warrior++;
    ninja = ninja - ninja_upgrade_cost;

    ninja_upgrade_cost = Math.floor(ninja_upgrade_cost * 1.5);

    document.getElementById("counter_three").innerHTML = ninja_warrior;
    document.getElementById("counter").innerHTML = ninja;
    document.getElementById("warrior_upgrade").innerHTML = ninja_upgrade_cost;
    ninjaPerSecond();
  } else {
    alert("Not Enough Ninja Money! 🤖");
  }
}

function ninjaPerSecond() {
  nps = ninja_star * 1 + ninja_warrior * 5;
  document.getElementById("nps").innerHTML = nps;
}

function achievement() {
  if (ninja >= 100) {
    document.getElementById("unlock").style.display = "block";
  }
}

setInterval(achievement, 100);

setInterval(function () {
  ninja = ninja + ninja_star * 1 + ninja_warrior * 5;
  document.getElementById("counter").innerHTML = ninja;
  ninjaPerSecond();
}, 1000);
