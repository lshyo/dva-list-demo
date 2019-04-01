import React,{ProTypes} from 'react';
import withCompose from '../withCompose/withCompose'
// Users 的 Presentational Component
// 暂时都没实现
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';
// 引入对应的样式
// 可以暂时新建一个空的`
//import styles from './Users.less';
const delay = function(time){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("1234")
        },time )
    })
}
const Users=(props)=>{
    console.log("users 在modal中的1111",props)
    const {dispatch,history,location,users,loading} = props;
    const {list,total,current,currentItem,modalVisivle,modalType} = users;
    const userSearchProps = {};

    const isloading = loading.global
    const queryLoading = loading.effects['users/query']
    const userListProps={
        total,
        current,
        isloading,
        dataSource:list
      };
    const userModalProps = {};
    return (
        <div>
            <UserSearch {...userSearchProps}></UserSearch>
            <UserList {...userListProps}></UserList>
            <UserModal></UserModal>
            <button onClick={()=>{

                delay(2000)
                console.log("11")
            }}>异步</button>
        </div>
    )
}
Users.ProTypes = {};
export default withCompose(Users);