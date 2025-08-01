像素跑酷大冒险官网
一个基于 HTML、CSS 和 JavaScript 开发的像素风格跑酷游戏官网，包含完整的首页→加载页→游戏页跳转流程，支持浏览器直接体验页面交互。
项目预览
🎬 项目演示视频（B 站链接）：【前端项目作品展示：像素风格跑酷游戏官网】 https://www.bilibili.com/video/BV1EzhJzjEPZ/?share_source=copy_web&vd_source=ca40efa6309e3644ad9bde4f3d0f83a9
🌐 在线体验地址（GitHub Pages 部署）：https://mistdiary.github.io/runner-game-website/
项目介绍
这是一个完整的跑酷游戏官网前端实现，包含以下核心功能：
视觉统一的像素风格设计，契合跑酷游戏主题
流畅的页面跳转逻辑：首页 → 加载页 → 游戏页
响应式布局，适配 PC 和移动设备
游戏核心交互：键盘上下键控制角色跳跃 / 下蹲
加载页动态进度展示，提升用户等待体验
页面结构
1.首页（index.html）
游戏标题与宣传语
醒目的 "开始游戏" 按钮
像素风格背景与导航
2.加载页（loading.html）
动态进度条显示加载状态
随机掉落的像素障碍物动画
加载完成自动跳转游戏页
3.游戏页（game.html）
可操作的跑酷游戏区域
键盘控制提示（↑跳跃 /↓下蹲）
"返回首页" 按钮实现双向跳转
技术栈
基础技术：HTML5 + CSS3 + JavaScript
样式设计：自定义像素风格 + 动画效果
部署方式：GitHub Pages
项目结构
plaintext
runner-game-website/
├─ index.html        # 官网首页
├─ loading.html      # 游戏加载页
├─ game.html         # 游戏体验页
├─ css/
│  └─ style.css      # 全局样式
└─ img/
   ├─ game-bg.jpg    # 游戏背景图
   └─ sprite.png     # 像素角色/障碍物素材
本地运行
克隆仓库到本地
bash
git clone https://github.com/你的用户名/runner-game-website.git

直接打开 index.html 文件（推荐使用 Chrome 或 Edge 浏览器）
功能亮点
像素风格统一：从按钮到背景，保持一致的复古像素视觉语言
流畅过渡动画：页面跳转和加载过程有自然的动画效果
轻量无依赖：纯原生前端技术实现，无需额外安装依赖
完整交互闭环：首页→加载→游戏→返回的全流程体验
优化方向
增加游戏分数系统和排行榜
扩展更多游戏场景和角色皮肤
加入音效和背景音乐
优化移动端触摸操作体验
许可证
本项目采用 MIT 许可证，详情参见 LICENSE 文件。
欢迎提交 issues 和 pull requests 改进这个项目！
