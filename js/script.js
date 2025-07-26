// 图片路径数组
const screenshots = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
let currentIndex = 0;
const imgElement = document.querySelector('.screenshot-img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const container = document.querySelector('.screenshot-container');
  
let autoPlayTimer;
const autoPlayInterval = 3000; // 自动切换间隔（5秒）
// 切换图片函数
function updateScreenshot() {
  imgElement.style.opacity = 0; // 隐藏当前图片
  setTimeout(() => {
    loadImage(currentIndex); // 加载当前索引的图片（懒加载核心）
    imgElement.style.opacity = 1; // 显示新图片（配合CSS过渡动画）
  }, 300);
}
// 5. 自动播放功能
function startAutoPlay() {
  // 清除现有计时器，避免重复创建
  clearInterval(autoPlayTimer);
  
  // 创建新计时器，自动切换到下一张
  autoPlayTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % screenshots.length;
    updateScreenshot();
  }, autoPlayInterval);
}
// 下一张按钮
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % screenshots.length;
  updateScreenshot();
});

// 上一张按钮
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
  updateScreenshot();
});


//优化体验 - 鼠标悬停时暂停自动播放
container.addEventListener('mouseenter', () => {
  clearInterval(autoPlayTimer);
});

// 鼠标离开时恢复自动播放
container.addEventListener('mouseleave', () => {
  startAutoPlay();
});



 // 🌟 懒加载核心：加载指定索引的图片
 function loadImage(index) {
  // 如果图片已加载，直接返回
  if (imgElement.src.includes(screenshots[index])) return;
  
  // 否则从data-src加载
  imgElement.src = screenshots[index];
  //imgElement.alt = altTexts[index];
}
// 🌟 视口监听：当轮播区进入视口时，才加载第一张图片
const lazyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(currentIndex); // 加载初始图片
      lazyObserver.unobserve(container); // 只监听一次
    }
  });
}, { threshold: 0.1 }); // 当轮播区10%进入视口时触发

  // 开始监听轮播容器
  lazyObserver.observe(container);


// 初始化轮播
startAutoPlay();

// 1. 检查本地存储是否有数据，若无则初始化模拟数据
let scores = JSON.parse(localStorage.getItem('rankList'));
if (!scores) {
  scores = [
    { name: '闪电侠', score: 980 },
    { name: '风行者', score: 850 },
    { name: '跳跃王', score: 720 },
    { name: '初学者', score: 630 },
    { name: '新手', score: 510 }
  ];
  localStorage.setItem('rankList', JSON.stringify(scores)); // 存入本地
}

// 2. 排序（确保分数从高到低）
scores.sort((a, b) => b.score - a.score);

// 3. 动态渲染到页面
const rankList = document.querySelector('.rank-items');
scores.forEach((item, index) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${index + 1}</span>
    <span>${item.name}</span>
    <span>${item.score}</span>
  `;
  rankList.appendChild(li);
});
// 滚动时导航栏背景变实
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-solid'); // 新增类名，在CSS中定义实色背景
    } else {
      navbar.classList.remove('navbar-solid');
    }
  });
  // CSS中补充：
  // .navbar-solid { background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
  // 点击导航项平滑滚动到对应区域
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // 阻止默认跳转
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 80, // 减去导航栏高度，避免被遮挡
        behavior: 'smooth' // 平滑滚动
      });
    });
  });