import * as React from 'react'
import { IHelloWorldProps } from './IHelloWorldProps'
import './List.css'

const List: React.FC<IHelloWorldProps> = ({listData}) => {

  return <div className="container">
    <input style={{display: 'none'}} type="checkbox" className="toggle" id="toggle" checked={true} /><label className="toggle"> Toggle tilt</label>
    <div className="menu">
      <div className="top">
        <span className="search">
          <input type="text" />
        </span>
      </div>
      <ul className="middle">
        {
          listData.value.map(item => {
            return <li key={item.Title}>
                <i className="fa fa-check-square-o" /> {item.Title}
              </li>
          })
        }
      </ul>
      <div className="bottom" />
      <div className="menu-back" />
      <div className="glass-reflection" />
    </div>
  </div>
}

export default List