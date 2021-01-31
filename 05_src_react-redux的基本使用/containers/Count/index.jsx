import CountUI from "../../components/Count";
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from "../../redux/count_action";
// 引入connect用于链接容器组件与UI组件
import { connect } from "react-redux";
// mapStateToProps函数的返回的对象中的key就作为传递给了UI组件props的key，value就作为传递给UI组件的value----状态
function mapStateToProps(state) {
  return { count: state };
}
// mapDispatchToProps函数的返回的对象中的key就作为传递给了UI组件props的key，value就作为传递给UI组件的value----操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    jia: (data) => {
      //  通知redux执行加法
      dispatch(createIncrementAction(data));
    },
    jian:(data)=>{
        dispatch(createDecrementAction(data))
    },
    jiaAsync:(data,time)=>{
        dispatch(createIncrementAsyncAction(data,time))
    }
  };
}
// 创建count的容器组件
const countContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default countContainer;
