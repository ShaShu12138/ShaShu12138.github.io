
//声明骰子
let dice1El = document.querySelector(".dice1");
let dice2El = document.querySelector(".dice2");
let dice3El = document.querySelector(".dice3");
let dice4El = document.querySelector(".dice4");
let dice5El = document.querySelector(".dice5");
//声明保留骰子按钮和保留状态
let btnHold1 = document.querySelector(".btnHold1");
let btnHold2 = document.querySelector(".btnHold2");
let btnHold3 = document.querySelector(".btnHold3");
let btnHold4 = document.querySelector(".btnHold4");
let btnHold5 = document.querySelector(".btnHold5");
let Hold1 = false;
let Hold2 = false;
let Hold3 = false;
let Hold4 = false;
let Hold5 = false;
//旋转骰子按钮和旋转状态
let btnRoll = document.querySelector(".btnRoll");
let Rolling = false;
//旋转次数和显示
let roll = document.querySelector(".rollTimes");
let rollTimes = 3;
//分数系统1-6
let showScore1 = document.querySelector(".score1");
let showScore2 = document.querySelector(".score2");
let showScore3 = document.querySelector(".score3");
let showScore4 = document.querySelector(".score4");
let showScore5 = document.querySelector(".score5");
let showScore6 = document.querySelector(".score6");
let showScoreSum = document.querySelector(".scoreSum");
let showScoreBonus = document.querySelector(".scoreBonus");
let showScore3Kind = document.querySelector(".score3Kind");
let showScore4Kind = document.querySelector(".score4Kind");
let showScoreFullHouse = document.querySelector(".scoreFullHouse");
let showScoreSStraight = document.querySelector(".scoreSStraight");
let showScoreLStraight = document.querySelector(".scoreLStraight");
let showScoreChance = document.querySelector(".scoreChance");
let showScoreYathzee = document.querySelector(".scoreYathzee");
let showScoreTotal = document.querySelector(".scoreTotal");
let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let dice5 = 0;
let dice6 = 0;
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
let score6 = 0;
//分数锁定
let score1Lock = false;
let score2Lock = false;
let score3Lock = false;
let score4Lock = false;
let score5Lock = false;
let score6Lock = false;
let scoreSumLock = false;
let score3KindLock = false;
let score4KindLock = false;
let scoreFullHouseLock = false;
let scoreSStraightLock = false;
let scoreLStraightLock = false;
let scoreChanceLock = false;
let scoreYathzeeLock = false;
let scoreTotalLock = false;
//新游戏按钮
let newGame = document.querySelector(".btnNew");

//保留骰子
btnHold1.addEventListener("click", function () {
  if (Hold1) {
    btnHold1.style.backgroundColor = "rgb(255, 255, 255)";
    Hold1 = false;
  } else {
    btnHold1.style.backgroundColor = "rgb(65, 105, 225)";
    Hold1 = true;
  }
});
btnHold2.addEventListener("click", function () {
  if (Hold2) {
    btnHold2.style.backgroundColor = "rgb(255, 255, 255)";
    Hold2 = false;
  } else {
    btnHold2.style.backgroundColor = "rgb(65, 105, 225)";
    Hold2 = true;
  }
});
btnHold3.addEventListener("click", function () {
  if (Hold3) {
    btnHold3.style.backgroundColor = "rgb(255, 255, 255)";
    Hold3 = false;
  } else {
    btnHold3.style.backgroundColor = "rgb(65, 105, 225)";
    Hold3 = true;
  }
});
btnHold4.addEventListener("click", function () {
  if (Hold4) {
    btnHold4.style.backgroundColor = "rgb(255, 255, 255)";
    Hold4 = false;
  } else {
    btnHold4.style.backgroundColor = "rgb(65, 105, 225)";
    Hold4 = true;
  }
});
btnHold5.addEventListener("click", function () {
  if (Hold5) {
    btnHold5.style.backgroundColor = "rgb(255, 255, 255)";
    Hold5 = false;
  } else {
    btnHold5.style.backgroundColor = "rgb(65, 105, 225)";
    Hold5 = true;
  }
});

