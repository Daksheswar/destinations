// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails

  return (
    <li className="card-con">
      <img src={imgUrl} className="img" />
      <p className="desti-name">{name}</p>
    </li>
  )
}

export default DestinationItem
