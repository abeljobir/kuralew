import React, { useState } from 'react'
import '../css/account.css'
import { useGlobalContext } from '../components/context';
const Createaccount = () => {
const{notify,hidenotify,cartnotify}=useGlobalContext();
const[amassage,setAmassage]=useState('')
        const [check,setCheck]=React.useState({fname:false,faname:false,phoner:false,emailr:false,pass:false,apass:false,empty:false})
    const [errma,setErrma]=React.useState({fnamerr:'',fanamerr:'',phoneer:'',emailerr:'',passerr:'',apasserr:''})
     React.useEffect(()=>{
       let notif=setInterval(()=>{
         if(notify)
         hidenotify()
       },3000);
       return ()=>{
         clearInterval(notif)
       }
     },[notify])
    const handleinput=(e)=>{
const evalue=e.target.value;
const ename=e.target.name;
if(ename==='fname'){
let x=0
while(x<=evalue.length-1){
if(isNaN(evalue[x])===false){
    console.log('hi')
    setCheck({...check,fname:true})
    setErrma({...errma,fnamerr:'name must not be a number'})}

else {
    setCheck({...check,fname:false})
      setErrma({...errma,fnamerr:''})
}
x++
}
 if(evalue===''){setCheck({...check,fname:false}) 
} }
if(ename==='faname'){
let x=0
while(x<=evalue.length-1){
if(isNaN(evalue[x])===false){
    setCheck({...check,faname:true})
    setErrma({...errma,fanamerr:'name must not be a number'})
}
else {    setCheck({...check,faname:false})
      setErrma({...errma,fanamerr:''})
}
x++;
}
if(evalue===''){setCheck({...check,faname:false})}}  
if(ename==='email'){
let x=0
while(x<=evalue.length-1){
if(evalue[x]!=='@'){
setCheck({...check,emailr:true})
setErrma({...errma,emailerr:'email must contain @'})
}
else if(evalue[x]==='@') {
    setCheck({...check,emailr:false})
    setErrma({...errma,emailerr:''})
    break;
}
x++}
if(evalue===''){setCheck({...check,emailr:true})
}}
if(ename==='password'){ 
let x=0
while(x<=evalue.length-1){
if(isNaN(evalue[x]) | evalue.length<5){
    setCheck({...check,pass:true})
    setErrma({...errma,passerr:'password must contain numbers and length above 5'})
}
else {
    setCheck({...check,pass:false})
    setErrma({...errma,passerr:''})
    break;
}
x++
}
if(evalue===''){setCheck({...check,pass:false})
}}}
const changeSubmit=(e)=>{
     e.preventDefault();
     console.log('hello')
    if(check.fnamecheck===true | check.faname===true | check.phoner===true | check.emailr===true | check.pass===true){
        notify();
        setAmassage('please do all the requirment');
    }
     else {notify();
            setAmassage('you have successfully registered');}
}
    return (<>
        <section className='account'>
              <menu className='ftitles'>ወደ ቁራሌው እንኳን ደህና አመጡ!!!</menu>
                     <form className='cform1' onSubmit={changeSubmit}>
                    <label htmlFor="fname" className='ccemail'>የርስዎን ስም ያስገቡ</label>
                    <input type="text" name='fname' className='cemail'onChange={handleinput} required/>
                    <div className={`${check.fname? 'eclass showeclass':'eclass'}`}>{errma.fnamerr}</div>
                    <label htmlFor="faname" className='ccemail'>የአባትዎን ስም ያስገቡ</label>
                    <input type="text" name='faname' className='cemail'onChange={handleinput} required/>
                    <div className={`${check.faname? 'eclass showeclass':'eclass'}`}>{errma.fanamerr}</div>
                     <label htmlFor="phone" className='ccemail'>ስልክ ቁጥርዎን ያስገቡ</label>
                    <input type="number" defaultValue={+251} name='phone' className='cemail'onChange={handleinput} required/>
                    <div className={`${check.phoner? 'eclass showeclass':'eclass'}`}>{errma.phoneer}</div>
                     <label htmlFor="email" className='ccemail'>ኢሜልዎን ያስገቡ</label>
                    <input type="email" name='email' className='cemail'onChange={handleinput} required/>
                    <div className={`${check.emailr? 'eclass showeclass':'eclass'}`}>{errma.emailerr}</div>
                    <label htmlFor="password" className='cpassword'>አዲስ የይለፍ ቃል ያስገቡ</label>
                    <input type="password" name='password' className='cemail' onChange={handleinput} required/>
                    <div className={`${check.pass? 'eclass showeclass':'eclass'}`}>{errma.passerr}</div>
                    <label htmlFor="password" className='cpassword'>የይለፍ ቃልዎን ደግመው ያስገቡ</label>
                    <input type="password" name='apassword' className='cemail' onChange={handleinput} required/>
                    <div className={`${check.apass? 'eclass showeclass':'eclass'}`}>{errma.apasserr}</div>
                      <label htmlFor="dropdown" className='ccemail'>ቁራሌውን ለምን ይጠቀሙታል</label>
                    <select  name = "dropdown" className='dropdown'>
             <option value = "all" >ለመግዛት</option>
            <option value = "ልብስ">ለመሸጥ</option>
            <option value = "ጫማ">ለሁለቱም</option>
         </select>
         <button type='submit' className='psigninbtn'>ይመዝገቡ
                        </button>
                </form>
        </section>
         <section className={`${cartnotify | check.empty?'notification shownotify':'notification'}`}>
         <span>{amassage}</span>
       </section></>
    )
    }

export default Createaccount
