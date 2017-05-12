import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './BlueBox.scss'

const listSample = [{name: "one", description: "something"}, {name:"two", description: "something"}]

class BlueBox extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount() {
    //this.props.fetchList()
  }

  render(){
    const {fetching} = this.props
    let listNodes

    listSample && (
     listNodes = listSample.map((item) =>{
        return (
          <li>{item.name} - {item.description}</li>
          )
      })
    )
    return (
      <div className="box">
        <ul>{listNodes}</ul>
      </div>
    )
  }
}

BlueBox.propTypes = {
  fetching     : PropTypes.bool.isRequired,
  fetchList : PropTypes.func.isRequired
}

export default BlueBox