import React from 'react'
import '../css/products.css'
import catagories from '../data'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../components/context'
const Product = () => {
  const [anamount,setAnamount]=React.useState(6500)
    const{biret,lbs,chama,sitota,enchet,}=catagories;
    const {changecart,notify,massage,cartnotify,hidenotify,all,changeAll,amount,changeAmount}=useGlobalContext();
    const activatedcart=(list)=>{
    changecart(list)
    notify()
     }
     React.useEffect(()=>{
       let notif=setInterval(()=>{
         if(notify)
         hidenotify()
       },3000);
       return ()=>{
         clearInterval(notif)
       }
     },[notify])
    //  const handleChange=(e)=>{
       
    //  }
    const handleselected=(e)=>{
      changeAll(e.target.value)
    }
     const handlerange=(e)=>{
      changeAmount(e.target.value)
      setAnamount(e.target.value)
    }

    return (<>
    <section className='all'>
       
            <div className="filter">
             <menu className='ftitles'>ማጥለያ</menu>
              <div className="filters">
                  <form>
         <select  name = "dropdown" className='dropdown' onChange={handleselected}>
             <option value = "all" >ሁሉም</option>
            <option value = "ልብስ">ልብስ</option>
            <option value = "ጫማ">ጫማ</option>
            <option value = "እንጨት">የእንጨት ስራዎች</option>
            <option value = "ብረታብረት">ብረታብረት</option>
            <option value = "ስጦታ">ስጦታ</option>
         </select>
         <input type="range" className='range' min='250' max='6500' onChange={handlerange} defaultValue={6500}></input>
         <div>{`ዋጋ ከ${anamount} በታች`} </div>
      </form>

              </div>
            </div>
              <section className='allitems'>
            <div className="items">
                 {sitota.map((ssitota)=>{
        const{name,url,price,id}=ssitota;
        if(all==='all' || all==='ስጦታ')
        if(amount===6500 || price<=amount){
     return(<div key={id} className="psingleproduct">
<img className='pproductimg' src={url} alt="ልብስ" />
 <div className="pname">{name}</div>
 <div className='pcall'>
   <Link to='/Buy' className='link'><span>አሁን ይግዙ</span></Link>
    <span onClick={()=>activatedcart(ssitota)}>ወደዘሚልዎ ይጨምሩ</span>
</div>
<div className="pprice">{`${price} Birr`}</div>
   </div>)}})}
      {lbs.map((slbs)=>{
        const{name,url,price,id}=slbs;
        if(all==='all' || all==='ልብስ')
        if(amount===6500 || price<=amount){
     return(<div key={id} className="psingleproduct">
<img className='pproductimg' src={url} alt="ልብስ" />
 <div className="pname">{name}</div>
 <div className='pcall'>
   <Link to='/Buy' className='link'><span>አሁን ይግዙ</span></Link>
    <span onClick={()=>activatedcart(slbs)}>ወደዘሚልዎ ይጨምሩ</span>
</div>
<div className="pprice">{`${price} Birr`}</div>
   </div>)}})}
      {chama.map((schama)=>{
        const{name,url,price,id}=schama;
        if(all==='all' || all==='ጫማ')
        if(amount===6500 || price<=amount){
     return(<div key={id} className="psingleproduct">
<img className='pproductimg' src={url} alt="ልብስ" />
 <div className="pname">{name}</div>
 <div className='pcall'>
   <Link to='/Buy' className='link'><span>አሁን ይግዙ</span></Link>
    <span onClick={()=>activatedcart(schama)}>ወደዘሚልዎ ይጨምሩ</span>
</div>
<div className="pprice">{`${price}Birr`}</div>
   </div>)}})}
   {biret.map((sbiret)=>{
        const{name,url,price,id}=sbiret;
        if(all==='all' || all==='ብረታብረት')
        if(amount===6500 || price<=amount){
     return(<div key={id} className="psingleproduct">
<img className='pproductimg' src={url} alt="ልብስ" />
 <div className="pname">{name}</div>
 <div className='pcall'>
   <Link to='/Buy' className='link'><span>አሁን ይግዙ</span></Link>
    <span onClick={()=>activatedcart(sbiret)}>ወደዘሚልዎ ይጨምሩ</span>
</div>
<div className="pprice">{`${price}Birr`}</div>
   </div>)}})}
   {enchet.map((senchet)=>{
        const{name,url,price,id}=senchet;
        if(all==='all' || all==='እንጨት')
        if(amount===6500 || price<=amount){
     return(<div key={id} className="psingleproduct">
<img className='pproductimg' src={url} alt="ልብስ" />
 <div className="pname">{name}</div>
 <div className='pcall'>
   <Link to='/Buy' className='link'><span>አሁን ይግዙ</span></Link>
    <span onClick={()=>activatedcart(senchet)}>ወደዘሚልዎ ይጨምሩ</span>
</div>
<div className="pprice">{`${price}Birr`}</div>
   </div>)}})}
            </div>
        </section></section>
         <section className={`${cartnotify?'notification shownotify':'notification'}`}>
         <span>{massage}</span>
       </section>
        </>
    )
}

export default Product


