# 基于Vite的Vue3/JavaScript完整启动框架模板

## 前言

Vue 3 正式版已经发布有一段时间了，随着 Vite 脚手架注定成为下一代前端工具链，许多用户都想基于 Vite 来构建 Vue 项目，如果想基于 Vite 构建 Vue 3 项目，社区模板完全满足您的需求，如果想构建 Vite 3 + Vue 3 + JavaScript 项目，那社区模板不太能满足您的需求，因为社区模板提供 Vue 3 项目几乎是基于 Vite 2 + TypeScript 构建，对于不熟悉 TypeScript 语言的用户不是很友好，这里直接给大家提供一套规范的 JavaScript + Vite 3 + Vue 3 + Vue Router + Pinia + TDesign + Less + UnoCSS + Axios + Husky + Lint-Staged + EditorConfig + ESLint + Prettier + StyleLint + Commitizen + CommitLint + GitHub Actions的前端工程化项目环境，开箱即用，方便你们的项目启动。

---

## 技术栈

- ⚡️ Vite 3 - 构建工具（就是快！）
- 🖖 Vue 3 - 渐进式 JavaScript 框架
- 🚦 Vue Router - 官方路由管理器
- 📦 Pinia - 值得你喜欢的 Vue Store
- 💻 TDesign - TDesign 适配桌面端的组件库
- 🎨 Less - CSS 预处理器
- 🎨 UnoCSS - 一个极速按需加载的原子化CSS框架 [Github链接](https://github.com/unocss/unocss)
- 🔗 Axios - 一个基于 promise 的网络请求库，可以用于浏览器和 - node.js
- 🧰 Husky + Lint-Staged - Git Hook 工具
- 🛡️ EditorConfig - 代码规范
- 🛡️ ESLint - 代码规范
- 🛡️ Prettier - 代码规范
- 🛡️ StyleLint - 代码规范
- 🔨 Commitizen + CommitLint - 提交规范
- 💡 GitHub Actions - 自动部署

## 安装使用方法

1. 下载项目到本地

```bash
git clone https://github.com/jocstech/fast-vite-vue-starter.git
```

2. 重命名项目文件夹名 | 例如`myProject`

```bash
mv ./fast-vite-vue-starter ./myProject
```

3. 删除本模板的的git信息

```bash
sudo rm -rf ./myProject/.git
```

4. 进入项目安装所有依赖 (取决于你使用的npm包工具)

```bash
cd myProject && pnpm install
```

```bash
cd myProject && yarn install
```

```bash
cd myProject && npm install
```

5. 启动项目开发模式

```bash
pnpm run dev
```

```bash
yarn dev
```

```bash
npm run dev
```

## 本项目使用注意点

这个模板可以帮助您快速使用Vue3 + Vite启动开发工作，本项目使用Vue 3的 `<script setup>` SFCs，请阅读[脚本安装文本](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)学习更多细节。

## 推荐集成环境编辑器设置

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
