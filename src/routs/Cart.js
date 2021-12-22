import React from 'react'
import '../css/cart.css'
import {ImSad} from 'react-icons/im'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../components/context' 
import catagories from '../data'
const Cart = () => {
    const{allCart,deletecart,deleteall}=useGlobalContext();
    
    if(!allCart.length){
    return (
        <div className='cart'>
           <span>ወደዘምቢዎ ምንም አይነት እቃ አላስገቡም </span><ImSad className='sadIcon'/> 
        <Link to='/'><button className={'herobtn5'}>ወደቤትዎ ይመለሱ</button></Link> 
        </div>
    )}
    return(<> <section className={'fproducts'}>
    <menu className='titles'>
        ዘምቢልዎ
    </menu>
</section>
        <div className='cproducts'>
              {allCart.map((slb,index)=>{
        const{name,url,price,id}=slb;
return(<div key={index} className="csingleproduct">
<img  className='cproductimg' src={url} alt="ልብስ" />
<div className="cname">{name}</div>
<div className='ccall'>
    <span>አሁን ይግዙ</span>
    <span onClick={()=>deletecart(id)}>ከዘንቢልዎ ያሶጡ</span>
</div>
<div  className="cprice">{price}</div>
   </div>)
})}
        </div>
               <Link to='/'><button className={'herobtn6'}>ወደቤትዎ ይመለሱ</button></Link> 
                 <button className={'herobtn6'} onClick={()=>deleteall()}>ሁሉንም እቃ ያጥፉ</button>
   </> )
}

export default Cart

