const Contact = ()=>{
    const isMobile = window.screen.width < 600;
    return <div className="w-full h-full flex flex-col  bg-dark-blue"><div className="flex flex-row">
     
         <div className="w-1/2 flex flex-col gap-2  text-lg lg:text-6xl text-white font-mt-bold">
                <div className="mt-10 lg:mt-0 ml-[5%] w-[90%] sm:w-[70%] flex"><p className="w-1/2 text-left">Frontend</p></div>
                <div className="ml-[5%] w-[90%] sm:w-[70%] flex -mt-2 lg:-mt-8"><p className="w-1/2">Developper</p></div>
                <p className="ml-[5%] w-[90%] sm:w-[70%] text-sm lg:text-lg font-mt text-justify">Créer des expériences web esthétiques et fonctionnelles à l'aide de technologies modernes.</p>
                {!isMobile && <> <div className="ml-[5%] w-[90%] sm:w-[70%] text-sm lg:text-lg text-white font-mt-bold flex flex-row gap-1 lg:gap-4  "><img src="/images/email.webp" alt="email" className="w-4 lg:w-8"/><p className="h-full flex center">matthieubarnab@gmail.com</p></div>
                     <div className="ml-[5%] w-[90%] sm:w-[70%] text-sm lg:text-2xl text-white font-mt-bold flex flex-row gap-1 lg:gap-4  "><img src="/images/telephone.webp" alt="telephone" className="w-4 lg:w-8"/><p className="h-full flex center">0681391608</p></div>
               
                </>}
        </div>
        <div className="w-1/2 flex flex-col  gap-2 center text-white">  
                <div className="w-[80%] h-[80%]">
                    <img src="/images/me.webp" alt="me" className="lg:h-full rounded-[2rem] lg:rounded-[4rem] mb-[20%] lg:mb-0"/>    
                </div>  
        </div>
                    
        </div>
        {isMobile && <>
         <div className="ml-[2%]  text-sm lg:text-lg text-white font-mt-bold flex flex-row gap-1 lg:gap-4  "><img src="/images/email.webp" alt="email" className="w-4 lg:w-8"/><p className="h-full flex center">matthieubarnab@gmail.com</p></div>
        <div className="ml-[2%] text-sm lg:text-lg text-white font-mt-bold flex flex-row gap-1 lg:gap-4  "><img src="/images/telephone.webp" alt="telephone" className="w-4 lg:w-8"/><p className="h-full flex center">0681391608</p></div>
               </>}
        </div>
}

export default Contact;