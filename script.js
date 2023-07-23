'use strict';

// console.log((document.querySelector('.message').textContent = 'you win'));

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.again').addEventListener('click', function y() {
//   document.querySelector('.number').textContent = secretNumber;
// });

const omesage = document.querySelector('.message');
const onumber = document.querySelector('.check');

onumber.addEventListener('click', dovalidation);

function dovalidation() {
  const guess = Number(document.querySelector('.guess').value);
  // document.querySelector('.message').textContent = 'you win';

  if (!guess) {
    omesage.textContent = 'not a number';
  } else if (guess === secretNumber) {
    omesage.textContent = 'you right @@';
    document.querySelector('body').style.backgroundColor = '#60b437';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game 💀';
      document.querySelector('.score').textContent = 0;
    }
  }
}

// document.querySelector('.check').addEventListener('click', dovalidation);

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
});

const areaA = document.querySelector('.areaA');
const areaB = document.querySelector('.areaB');

// const ela = areaA.querySelector('#btnA');
// const ela2 = areaB.querySelector('#btnA');

// ela.addEventListener('click', function () {
//   msg('area a1');
// });

// ela2.addEventListener('click', function () {
//   msg('area a2');
// });

// function msg(p) {
//   alert(p);
// }

// const objx = {
//   idarea: null,
//   elarea: null,
//   elbtna: null,
//   elbtnb: null,
//   loadElement: function () {
//     this.elarea = document.querySelector(this.idarea);
//     this.elbtna = this.elarea.querySelector('#btnA');
//     this.elbtnb = this.elarea.querySelector('#btnB');
//   },
//   loadEvent: function (target) {
//     function getket(id) {
//       return target.idarea + id;
//     }
//     this.elbtna.addEventListener('click', function () {
//       target.msg(getket(this.id));
//     });
//     this.elbtnb.addEventListener('click', function () {
//       target.msg(getket(this.id));
//     });
//   },
//   msg: function (p) {
//     alert(p);
//   },
// };

// const objb = Object.assign([], objx);

// objx.idarea = '.areaA';
// objx.loadElement();
// objx.loadEvent(objx);

// objb.idarea = '.areaB';
// objb.loadElement();
// objb.loadEvent(objb);
