import React from 'react'
import '../css/buy.css'
const Buy = () => {
    return (
        <section className='buy'>
            
  <div className="sform2">
                     <form className='sform3'>
                    <label htmlFor="email" className='blemail'>paypal</label>
                    <input type="email" name='email' className='biemail'/>
                    <label htmlFor="password" className='blpassword'>የይለፍ ቃል ያስገቡ</label>
                    <input type="password" name='password' className='bipassword'/>
                      <button type='submit' className='bsigninbtn'>ይግቡ
                        </button>
                    </form> 
                </div>
        </section>
    )
}

export default Buy
