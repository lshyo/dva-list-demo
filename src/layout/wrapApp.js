import React from 'react';
import { connect } from 'dva';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
let currHref = '';
const App= ({ children, loading }) => {

    const href = window.location.href;    // 浏览器地址栏中地址
    if (currHref !== href) {  // currHref 和 href 不一致时说明进行了页面跳转
        NProgress.start();    // 页面开始加载时调用 start 方法
        console.log("start start()")
        if (!loading.global) {  // loading.global 为 false 时表示加载完毕
            NProgress.done();  // 页面请求完毕时调用 done 方法
            currHref = href;   // 将新页面的 href 值赋值给 currHref
            console.log("start don()")
        }
    }
    return <div style={{width:"100%",height:"100%"}}>
        {children}
    </div>
}
function mapStateToProps({users,loading}){
    return {users,loading}
}
export default connect(mapStateToProps)(App);