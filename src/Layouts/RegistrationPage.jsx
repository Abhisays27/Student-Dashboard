import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Registration from './Registration/Registration';


const RegistrationPage = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Registration/>
    </div>
  )
};

export default RegistrationPage