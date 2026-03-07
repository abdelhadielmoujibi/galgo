import React from 'react'

const SupportContact = () => {
  return (
    <div className='flex mx-[30vw] p-10 items-center tracking-wider border-1 rounded shadow-lg shadow-cyan-500/50'>
      <form action="https://formsubmit.co/a.bdel.had.ielmoujibi@gmail.com" method="POST" >
            <div>
            <label for="company_name">name of company</label><br/>
            <input type="text" id="company_name" name="company_name" placeholder="exemple company" required className='border-1 rounded p-[5px]' />
          </div>
          <br/>
          <div>
            <label for="mail">mail</label><br/>
            <input type="email" id="mail" name="mail" placeholder="exemple@company.com" required autocomplete="email" className='border-1 rounded p-[5px]'/>
          </div>
          <br/>
          <div>
            <label for="phone">phone</label><br/>
            <input type="tel"id="phone" name="phone" required placeholder="+212500000000" autocomplete="tel" className='border-1 rounded p-[5px]'/>
          </div>
          <br/>
          <div>
            <label for="message">message</label><br/>
            <input type="textarea"id="message" name="message" placeholder="writing...." className='w-[400px]  h-[100px] border-1 rounded p-[5px]'/>
          </div>
          <br/>
          <div>
            <input type="submit"id="submit" className='border-1 rounded p-[1px] hover:bg-[#9FB3D9] cursor-pointer'/>
          </div>
          
          </form>
    </div>
  )
}

export default SupportContact
