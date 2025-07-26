
    // 返回首页功能
    document.getElementById('backBtn').addEventListener('click', () => {
      // 添加强制跳转保险
      window.location.href = 'index.html';
    });

    // 动态生成更多管道（增强游戏氛围）
    function addMorePipes() {
      const gameArea = document.querySelector('.game-area');
      for (let i = 0; i < 2; i++) {
        const delay = 3 + Math.random() * 5; // 随机延迟
        const topPipe = document.createElement('div');
        topPipe.className = 'pipe top';
        topPipe.style.animationDelay = `${delay}s`;
        gameArea.appendChild(topPipe);

        const bottomPipe = document.createElement('div');
        bottomPipe.className = 'pipe bottom';
        bottomPipe.style.animationDelay = `${delay + 1.5}s`;
        gameArea.appendChild(bottomPipe);
      }
    }

    // 页面加载后添加管道
    window.addEventListener('load', addMorePipes);
