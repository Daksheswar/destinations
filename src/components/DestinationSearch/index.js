// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    return (
      <div className="con">
        <h1 className="head">Destination Search</h1>
        <input type="search" className="input" />
        <ul className="destinationsList-con">
          {destinationsList.map(eachDestination => (
            <DestinationItem
              destinationDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
