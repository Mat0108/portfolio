export const Contact = ()=>{
    return <div className="w-full h-full flex flex-row bg-dark-blue">
     
                <div className="w-1/2 flex flex-col gap-2 center text-6xl text-white font-mt-bold">
                    <div className="w-[70%] flex"><p className="w-1/2 text-left">Frontend</p></div>
                    <div className="w-[70%] flex -mt-8"><p className="w-[440px]">Developper</p></div>
                    <p className="w-[70%] text-lg font-mt ">Créer des expériences web esthétiques et fonctionnelles à l'aide de technologies modernes.</p>
                    <div className="w-[70%] text-lg flex flex-row gap-4  "><img src="/images/email.png" alt="email" className="w-8"/><p className="h-full flex center">matthieubarnab@gmail.com</p></div>
                    <div className="w-[70%] text-lg flex flex-row gap-4  "><img src="/images/telephone.png" alt="telephone" className="w-8"/><p className="h-full flex center">0681391608</p></div>
                    
                    
                </div>
                <div className="w-1/2 flex flex-col  gap-2 center text-white">  
                    <div className="w-[80%] h-[80%]">
                        <img src="/images/me.jpg" alt="me" className="h-full rounded-[4rem]"/>    
                    </div>  
            </div>
        </div>
}