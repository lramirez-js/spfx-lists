import * as React from 'react'
import { IHelloWorldProps } from './IHelloWorldProps'
import './List.css'

const List: React.FC<IHelloWorldProps> = ({listData}) => {

  const checkIconSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-check"
      viewBox="0 0 16 16"
    >
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-5.58 5.68a.75.75 0 0 1-1.08 0L3.324 8.33a.75.75 0 0 1 1.08-1.04l2.094 2.094 5.47-5.47z"/>
    </svg>
  );
  const searchIconSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.344 1.292a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
    </svg>
  );

  return <div className="container">
    <input type="checkbox" className="toggle" id="toggle" defaultChecked={true} /><label className="toggle" htmlFor="toggle"> Toggle tilt</label>
    <div className="menu">
      <div className="top">
        <span className="search">
          <input type="text" />
          {searchIconSvg}
        </span>
      </div>
      <ul className="middle">
        {
          listData.value.map(item => {
            return <li key={item.Title}>
                {checkIconSvg} {item.Title}
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