# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个 Vue 2 个人项目展示网站，用于展示前端、后端和其他类别的项目作品。网站采用可折叠的标签页设计，部署在 GitHub Pages 上。

## 常用命令

```bash
# 开发模式（启动在 http://localhost:8000）
npm run serve

# 生产构建
npm run build

# 代码检查
npm run lint

# 部署到 GitHub Pages
npm run deploy
```

## 技术栈

- **Vue 2.6** - 核心框架
- **Vuetify 2.4** - 主要 UI 组件库
- **Vue Router** - 路由管理
- **Vuex** - 状态管理（当前为空，预留扩展）
- **axios** - HTTP 请求

## 项目架构

```
src/
├── main.js           # 入口文件，注册插件和全局变量
├── App.vue           # 根组件，包含顶部应用栏和主页面
├── router/           # Vue Router 配置
├── store/            # Vuex store（当前为空）
├── plugins/          # 插件配置（Vuetify）
├── pages/Home/       # 主页面组件（标签页+项目卡片）
├── components/       # 全局组件（DarkButton 深色模式切换）
├── common/           # 全局配置和数据
└── styles/           # 全局样式
```

## 关键文件说明

### `src/common/Global.vue`
包含所有全局配置和项目数据：
- `images` - 背景图片等静态资源 URL
- `icons` - 图标 URL
- `tab.data` - 标签页和项目卡片数据（添加新项目时修改此处）

### `src/pages/Home/index.vue`
主页面组件，实现可折叠标签页界面：
- 默认收起状态（70px 高度）
- 点击标签后展开（移动端 80vh，桌面端 90vh）
- 使用 Vuetify 的 `v-click-outside` 指令实现点击外部收起

### `vue.config.js`
- 开发服务器端口：8000
- 静态资源输出目录：`dist/static`
- `publicPath: './'` - 相对路径，适配 GitHub Pages

## 添加新项目

在 `src/common/Global.vue` 的 `tab.data` 数组中添加新项目卡片：

```javascript
{
  title: "项目名称",
  describe: "项目描述",
  img: "预览图片 URL",
  link: "预览链接",
  github: "GitHub 仓库链接"
}
```

## 静态资源

静态资源托管在 jsDelivr CDN（`cdn.jsdelivr.net/gh/LuShan123888/lushan123888.github.io@gh-pages/static/...`）。本地文件位于 `public/static/`。
