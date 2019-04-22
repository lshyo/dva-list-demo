import React,{PropTypes} from 'react';
import {getUrlParamComponentPass} from '../../utils/utils'
const UserSearch =()=>{
    const url = window.location.href;

    const parm = getUrlParamComponentPass(url)
    return (
        <div>user UserSearch

            <div>
                page: {parm.page || ""}
            </div>
            <div>
                value: {parm.value || ""}
            </div>
        </div>
    )
}
export default UserSearch