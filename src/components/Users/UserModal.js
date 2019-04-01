import React from 'react'
import {routerRedux} from 'dva/router'
import { connect } from 'dva'
const UserModal =(props)=>{
    const {dispatch} = props;
    return (
        <div>user modal
            <button type="button"
                onClick = {(e)=>{
                    e.stopPropagation();
                    dispatch(routerRedux.replace('/Users?page=1&value=2'));
                }}
            >给url添加参数</button>
        </div>
    )
}
export default connect((users)=>users)(UserModal);