//旋转骰子
btnRoll.addEventListener("click", function () {
  if (Rolling) {
    if (Hold1) {
    } else {
      dice1 = Math.trunc(Math.random() * 6) + 1;
      dice1El.src = `./img/dice${dice1}.png`;
      btnHold1.disabled = false;
    }
    if (Hold2) {
    } else {
      dice2 = Math.trunc(Math.random() * 6) + 1;
      dice2El.src = `./img/dice${dice2}.png`;
      btnHold2.disabled = false;
    }
    if (Hold3) {
    } else {
      dice3 = Math.trunc(Math.random() * 6) + 1;
      dice3El.src = `./img/dice${dice3}.png`;
      btnHold3.disabled = false;
    }
    if (Hold4) {
    } else {
      dice4 = Math.trunc(Math.random() * 6) + 1;
      dice4El.src = `./img/dice${dice4}.png`;
      btnHold4.disabled = false;
    }
    if (Hold5) {
    } else {
      dice5 = Math.trunc(Math.random() * 6) + 1;
      dice5El.src = `./img/dice${dice5}.png`;
      btnHold5.disabled = false;
    }
    btnHold1.disabled = false;
    btnHold2.disabled = false;
    btnHold3.disabled = false;
    btnHold4.disabled = false;
    btnHold5.disabled = false;
    btnRoll.textContent = `Roll!`;
    Rolling = false;
    if (rollTimes === 0) {
      btnRoll.disabled = true;
    }
    //分数系统
    score1 = 0;
    score2 = 0;
    score3 = 0;
    score4 = 0;
    score5 = 0;
    score6 = 0;
    if (dice1 === 1) {
      score1++;
    }
    if (dice1 === 2) {
      score2++;
    }
    if (dice1 === 3) {
      score3++;
    }
    if (dice1 === 4) {
      score4++;
    }
    if (dice1 === 5) {
      score5++;
    }
    if (dice1 === 6) {
      score6++;
    }
    if (dice2 === 1) {
      score1++;
    }
    if (dice2 === 2) {
      score2++;
    }
    if (dice2 === 3) {
      score3++;
    }
    if (dice2 === 4) {
      score4++;
    }
    if (dice2 === 5) {
      score5++;
    }
    if (dice2 === 6) {
      score6++;
    }
    if (dice3 === 1) {
      score1++;
    }
    if (dice3 === 2) {
      score2++;
    }
    if (dice3 === 3) {
      score3++;
    }
    if (dice3 === 4) {
      score4++;
    }
    if (dice3 === 5) {
      score5++;
    }
    if (dice3 === 6) {
      score6++;
    }
    if (dice4 === 1) {
      score1++;
    }
    if (dice4 === 2) {
      score2++;
    }
    if (dice4 === 3) {
      score3++;
    }
    if (dice4 === 4) {
      score4++;
    }
    if (dice4 === 5) {
      score5++;
    }
    if (dice4 === 6) {
      score6++;
    }
    if (dice5 === 1) {
      score1++;
    }
    if (dice5 === 2) {
      score2++;
    }
    if (dice5 === 3) {
      score3++;
    }
    if (dice5 === 4) {
      score4++;
    }
    if (dice5 === 5) {
      score5++;
    }
    if (dice5 === 6) {
      score6++;
    }
    if (score1Lock === false) {
      showScore1.textContent = score1 * 1;
    }
    if (score2Lock === false) {
      showScore2.textContent = score2 * 2;
    }
    if (score3Lock === false) {
      showScore3.textContent = score3 * 3;
    }
    if (score4Lock === false) {
      showScore4.textContent = score4 * 4;
    }
    if (score5Lock === false) {
      showScore5.textContent = score5 * 5;
    }
    if (score6Lock === false) {
      showScore6.textContent = score6 * 6;
    }

    if (score3KindLock === false) {
      showScore3Kind.textContent = 0;
      if (
        score1 == 3 ||
        score2 == 3 ||
        score3 == 3 ||
        score4 == 3 ||
        score5 == 3 ||
        score6 == 3
      ) {
        showScore3Kind.textContent =
          score1 * 1 +
          score2 * 2 +
          score3 * 3 +
          score4 * 4 +
          score5 * 5 +
          score6 * 6;
      }
    }
    if (score4KindLock === false) {
      showScore4Kind.textContent = 0;
      if (
        score1 == 4 ||
        score2 == 4 ||
        score3 == 4 ||
        score4 == 4 ||
        score5 == 4 ||
        score6 == 4
      ) {
        showScore4Kind.textContent =
          score1 * 1 +
          score2 * 2 +
          score3 * 3 +
          score4 * 4 +
          score5 * 5 +
          score6 * 6;
      }
    }
    if (scoreFullHouseLock === false) {
      showScoreFullHouse.textContent = 0;
      if (
        (score1 == 3 && score2 == 2) ||
        (score1 == 3 && score3 == 2) ||
        (score1 == 3 && score4 == 2) ||
        (score1 == 3 && score5 == 2) ||
        (score1 == 3 && score6 == 2) ||
        (score2 == 3 && score1 == 2) ||
        (score2 == 3 && score3 == 2) ||
        (score2 == 3 && score4 == 2) ||
        (score2 == 3 && score5 == 2) ||
        (score2 == 3 && score6 == 2) ||
        (score3 == 3 && score1 == 2) ||
        (score3 == 3 && score2 == 2) ||
        (score3 == 3 && score4 == 2) ||
        (score3 == 3 && score5 == 2) ||
        (score3 == 3 && score6 == 2) ||
        (score4 == 3 && score1 == 2) ||
        (score4 == 3 && score2 == 2) ||
        (score4 == 3 && score3 == 2) ||
        (score4 == 3 && score5 == 2) ||
        (score4 == 3 && score6 == 2) ||
        (score5 == 3 && score1 == 2) ||
        (score5 == 3 && score2 == 2) ||
        (score5 == 3 && score3 == 2) ||
        (score5 == 3 && score4 == 2) ||
        (score5 == 3 && score6 == 2) ||
        (score6 == 3 && score1 == 2) ||
        (score6 == 3 && score2 == 2) ||
        (score6 == 3 && score3 == 2) ||
        (score6 == 3 && score4 == 2) ||
        (score6 == 3 && score5 == 2)
      ) {
        showScoreFullHouse.textContent = 25;
      }
    }
    if (scoreSStraightLock === false) {
      showScoreSStraight.textContent = 0;
      if (
        (score1 && score2 && score3 && score4) ||
        (score2 && score3 && score4 && score5) ||
        (score3 && score4 && score5 && score6)
      ) {
        showScoreSStraight.textContent = 30;
      }
    }
    if (scoreLStraightLock === false) {
      showScoreLStraight.textContent = 0;
      if (
        (score1 && score2 && score3 && score4 && score5) ||
        (score2 && score3 && score4 && score5 && score6)
      ) {
        showScoreLStraight.textContent = 40;
      }
    }
    if (scoreChanceLock === false) {
      showScoreChance.textContent =
        score1 * 1 +
        score2 * 2 +
        score3 * 3 +
        score4 * 4 +
        score5 * 5 +
        score6 * 6;
    }
    if (scoreYathzeeLock === false) {
      showScoreYathzee.textContent = 0;
      if (
        score1 == 5 ||
        score2 == 5 ||
        score3 == 5 ||
        score4 == 5 ||
        score5 == 5
      ) {
        showScoreYathzee.textContent = 50;
      }
    }
  } else {
    if (Hold1) {
    } else {
      dice1El.src = `./img/roll.gif`;
    }
    if (Hold2) {
    } else {
      dice2El.src = `./img/roll.gif`;
    }
    if (Hold3) {
    } else {
      dice3El.src = `./img/roll.gif`;
    }
    if (Hold4) {
    } else {
      dice4El.src = `./img/roll.gif`;
    }
    if (Hold5) {
    } else {
      dice5El.src = `./img/roll.gif`;
    }
    btnHold1.disabled = true;
    btnHold2.disabled = true;
    btnHold3.disabled = true;
    btnHold4.disabled = true;
    btnHold5.disabled = true;
    btnRoll.textContent = `Stop!`;
    Rolling = true;
    rollTimes--;
    roll.textContent = `${rollTimes} Roll left`;
  }
});

