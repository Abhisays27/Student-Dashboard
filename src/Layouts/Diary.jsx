import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Diary from './Diary/Diary';


const Diaryone = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Diary/>
    </div>
  )
};

export default Diaryone