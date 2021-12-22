import React  from 'react'
import '../css/navbar.css';
import logo from '../images/logo.png'
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart,FaBars } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { useGlobalContext } from './context';
const Navbar = () => {
    const{changeAll}=useGlobalContext();
    const refContainer = React.useRef(null);
//    function handlechange(e){
//        return (e.target.value);
//    }
    const handleClick=(e)=>{
        changeAll(refContainer.current.value)
    console.log(refContainer.current.value) }
    const[active,setActive]=React.useState(false)
    const[active2,setActive2]=React.useState(false)
    const {total}=useGlobalContext();
const {setSidebar,sidebar}=useGlobalContext();
    return (
        <section className='nav' >
            <div className='barsimg'>
                <div className='bar'>
                    <FaBars className='bar1' onClick={()=>setSidebar(!sidebar)}/>
                </div>
 <div className="nav-img">
              <Link className='link' to='/'><img src={logo} alt='logo' /> </Link>   
                </div>
            </div>
           
            <div className='nav-search'>
                <form >
                <input type="text" name='category' placeholder='ምርቶችን ይፈልጉ (በአማርኛ)' className='input' ref={refContainer}/>
                <span htmlFor="category" className='ccategory'>
                   <Link to='/product'><BsSearch className='searchicon' onClick={handleClick}/></Link> 
                </span>
            </form>
            </div>
            <div className="nav-links">
                  <Link className='link' to='/cart'><button className='nav-btn' onMouseOver={()=>setActive(true)} onMouseOut={()=>setActive(false)} >
                 <div className={`${active && 'nav-line'}`}> </div> ዘምቢልዎ {total} <FaShoppingCart className='cart-icon'/> 
                  </button> </Link>  
              <Link className='link' to='/signin'><button className='nav-btn1'onMouseOver={()=>setActive2(true)} onMouseOut={()=>setActive2(false)}>
                <div className={`${active2 && 'nav-line1'}`}> </div>ይመዝገቡ 
                </button></Link>  
            </div>
        </section>
    )
}

export default Navbar
