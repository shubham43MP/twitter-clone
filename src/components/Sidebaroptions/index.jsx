import React from 'react'

import './Sidebaroptions.css'

const SideBarOptions = ({ active, text, Icon }) => (
  <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
    <Icon />
    <h2 className="">{text}</h2>
  </div>
)

export default SideBarOptions
