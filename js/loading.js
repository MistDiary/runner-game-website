
// 创建随机障碍物装饰
function createObstacles() {
  const count = 8;
  for (let i = 0; i < count; i++) {
    const obstacle = document.createElement('div');
    obstacle.className = 'pixel-obstacle';
    obstacle.style.left = `${Math.random() * 100}vw`;
    obstacle.style.animationDelay = `${Math.random() * 5}s`;
    obstacle.style.width = `${20 + Math.random() * 40}px`;
    obstacle.style.height = obstacle.style.width;
    document.querySelector('.loading-wrapper').appendChild(obstacle);
  }
}

// 模拟加载进度
let progress = 0;
const progressFill = document.getElementById('progressFill');
const percentText = document.getElementById('percent');
const totalTime = 3000; // 总加载时间（3秒）
const interval = 50; // 进度更新间隔

// 计算每次增长的进度
const step = 100 / (totalTime / interval);

const loadingTimer = setInterval(() => {
  progress += step;
  if (progress >= 100) {
    progress = 100;
    clearInterval(loadingTimer);
    // 加载完成后跳转到游戏页
    setTimeout(() => {
      window.location.href = 'game.html';
    }, 500);
  }
  progressFill.style.width = `${progress}%`;
  percentText.textContent = `${Math.floor(progress)}%`;
}, interval);

// 初始化装饰元素
createObstacles();
