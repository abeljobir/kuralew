import React,{useContext,useState} from 'react'
import catagories from '../data'
const AppContext=React.createContext()
export const AppProvider = ({children}) => {
   const [all ,setAll]=useState('all')
   const [amount ,setAmount]=useState(6500)
   const [sidebar,setSidebar]=useState(false);
   const [allCart,setAllcart]=useState([])
   const [massage,setMassage]=useState('')
const [total,setTotal]=useState(0)
const [cartnotify,setCartnotify]=useState(false)
const changeAmount=(samount)=>{
    setAmount(samount)
}
const changeAll=(item)=>{
    setAll(item)
}
   const openSidebar=()=>{
       setSidebar(true)
   }
   const closeSidebar=()=>{
       setSidebar(false)
   }
    const changecart=(value)=>{
        let x=0;
        while (x<=allCart.length) {
            if(!allCart.length || x===allCart.length)
            {const acart=[...allCart,value]
                setMassage('ወደዘምቢልዎ አስገብተዋል')
            setAllcart(acart)
            setTotal(total+1)
        }
            else if(allCart[x].id===value.id){
                setMassage('ዘምቢልዎ ውስጥ አለ')
            break;}
            x++;
        }
    }
    const changem=()=>{
    setMassage('ትክክለኛ ከሆኑት አምራቾች እና አቅራቢዎች ጋር እናገናኞታለን')

    }
    const deletecart=(value)=>{
        if(allCart.length){
        const filtered=allCart.filter((anitem)=>anitem.id!==value)
        console.log(filtered)
         setAllcart(filtered) }    
    }
    const deleteall=()=>{
        if(allCart.length){
               setAllcart([])
        }
        
    }
   const notify=()=>{
       setCartnotify(true)
   }
   const hidenotify=()=>{
       setCartnotify(false)
   }
    return <AppContext.Provider value={{changem,amount,changeAmount,all,changeAll,deleteall,deletecart,massage,hidenotify,cartnotify,notify ,total,sidebar,setSidebar,openSidebar,closeSidebar,changecart,allCart}} >{children}
    </AppContext.Provider>
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext}
