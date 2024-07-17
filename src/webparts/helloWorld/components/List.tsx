import * as React from 'react'
import { IHelloWorldProps } from './IHelloWorldProps'
import './List.css'

const List: React.FC<IHelloWorldProps> = ({listData}) => {

  return <div className="container">
    <input type="checkbox" className="toggle" id="toggle" checked={true} /><label className="toggle"> Toggle tilt</label>
    <div className="menu">
      <div className="top">
        <span className="search">
          <input type="text" />
        </span>
      </div>
      <ul className="middle">
        <li ><i className="fa fa-calendar" />Calendar</li>
        <li ><i className="fa fa-camera" />Photos</li>
        <li ><i className="fa fa-check-square-o" />Tasks</li>
        <li ><i className="fa fa-map-marker" />Places</li>
        <li ><i className="fa fa-codepen" />Codepen</li>
        <li ><i className="fa fa-dribbble" />Dribbble</li>
        <li ><i className="fa fa-user" />User account</li>
        <li ><i className="fa fa-cogs" />Settings</li>
      </ul>
      <div className="bottom" />
      <div className="menu-back" />
      <div className="glass-reflection" />
    </div>
  </div>
    // <>
    //   <ul clasName={styles.list} >
    //     {
    //       listData.value.map(item => {
    //         return <li clasName={styles.listItem} key={item.Title}>
    //             <span clasName="ms-font-l">{item.Title}</span>
    //           </li>
    //       })
    //     }
    //   </ul>
    // </>
  
}

export default List