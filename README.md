## redux
1、getState()获取状态值
2、dispatch分发事件
3、subscribe监听redux数据变化从而刷新页面
## react-redux
1、所有的ui组件都应该被一个容器组件包裹，他们是父子关系
2、容器组件是真正与redux打交道的，里面可以随意的使用redux的api
3、ui组件中不能使用redux的任何api
4、容器组件会传给ui组件：（1）redux中所保存的状态（2）用于操作状态的方法
5、容器给ui传递状态，操作状态的方法均可以通过props传递
## react-redux的基本使用
    1、UI组件不能使用任何redux的api，只负责页面的呈现交互等
    2、容器组件，负责和redux的通信，将结果交给UI组件
    如何创建一个容器组件？
    靠react-redux的connect函数，connect(mapStateToProps,mapDispatchToProps)
    -mapStateToProps:映射状态，返回的是一个对象
    -maoDispatchToProps:映射操作状态的方法，返回值是一个对象
    3、容器组件中的store是靠props传进去的，而不是在容器中直接引入
## react-redux优化
    1、容器组件和ui组件整合成一个组件
    2、无需自己给容器组件传store，给<App />包裹一个Provider标签，传递store
    3、使用react-redux不用再自己监测redux的状态改变了，容器组件可以自动完成这个工作
## 生成随机数的插件nanoid
## 纯函数
1、只要是相同的输入，必定得到同样的输出
2、不会产生任何的副作用，例如网络请求，输入和输出设备
3、不能调用Date.now()或Math.random()等不纯的方法
4、redux的reducer函数必须是一个纯函数

