# a-wgp


a web gui program

这是一个学习前端开发的练习项目，a-wgp 全称是 “a web gui program”，web gui比较准确的概述前端应用程序的本质特征——基础 Web 技术的界面交互程序。

## 介绍

a-wgp 不是一个固定需求目标的程序，只是为了方便学习前端开发技术，具有展示性质的项目。本项目对于web前端初入门者，或者对使用了前端框架想深入了解框架背后原理的开发者，有一定的参考意义。

## 目录

- [介绍](#介绍)
- [背景](#背景)
- [演进版本及技术知识](#演进版本及技术知识)
- [安装](#安装)
- [使用](#使用)
- [License](#license)

## 背景

前端开发学习不容易，看开源项目源码是学习的一种方法，很多人应该听到过并且读过 [TodoMVC](https://todomvc.com/)这个项目的源码。[TodoMVC](https://todomvc.com/) 是很优秀的的演示项目（包括它的想法和代码），但是它只有代码，没有教程，这对于初学者来说，读懂代码并从中掌握前端开发技术，还是有一定的难度。


## 演进版本及技术知识
本项目作为一个自学项目，最大创想是，从最简单的 Web 前端项目形式入手（例如只有一个静态页面的网站程序），一步一步增加它的复杂度，从中掌握 Web 前端项目开发技术方方面面的实质。

截至目前为止，有了四个演进版本：

* 静态页面
* 简单的多页交互
* 简单的单页应用
* todoSPA(此版本的代码没有实现，实现请参考TodoMVC的 [原始JS版](https://todomvc.com/examples/vanillajs)，和[ES6升级版](https://todomvc.com/examples/vanilla-es6)。

这个演示项目的开发过程用系列文章详细记录了下来——《[从零开始为Web项目定制构建系统](http://nakeman.cn/tag/a-wgp)》。虽然，标题和初始目标是研究 Web项的构建系统的原理，在整个项目完成下来，发现它“麻雀虽小，五脏具全”，一个__完整的 Web 前端项目所需要专业内容__都有基本涉及，包括 功能需求设计，包括HTML模板引擎技术，包括Git版本管理。

专业内容（知识点）概述如下：

+ a-wgp 项目
	- git 版本管理
	- 前端编程
		- JS （js模块，闭包制作 对象系统，异步编程fetch）
		- BOM DOM
		- HTML 结构开发（模块引擎）
	- 构建系统
		- Node.js 
		- NPM Script
	- 程序设计（需求／功能设计，结构设计，和代码设计）
		- 功能设计 (程序功能三级表)
		- 结构设计（面向对象设计）
		- 代码设计（MVC体系类图 > mvc classes）
		
## 项目教程及理论

项目源码的 教程是《[从零开始为Web项目定制构建系统](http://nakeman.cn/tag/a-wgp)》。
读懂源码除需要教程，基础技术知识，还需要有理论，理论是《[单页应用程序（SPA）形式理论及React应用一般结构](http://nakeman.cn/engineering/webprogramming/theory-of-spa-and-react-app-architecture.html)》。


### 一个前端应用程序的逻辑结构
一个现代JS项目，它一定揉合多层次化的技术的，例如模块化，抽象化等； 一个 Web 前端项目也一定有逻辑结构，例如MVC，如果我们没有逻辑结构的知识基础，面对一个复杂一点的项目源码，常常“找不着北”。

Web 前端项目 一般有如下的结构（有APP，ROUTER，VIEW等常规结构件）：

![](http://nakeman.cn/wp-content/uploads/2020/06/helloSPA-structure.png)

如下是TodoMVC版本的 构架图（较复杂一些）：

![](http://nakeman.cn/wp-content/uploads/2020/07/TodoSPA%E6%9E%84%E6%9E%B6%E7%B1%BB%E5%9B%BE.png)



### 一个前端应用程序的需求（功能），概念结构，代码设计技术
Web 前端项目早已经工程化，严肃的团队应该满足一定的工程流程，和使用辅助文档。本项目在前端项目工程化上也有一定的实验：

![单页应用程序（SPA）形式理论及React应用一般结构](http://nakeman.cn/wp-content/uploads/2020/04/wgp%E7%90%86%E8%AE%BA%E5%AF%B9%E8%AE%BE%E8%AE%A1%E5%B8%88%E5%92%8C%E5%BC%80%E5%8F%91%E8%80%85%E7%9A%84%E6%84%8F%E4%B9%89.png)


### 构建系统理论
构建系统和项目是一对一的关系，项目有复杂，构建系统有就多复杂。本项目的功能从最简的开发始演进，构建系统也步的从简单到复杂的演进。构建系统也有[理论](http://nakeman.cn/tag/theory-of-build-system)。

### git 


## 安装
项目运行需要一些功能依赖，和开发工具依赖（本地和全局），每个版本有一点差别，具体查看 package.json。

截止最新一个版本，没有功能依赖，有一些本地开发依赖，和两个全局依赖：

全局依赖（使用-g安装）：

```shell
    $ npm install http-server -g
    $ npm install -g livereload
```

本地依赖（使用-D or --save-dev)安装：

```shell
	$ npm install npm-run-all --save-dev
```

## 使用
此项目没有功能可“使用”，只有学习的“使用”。每个演进版本都打了tag，并保存了详细的版本历史，你可以回滚看演进过程细节。

项目保留完整的开发历史，所以你可同时使用tag或者branch来签出想看的版本：

```shell
	[keminlau@localhost a-wgp]$ git tag
	v0.1
	v0.2
	[keminlau@localhost a-wgp]$ git branch
	  dev
	  fea-basic-SPA
	  fea-simple-UI-page
	* master
	[keminlau@localhost a-wgp]$ 

```

## Contributing

PRs accepted.

## License
引用博客教程，以及源码，请注明出处。

本README.md的格式参考了 https://github.com/RichardLitt/standard-readme/
