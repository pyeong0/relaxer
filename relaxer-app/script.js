const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = '숨을 들이마쉬세요!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = '정지';

    setTimeout(() => {
      text.innerText = '숨을 내쉬세요!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

var timeLeft = 10 * 60;
var timerInterval;
var isPaused = true;
var pauseButton = document.getElementById('pauseButton');  // Get the pause button element

document.getElementById('startButton').addEventListener('click', function() {
    clearInterval(timerInterval);
    timeLeft = 10 * 60;
    isPaused = false;
    pauseButton.innerText = "시간정지";  // Reset the pause button text
    startTimer();
});

pauseButton.addEventListener('click', function() {
    isPaused = !isPaused;
    if (isPaused) {
        clearInterval(timerInterval);
        pauseButton.innerText = "이어하기";  // Change button text to 'Resume'
    } else {
        pauseButton.innerText = "시간정지";  // Change button text to 'Pause'
        startTimer();
    }
});

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        if (!isPaused && timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
        }
    }, 1000);
}

function updateDisplay() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    var displayText = '남은시간: ' + minutes + ' 분 ' + seconds + ' 초';
    document.getElementById('timerDisplay').innerText = displayText;
}


