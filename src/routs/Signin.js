import React from 'react'
import '../css/signin.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useGlobalContext} from '../components/context'
const Signin = () => {
     
const{notify,hidenotify,cartnotify}=useGlobalContext();
const[amassage,setAmassage]=React.useState('')
        const [check,setCheck]=React.useState({fname:false,faname:false,phoner:false,emailr:false,pass:false,apass:false,empty:false})
    const [errma,setErrma]=React.useState({fnamerr:'',fanamerr:'',phoneer:'',emailerr:'',passerr:'',apasserr:''})
    const[name,setName]=React.useState('')
    const [password,setPassword]=React.useState('')
    React.useEffect(()=>{
       let notif=setInterval(()=>{
         if(notify)
         hidenotify()
       },3000);
       return ()=>{
         clearInterval(notif)
       }
     },[notify])
    const handlesubmit=(e)=>{
        e.preventDefault();
         notify();
            setAmassage('you have successfully registered');
    }
     const handleh=(e)=>{
const evalue=e.target.value;
const ename=e.target.name;
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
}}}
    return (<>
        <section className='signin'>
            <div className="quot">
              <img src={logo} alt='logo' className='kuralew'/>  
              <div className="sentence">
                  ተመዝግበው በመቀላቀል የሚፈልጉትን እቃ ይሽጡ ለእርስዎ የሚሆኑ እቃዎጭንም ይመልከቱ:: 
                  ቤተሰብ ይሁኑ!!!
              </div> 
            </div>
            <div className="data">
                <div className="sform">
                     <form className='sform1' onSubmit={handlesubmit}>
                    <label htmlFor="email" className='lemail'>ኢሜልዎን ያስገቡ</label>
                    <input type="email" name='email' className='iemail' onChange={handleh} required/>
                    <div className={`${check.fname? 'eclass showeclass':'eclass'}`}>{errma.fnamerr}</div>
                    <label htmlFor="password" className='lpassword'>የይለፍ ቃል ያስገቡ</label>
                    <input type="password" name='passw' className='ipassword' onChange={handleh} required/>
                    <div className={`${check.fname? 'eclass showeclass':'eclass'}`}>{errma.fnamerr}</div>
                    <button type='submit' className='signinbtn'>ይግቡ
                        </button>
                    </form>
                   <div className="line">ለቁራሌው አዲስ ነዎት?</div>
                    <Link to='/Signin/Createaccount'> <button type='submit' className='signinbtn1'> ይመዝገቡ
                        </button></Link> 
                </div>
              
            </div>
            </section>
            <section className={`${cartnotify | check.empty?'notification shownotify':'notification'}`}>
         <span>{amassage}</span>
       </section></>
    )
}

export default Signin