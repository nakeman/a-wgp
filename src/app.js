// 0 任何.js首层 默认在一个window对象环境里，有DOM BOM等环境
// 多个.js文件意味什么？ 我在一个.js文件里写代码 的默认环境？
//  .js文件是物理分割，与逻辑分割有别；
//  物理分割 可能是纯粹工程协作，对计算功能没有影响，例如合并为一个bundle之后
//  当然 如果是老式 的浏览器script加载，加载顺序是一个问题


// 1 hello spa
// 明示有一个全局的 HELLOSPA 对象存在（windows.HELLOSPA)
var HELLOSPA = HELLOSPA || {};

// 2 new a App object (SPA component) in free heap,
// and link it to the HELLOSPA NS
// IIFE 是一个模块（由一个以上的类组成）定义，并只构造一次（在自由堆上）
// 模块“类” 没有名字，它只有工程组织的价值，不会被new第二次
// 模块“类” 内可有一个以上的类定义，这些类可以一般类定义（需要new），和即时类对象（对象字面量）
(function(){
	// 2.1 模块 有一个即时类（字面量对象）
	var App = {

		router : HELLOSPA.Router,

		startSession : function (){

			this.router.start();
		}

	}

	// 2.2 将这个即时类对象 赋给 HELLOSPA的属性，让其全局可用（只用了一次，安装加载事件处理）
	HELLOSPA.App = App;

	// 类对象的依赖关系 决定可使用何种 模块方案（对象可视性）
	// 例如 App只创建一次 Router ，App对Router的依赖是单向的一次性
	// Router 根据用户会话活动 可以 多次 创建同一个View；Router对 View 的依赖也是单向的，但不是一次性的
	// View 渲染任务 依赖 EJS，EJS只被 Viiew使用，对其它对象没有意义，所以可考虑划出一个逻辑空间VIEW,将 EJS放在里边

})();


// 3 the we can use the App object here,to start the SPA APP
// 在全局环境上，执行事件安装
window.addEventListener("load",HELLOSPA.App.startSession());


// 「代码或计算对象的功能」 分两大类：安装配置的功能，和 被安装配置好的对象提供的计算功能；
// 安装配置：模块类 对 App类的安装
// 计算功能：App类方法的使用


