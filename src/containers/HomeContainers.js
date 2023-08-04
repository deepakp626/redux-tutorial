import {connect} from 'react-redux'
import Home from '../components/Home'
import {addToCard} from '../Services/Actions/actions'


const mapStateToProps = state=>({
        cardData:state
})
const mapDispatchToProps = dispatch => ({
    addToCardHandler:data=>dispatch(addToCard(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home