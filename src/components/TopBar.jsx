import React from 'react'
import Icon from './Icon'
import { topBarItems } from '../data/site'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <ul>
          {topBarItems.map((item) => (
            <li key={item.text}>
              {item.href ? (
                <a href={item.href} dir="ltr"><Icon name={item.icon} size={14} /><span>{item.text}</span></a>
              ) : (
                <span><Icon name={item.icon} size={14} /><span>{item.text}</span></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
