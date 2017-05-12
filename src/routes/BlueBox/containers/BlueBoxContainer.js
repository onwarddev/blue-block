import { connect } from 'react-redux'
import { fetchList } from '../modules/blueBox'
import BlueBox from '../components/BlueBox'

const mapDispatchToProps = {
  fetchList
}

const mapStateToProps = (state) => ({
  fetching : state.blueBox.fetching,
  list: state.blueBox.list
})

export default connect(mapStateToProps, mapDispatchToProps)(BlueBox)