//点击确定分数
showScore1.addEventListener("click", function () {
  score1Lock = true;
  showScore1.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScore2.addEventListener("click", function () {
  score2Lock = true;
  showScore2.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScore3.addEventListener("click", function () {
  score3Lock = true;
  showScore3.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScore4.addEventListener("click", function () {
  score4Lock = true;
  showScore4.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScore5.addEventListener("click", function () {
  score5Lock = true;
  showScore5.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScore6.addEventListener("click", function () {
  score6Lock = true;
  showScore6.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScore3Kind.addEventListener("click", function () {
  score3KindLock = true;
  showScore3Kind.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScore4Kind.addEventListener("click", function () {
  score4KindLock = true;
  showScore4Kind.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScoreFullHouse.addEventListener("click", function () {
  scoreFullHouseLock = true;
  showScoreFullHouse.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScoreSStraight.addEventListener("click", function () {
  scoreSStraightLock = true;
  showScoreSStraight.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScoreLStraight.addEventListener("click", function () {
  scoreLStraightLock = true;
  showScoreLStraight.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScoreChance.addEventListener("click", function () {
  scoreChanceLock = true;
  showScoreChance.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});
showScoreYathzee.addEventListener("click", function () {
  scoreYathzeeLock = true;
  showScoreYathzee.style.backgroundColor = "rgba(0, 0, 0,0.5)";
  reset();
});

function reset() {
  rollTimes = 3;
  roll.textContent = `${rollTimes} Roll left`;
  btnRoll.disabled = false;
  dice1 = 1;
  dice2 = 2;
  dice3 = 3;
  dice4 = 4;
  dice5 = 5;
  dice1El.src = `./img/dice${dice1}.png`;
  dice2El.src = `./img/dice${dice2}.png`;
  dice3El.src = `./img/dice${dice3}.png`;
  dice4El.src = `./img/dice${dice4}.png`;
  dice5El.src = `./img/dice${dice5}.png`;
  btnHold1.style.backgroundColor = "rgb(255, 255, 255)";
  Hold1 = false;
  btnHold2.style.backgroundColor = "rgb(255, 255, 255)";
  Hold2 = false;
  btnHold3.style.backgroundColor = "rgb(255, 255, 255)";
  Hold3 = false;
  btnHold4.style.backgroundColor = "rgb(255, 255, 255)";
  Hold4 = false;
  btnHold5.style.backgroundColor = "rgb(255, 255, 255)";
  Hold5 = false;
  if (score1Lock === false) {
    showScore1.textContent = 0;
  }
  if (score2Lock === false) {
    showScore2.textContent = 0;
  }
  if (score3Lock === false) {
    showScore3.textContent = 0;
  }
  if (score4Lock === false) {
    showScore4.textContent = 0;
  }
  if (score5Lock === false) {
    showScore5.textContent = 0;
  }
  if (score6Lock === false) {
    showScore6.textContent = 0;
  }
  showScoreSum.textContent =
    Number(showScore1.textContent) +
    Number(showScore2.textContent) +
    Number(showScore3.textContent) +
    Number(showScore4.textContent) +
    Number(showScore5.textContent) +
    Number(showScore6.textContent);
  if (showScoreSum.textContent >= 63) {
    showScoreBonus.textContent = 35;
  }
  if (score3KindLock === false) {
    showScore3Kind.textContent = 0;
  }
  if (score4KindLock === false) {
    showScore4Kind.textContent = 0;
  }
  if (scoreFullHouseLock === false) {
    showScoreFullHouse.textContent = 0;
  }
  if (scoreSStraightLock === false) {
    showScoreSStraight.textContent = 0;
  }
  if (scoreLStraightLock === false) {
    showScoreLStraight.textContent = 0;
  }
  if (scoreChanceLock === false) {
    showScoreChance.textContent = 0;
  }
  if (scoreYathzeeLock === false) {
    showScoreYathzee.textContent = 0;
  }
  showScoreTotal.textContent =
    Number(showScore1.textContent) +
    Number(showScore2.textContent) +
    Number(showScore3.textContent) +
    Number(showScore4.textContent) +
    Number(showScore5.textContent) +
    Number(showScore6.textContent) +
    Number(showScoreBonus.textContent) +
    Number(showScore3Kind.textContent) +
    Number(showScore4Kind.textContent) +
    Number(showScoreFullHouse.textContent) +
    Number(showScoreSStraight.textContent) +
    Number(showScoreLStraight.textContent) +
    Number(showScoreChance.textContent) +
    Number(showScoreYathzee.textContent);

  if (
    score1Lock &&
    score2Lock &&
    score3Lock &&
    score4Lock &&
    score5Lock &&
    score6Lock &&
    score3KindLock &&
    score4KindLock &&
    scoreFullHouseLock &&
    scoreSStraightLock &&
    scoreLStraightLock &&
    scoreChanceLock &&
    scoreYathzeeLock
  ) {
    showScoreTotal.style.backgroundColor = "rgb(255, 255, 0)";
    newGame.style.display = "block";
  }
  if (showScoreTotal.textContent >= 200  ) {
    Swal.fire({
      icon: 'info',
      title: '新的传闻！',
      text: '“听说宝藏掩藏在白纱之下，不知道哪些傻子传成了白沙！”\n“城堡...那就是国王的家吧？”\n“王座...也就是国王常坐的地方？”\n“更详细的讯息...看看steam好友吧”',
    })
  }
}

newGame.addEventListener("click", function () {
  rollTimes = 3;
  roll.textContent = `${rollTimes} Roll left`;
  btnRoll.disabled = false;
  dice1 = 1;
  dice2 = 2;
  dice3 = 3;
  dice4 = 4;
  dice5 = 5;
  dice1El.src = `./img/dice${dice1}.png`;
  dice2El.src = `./img/dice${dice2}.png`;
  dice3El.src = `./img/dice${dice3}.png`;
  dice4El.src = `./img/dice${dice4}.png`;
  dice5El.src = `./img/dice${dice5}.png`;
  btnHold1.style.backgroundColor = "rgb(255, 255, 255)";
  Hold1 = false;
  btnHold2.style.backgroundColor = "rgb(255, 255, 255)";
  Hold2 = false;
  btnHold3.style.backgroundColor = "rgb(255, 255, 255)";
  Hold3 = false;
  btnHold4.style.backgroundColor = "rgb(255, 255, 255)";
  Hold4 = false;
  btnHold5.style.backgroundColor = "rgb(255, 255, 255)";
  Hold5 = false;
  showScore1.textContent = " ";
  showScore2.textContent = " ";
  showScore3.textContent = " ";
  showScore4.textContent = " ";
  showScore5.textContent = " ";
  showScore6.textContent = " ";
  showScoreSum.textContent = " ";
  showScoreBonus.textContent = " ";
  showScore3Kind.textContent = " ";
  showScore4Kind.textContent = " ";
  showScoreFullHouse.textContent = " ";
  showScoreSStraight.textContent = " ";
  showScoreLStraight.textContent = " ";
  showScoreChance.textContent = " ";
  showScoreYathzee.textContent = " ";
  showScoreTotal.textContent = " ";

  showScore1.style.removeProperty("background");
  showScore2.style.removeProperty("background");
  showScore3.style.removeProperty("background");
  showScore4.style.removeProperty("background");
  showScore5.style.removeProperty("background");
  showScore6.style.removeProperty("background");
  showScoreSum.style.removeProperty("background");
  showScoreBonus.style.removeProperty("background");
  showScore3Kind.style.removeProperty("background");
  showScore4Kind.style.removeProperty("background");
  showScoreFullHouse.style.removeProperty("background");
  showScoreSStraight.style.removeProperty("background");
  showScoreLStraight.style.removeProperty("background");
  showScoreChance.style.removeProperty("background");
  showScoreYathzee.style.removeProperty("background");
  showScoreTotal.style.removeProperty("background");

  score1Lock = false;
  score2Lock = false;
  score3Lock = false;
  score4Lock = false;
  score5Lock = false;
  score6Lock = false;
  scoreSumLock = false;
  score3KindLock = false;
  score4KindLock = false;
  scoreFullHouseLock = false;
  scoreSStraightLock = false;
  scoreLStraightLock = false;
  scoreChanceLock = false;
  scoreYathzeeLock = false;
  scoreTotalLock = false;

  newGame.style.display = "none";
});
