import React,{useEffect} from 'react'
import '../css/home.css'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight,FaCopyright } from 'react-icons/fa';
import {BsFacebook,BsTwitter,BsTelegram,BsInstagram} from 'react-icons/bs';
import catagories from '../data';
import { useGlobalContext } from '../components/context';
import { Link } from 'react-router-dom';
    const {biret,lbs,chama,sitota,enchet,examples,cart}=catagories;
    
const Home = () => {
      const{sidebar,changecart,notify,cartnotify,hidenotify,massage,changem}=useGlobalContext();
     const[myindex,setMyIndex]=React.useState(0);
     const activatedcart=(list)=>{
    AddTocart(list)
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
      useEffect(() => {
          if(myindex<0)
          setMyIndex(examples.length-1)
          if(myindex>examples.length-1)
          setMyIndex(0)   
      }, [myindex])
       useEffect(() => {
      let slider = setInterval(() => {
        setMyIndex(myindex + 1);
      }, 7000);
      return () => {
        clearInterval(slider);
      };})
     
      const AddTocart=(abs)=>{
          changecart(abs)
      }
      const handleclick=(e)=>{
        e.preventDefault()
        notify();
        changem();
      }
    return (
    <>
    <div className={`${sidebar && 'overlay2'} `}></div>
 <div className={'bgimages '}>
            
<article className='position'> <img src='https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=20&m=1206800961&s=612x612&w=0&h=hcPoUKhWtzHXR3PIAHVgPVZDZaO7R8yZ1wNPkUSsgwU=' alt="images"/>
            </article>
            </div>   
            <div className="hero">
<div className={'hero1'}>
    <span>
        ሸምተው ያትርፉ!!!   &nbsp;   ሽጠው ይጠቀሙ!!!
    </span>
 <div className='ndspan'>በቤትዎ ውስጥ የማይፈልጉት ነገር ግን ለሌሎችን የሚጠቅም እቃ አለ? &nbsp; የሚገዙት እቃስ ተወዶቦታል እንግድያውስ ቆራሌው ያገለገሉ እና አዲስ እቃዎችን እጅግ በቅናሽ ዋጋ ይዞላቹ ቀርቧል:: </div>   
<Link to='/Product' className='link'><button className={'herobtn'} >መሸመት ይጀምሩ</button></Link> 
<Link to='/signin'><button className={'herobtn2'} >ይመዝገቡ</button> </Link>     
</div> 
</div>
<section className={'fproducts'}>
    <menu className='titles'>
        ገበያው ለእይታ
    </menu>
</section>
<section className='products'>
    {lbs.map((slbs,index)=>{
        const{name,url,price,id}=slbs;
        if(index<3){
     return(<div key={id} className="singleproduct">
<img  className='productimg' src={url} alt="ልብስ" />
<div className="name">{name}</div>
<div className='call'>
    <Link to='/Buy' className='link'><span>አሁን ይግዙ</span></Link>
    <span onClick={()=>activatedcart(slbs)}>ወደዘሚልዎ ይጨምሩ</span>
</div>
<div  className="price">{`${price}Birr`}</div>
   </div>)}
    })}
    {chama.map((schama,index)=>{
        const{name,url,price,id}=schama;
        if(index<3){
     return(<div key={id} className="singleproduct">
<img className='productimg' src={url} alt="ልብስ" />
     <span className="name">{name}</span>
     <div className='call'>
    <Link to='/Buy' className='link'><span>አሁን ይግዙ</span></Link>
    <span onClick={()=>activatedcart(schama)}>ወደዘሚልዎ ይጨምሩ</span>
</div>
<div className="price">{`${price}Birr`}</div>
   </div>)}
    })}
     {sitota.map((ssitota,index)=>{
        const{name,url,price,id}=ssitota;
        if(index<3){
     return(<div key={id} className="singleproduct">
<img className='productimg' src={url} alt="ልብስ" />
 <div className="name">{name}</div>
 <div className='call'>
   <Link to='/Buy' className='link'><span>አሁን ይግዙ</span></Link>
    <span onClick={()=>activatedcart(ssitota)}>ወደዘሚልዎ ይጨምሩ</span>
</div>
<div className="price">{`${price}Birr`}</div>
   </div>)}
    })} 
    <Link to='/Product' className='link'><button className='herobtn3'>ሙሉ እቃዎችን ይመልከቱ</button></Link>
</section>
<section className='request'>
    <div className="requestinfo">
        <img src='https://cdn.crello.com/api/media/small/342974446/stock-photo-smiling-african-american-woman-shopping' alt="request image" className='requestimg' />
        <div className="overlay4">
            <span>ሀገር አቀፍ የንግድ ዝውውሮች  </span>
        </div>
    </div>
     
   <div className="form">
<div className='h'>የሚፈልጉትን እቃ ይዘዙን</div>
          <form onSubmit={handleclick}>
<div className="form1">
    <input className='input1' type="text" placeholder='የሚፈልጉትን እቃ ስም እስከነማብራርያው እዚህ ጋር ይጻፉ' required/>
</div>
<div className="form2">
    <input type="number" placeholder='ብዛት ስንት ይፈልጋሉ' required/>
    <input type="email" placeholder='የዋጋ መጠንዎን ያስቀምጡ'required/>
    <input type="text" placeholder='ኢሜልዎን ያስገቡ' required/>
    <button className={'herobtn4'} >ይላኩ</button> 
</div>
</form>
   </div>
</section>
<section className={'fproducts'}>
    <menu className='titles'>
        የደምበኞች አስተያየት
    </menu>
</section>
<section className='section'>
     <div className="section-center">
        {examples.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === myindex) {
            position = 'activeSlide';
          }
          if (
            personIndex === myindex - 1 ||
            (myindex === 0 && personIndex === examples.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setMyIndex(myindex - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setMyIndex(myindex + 1)}>
          <FiChevronRight />
        </button>
      </div>
</section>
   <section className='footer'>
       <div className="contact">
           <span>phone:0941883684</span>
            <span>email:abeljobire@gmail.com</span>
             <span>Ethiopia , Addis ABABA</span>
       </div>
       <div className="socialmedia">
           <span>  <BsInstagram /> </span>
           <span><BsFacebook /></span>
           <span><BsTelegram /></span>
           <span><BsTwitter/></span>
       </div>
       <div className="copyright">
           <span><FaCopyright/> All right reserved </span>
       </div>
       </section>  
       <section className={`${cartnotify?'notification shownotify':'notification'}`}>
         <span>{massage}</span>
       </section>
</>

 )
}

export default Home
