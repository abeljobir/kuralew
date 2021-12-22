import React from 'react'
import  '../css/sidebar.css'
import { useGlobalContext } from './context'
import {ImCancelCircle} from "react-icons/im";
import {GiDeliveryDrone} from "react-icons/gi";
import {SiIobroker} from "react-icons/si";
import {BiHelpCircle} from "react-icons/bi";
import {FcAbout} from "react-icons/fc";
import {Link} from 'react-router-dom'
const SideBar = () => {
    const {sidebar,closeSidebar}=useGlobalContext();
    return (
        <section className={`${sidebar?'sidebar show ':'sidebar'}`}>
        <Link to='/SidebarItems'className='cancel-btn'>  <div  onClick={closeSidebar}><ImCancelCircle /></div> </Link > 
         <Link to='/SidebarItems'className='sidebarchildren'><div ><GiDeliveryDrone className='sideicon'/> አቅራቢዎችን ያነጋግሩ </div></Link>   
           <Link to='/SidebarItems'className='sidebarchildren'> <div ><SiIobroker className='sideicon'/> ደለላ </div></Link>
       <Link to='/SidebarItems' className='sidebarchildren'><div ><BiHelpCircle className='sideicon'/> እርዳታ </div></Link> 
        <div className='sidebarchildren'><FcAbout />ስለኛ </div>
        </section>
    )
}
export default SideBar;