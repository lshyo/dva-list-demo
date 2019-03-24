import {hashHistory} from 'dva/router'
import qs from 'qs'
import { request } from 'http';
import {query } from '../services/users'

const DEFAULT_DATA =  [
  {
    name: '张三',
    age: 23,
    address: '成都',
  },
  {
    name: '李四',
    age: 24,
    address: '杭州',
  },
  {
    name: '王五',
    age: 25,
    address: '上海',
  },
]


export default {

  namespace: 'users',

  state: {
    list:[],
    total:null,
    loading:false, // 控制加载状态
    current:null, // 当前分页信息
    currentItem:{}, // 档期操作的用户对象
    modalVisible:false, // 弹窗的显示状态
    modalType:'create' //弹窗的类型（添加用户，编辑用户）
  },
  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
    setup2({ dispatch, history }) {  // eslint-disable-line
      history.listen(location=>{
        console.log("localtion",location)
        if(location.pathname === '/Users'){
          dispatch({type:'query',payload:{}})  // query 掉用接口数据
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *query({payload},{select,call,put}){
      // yield put({type:'showLoading'});
      const {data} = yield call(query)
      console.log("data==>",data)
      if(data){
        yield put({
          type:'querySuccess',
          payload:{
            list:data.data,
            total:data.page.total,
            current:data.page.current
          }
        })
      }else{
        yield put({
          type:'querySuccess',
          payload:{
            list:DEFAULT_DATA,
            total:3,
            current:1
          }
        })
      }
    },
    *create(){},
    *'delete'(){},
    *update(){}
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    showLoading(){},
    showModal(){},
    hideModal(){},
    // 使用静态数据返回
    querySuccess(state,action){
    
      return {...state,...action.payload,loading:false}
    },
    createSuccess(){},
    deleteSuccess(){},
    updateSuccess(){}
  },

};
