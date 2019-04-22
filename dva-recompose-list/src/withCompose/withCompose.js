import {compose} from 'recompose'
import {connect} from 'dva'

export default compose(

    connect((users)=>users)

)