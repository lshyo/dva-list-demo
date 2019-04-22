import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
  render() {
    const { dispatch } = this.props;
    const {countNumber} = this.props.countNumber;
    console.log("dispatch,count==>",countNumber)
    return (
      <div className={styles.normal}>
        <div className={styles.record}>
         Highest Record: {countNumber.record} 
        </div>
        <div className={styles.current}>
         {countNumber.current}
        </div>
        <div className={styles.button}>
          <button onClick={() => {
            dispatch({type:'countNumber/add'})
          } } >
                 +
          </button>
          <button onClick={() => {
            dispatch({type:'countNumber/minus'})
          } } >
                 -
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { countNumber: state };
} // 获取state

export default connect(mapStateToProps)(IndexPage);