import React,{ProTypes} from 'react';
import { connect } from 'dva';
// Users 的 Presentational Component
// 暂时都没实现
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

// 引入对应的样式
// 可以暂时新建一个空的`
//import styles from './Users.less';

const Users=(props)=>{
    console.log("users 在modal中的1111",props)
    const {dispatch,history,location,users} = props;
    const {loading,list,total,current,currentItem,modalVisivle,modalType} = users;
    const userSearchProps = {};
    const userListProps={
        total,
        current,
        loading,
        dataSource:list
      };
    const userModalProps = {};
    return (
        <div>
            <UserSearch {...userSearchProps}></UserSearch>
            <UserList {...userListProps}></UserList>
            <UserModal></UserModal>
        </div>
    )
}
Users.ProTypes = {};
// 制定订阅数据，关联到Users
function mapStateToProps({users}){
    return {users}
}
export default connect(mapStateToProps)(Users);