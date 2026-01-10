# MyProjects

[简体中文](#简体中文) | [English](#english)

---

## 简体中文

一个基于 Vue 2 的个人项目展示网站，采用可折叠标签页设计，部署在 GitHub Pages 上。

### 功能特性

- 🎨 **现代 UI** - 使用 Vuetify 2.4 构建响应式界面
- 🌓 **深色模式** - 支持一键切换深色/浅色主题
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🏷️ **可折叠标签页** - 点击展开/收起的交互式标签页设计
- 🚀 **静态部署** - 使用 GitHub Pages 托管

### 在线预览

[https://lushan123888.github.io](https://lushan123888.github.io)

## 使用

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发服务器（默认运行在 `http://localhost:8000`）：

```bash
npm run serve
```

### 生产构建

```bash
npm run build
```

构建完成后，`dist` 目录包含所有静态文件。

### 部署到 GitHub Pages

```bash
npm run deploy
```

### 代码检查

```bash
npm run lint
```

## 项目结构

```
MyProjects/
├── public/
│   └── static/         # 静态资源（托管在 jsDelivr CDN）
├── src/
│   ├── main.js         # 入口文件
│   ├── App.vue         # 根组件
│   ├── router/         # Vue Router 配置
│   ├── store/          # Vuex store
│   ├── plugins/        # 插件配置（Vuetify）
│   ├── pages/          # 页面组件
│   │   └── Home/       # 主页面（标签页+项目卡片）
│   ├── components/     # 全局组件
│   │   └── DarkButton  # 深色模式切换按钮
│   ├── common/         # 全局配置和数据
│   │   └── Global.vue  # 项目数据和配置
│   └── styles/         # 全局样式
├── vue.config.js       # Vue CLI 配置
├── package.json
└── README.md
```

## 添加新项目

在 `src/common/Global.vue` 的 `tab.data` 数组中添加项目卡片：

```javascript
{
  title: "项目名称",
  describe: "项目描述",
  img: "预览图片 URL",
  link: "预览链接",
  github: "GitHub 仓库链接"
}
```

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 2.6.11 | 核心框架 |
| Vuetify | 2.4.0 | UI 组件库 |
| Vue Router | 3.2.0 | 路由管理 |
| Vuex | 3.4.0 | 状态管理 |
| axios | 0.21.1 | HTTP 请求 |

## 开发配置

### 端口配置

开发服务器默认运行在 `localhost:8000`，可在 `vue.config.js` 中修改：

```javascript
devServer: {
  port: 8000,
  // ...
}
```

### 静态资源

静态资源通过 jsDelivr CDN 托管：

```
https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/...
```

本地文件位于 `public/static/` 目录。

## 许可证

MIT

---

## English

A Vue 2-based personal project showcase website with collapsible tab design, deployed on GitHub Pages.

### Features

- 🎨 **Modern UI** - Responsive interface built with Vuetify 2.4
- 🌓 **Dark Mode** - One-click toggle between dark and light themes
- 📱 **Responsive Design** - Perfect for desktop and mobile
- 🏷️ **Collapsible Tabs** - Interactive expandable/collapsible tab design
- 🚀 **Static Deployment** - Hosted on GitHub Pages

### Live Preview

[https://lushan123888.github.io](https://lushan123888.github.io)

## Usage

### Install Dependencies

```bash
npm install
```

### Development Mode

Start development server (runs at `http://localhost:8000` by default):

```bash
npm run serve
```

### Production Build

```bash
npm run build
```

The `dist` directory will contain all static files after build.

### Deploy to GitHub Pages

```bash
npm run deploy
```

### Lint Code

```bash
npm run lint
```

## Project Structure

```
MyProjects/
├── public/
│   └── static/         # Static assets (hosted on jsDelivr CDN)
├── src/
│   ├── main.js         # Entry point
│   ├── App.vue         # Root component
│   ├── router/         # Vue Router configuration
│   ├── store/          # Vuex store
│   ├── plugins/        # Plugin configuration (Vuetify)
│   ├── pages/          # Page components
│   │   └── Home/       # Home page (tabs + project cards)
│   ├── components/     # Global components
│   │   └── DarkButton  # Dark mode toggle button
│   ├── common/         # Global config and data
│   │   └── Global.vue  # Project data and config
│   └── styles/         # Global styles
├── vue.config.js       # Vue CLI configuration
├── package.json
└── README.md
```

## Adding New Projects

Add project cards in the `tab.data` array in `src/common/Global.vue`:

```javascript
{
  title: "Project Name",
  describe: "Project description",
  img: "Preview image URL",
  link: "Preview link",
  github: "GitHub repository link"
}
```

## Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| Vue | 2.6.11 | Core framework |
| Vuetify | 2.4.0 | UI component library |
| Vue Router | 3.2.0 | Routing |
| Vuex | 3.4.0 | State management |
| axios | 0.21.1 | HTTP client |

## Development Configuration

### Port Configuration

Development server runs on `localhost:8000` by default, can be modified in `vue.config.js`:

```javascript
devServer: {
  port: 8000,
  // ...
}
```

### Static Assets

Static assets are hosted via jsDelivr CDN:

```
https://cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/...
```

Local files are in the `public/static/` directory.

## License

MIT
