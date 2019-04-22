import {delay} from '../services/example'
export default {

  namespace: 'countNumber',

  state: {
    record:0,
    current:0,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
    keydownBord(){
      console.log("app.start()后，会执行subscriptions 订阅的方法")

    }
  },

  effects: {
   
    *add(action,{call,put}){
      yield put({type:"add1"})
      yield call(delay,1000);
      yield put({type:'minus'});
    }
  },

  reducers: {
    add1(state) {
       const newCurrent = state.current + 1;
       return {
         ...state,
         record:newCurrent > state.record ? newCurrent : state.record,
         current: newCurrent
       }
    },
    minus(state){
      return {...state,current:state.current - 1}
    }
  },

};
