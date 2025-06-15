import { useContext } from "react";
import { LanguageContext } from "../../../languages";

const switchtext=(params,action)=>{
  switch(params){
    case "presentation":
      return Presentation(action);
    case "apropos":
      return Apropos();
    case "apropos2":
      return Apropos2();
    case "produittitre":
      return Produittitre();
    case "produitcol1":
      return Produitcol1()
    case "produitcol2":
      return Produitcol2(); 
    case "produitcol3":
      return Produitcol3();
    case "quisommesnous":
      return Quisommesnous();
    case "quisommesnous2":
      return Quisommesnous2();
    case "quisommesnous3":
      return Quisommesnous3();
    case "quisommesnous4":
      return Quisommesnous4();
    case "Carousel1":
      return Carousel1();
    case "Carousel2":
      return Carousel2();
    case "Carousel3":
      return Carousel3();
    case "NotreHistoire":
      return NotreHistoire();
    case "EcoleDelphine":
      return EcoleDelphine();
    case "Commu":
      return Commu();
    case "Commu1":
      return Commu1();
    case "Expertise1":
      return Expertise1();
    case "Expertise2":
      return Expertise2();
    case "Expertise3":
      return Expertise3();
    case "ConseilCarousel1Image1":
      return ConseilCarousel1Image1();
    case "ConseilCarousel2Image1":
      return ConseilCarousel2Image1();
    case "ConseilCarousel2Image2":
      return ConseilCarousel2Image2();
    case "ConseilCarousel2Image3":
      return ConseilCarousel2Image3();
    case "ConseilCarousel4Image1":
      return ConseilCarousel4Image1();
    case "ConseilCarousel4Image2":
      return ConseilCarousel4Image2();
    case "ConseilCarousel4Image3":
      return ConseilCarousel4Image3();
    case "ExpertisePassion":
      return ExpertisePassion();
    case "VitamineC":
      return VitamineC();
    case "CremeSolaire":
      return CremeSolaire();
    case "AvoirUneBellePeau":
      return AvoirUneBellePeau();
    case "PeauParfaite":
      return PeauParfaite();
    default:
      return "Not Found";
  }
}
const Presentation = (action)=>{
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.presentation.po}</p>
      <p className="text-[10px] sm:text-[50px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.presentation.peau}</p>
      <p className="text-[8px] sm:text-[16px] mt-[30px] text-left ">{dictionnaire.TextDivers.presentation.slogan}</p>
      <p className="text-[8px] sm:text-[16px] mt-[10px] text-left ">{dictionnaire.TextDivers.presentation.accessibilite}</p>
      <p className="text-[8px] sm:text-[16px]  text-left ">{dictionnaire.TextDivers.presentation.formules}</p>
      <div className="mt-[20px] mb-[10px] text-[10px] sm:text-[30px] w-fit py-[4px] px-4 sm:px-8 sm:py-2 bg-[#83C5BE] rounded-full font-mt-extra-bold text-blue_poskin text-left hover:text-white hover:bg-blue hover:cursor-pointer" onClick={action}><p>{dictionnaire.TextDivers.presentation.newsletter}</p></div>
    </>
  )
}

const Apropos=()=>{
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <p className="mt-[35px] text-[12px] sm:text-[60px] font-mt-extra-bold text-blue_poskin text-left">{dictionnaire.TextDivers.apropos.titre}</p>
      <p className="mt-[20px] text-[8px] sm:text-[16px] text-left">{dictionnaire.TextDivers.apropos.collaborer}</p>
      <p className="text-[8px] sm:text-[16px] text-left">{dictionnaire.TextDivers.apropos.diagnostic}</p>
      <p className="text-[8px] sm:text-[16px] text-left">{dictionnaire.TextDivers.apropos.orientation}</p>
      <div className="mt-[20px] text-[10px] sm:text-[30px] w-fit px-4 sm:px-8 py-2 bg-[#83C5BE] rounded-full font-mt-extra-bold text-blue_poskin text-left hover:text-white hover:bg-blue"><p>{dictionnaire.TextDivers.apropos.en_savoir_plus}</p></div>
    </>
  )
}

const Apropos2 = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <p className="mt-[20px] text-[8px] sm:text-[16px] text-left w-[80%] sm:w-[65%] mx-auto">{dictionnaire.TextDivers.Apropos2.paragraphe1}</p>
      <p className="mt-[20px] text-[8px] sm:text-[16px] text-left w-[80%] sm:w-[65%] mx-auto">{dictionnaire.TextDivers.Apropos2.paragraphe2}</p>
      <div className="ml-[17%] mt-[20px] text-[10px] sm:text-[30px] w-fit px-4 sm:px-8 py-2 bg-[#83C5BE] rounded-full font-mt-extra-bold text-blue_poskin text-left hover:text-white hover:bg-blue"><p>{dictionnaire.TextDivers.Apropos2.enSavoirPlus}</p></div>
    </>
  );
};

const Produittitre = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <div className="row-start-1 flex flex-col center">
        <p className="text-blue_poskin text-[50px] font-mt-extra-bold">{dictionnaire.TextDivers.Produittitre.titre}</p>
        <p className="text-blue_poskin text-[16px]">{dictionnaire.TextDivers.Produittitre.description}</p>
      </div>
    </>
  );
};


const Produitcol1 = ()=>{
  const { dictionnaire } = useContext(LanguageContext);
  return(<>
  <p className="mx-auto mt-[35px] w-[350px] text-[30px] font-mt-extra-bold text-blue_poskin text-left">{dictionnaire.TextDivers.Produitcol1.title}</p>
  <p className="mx-auto mt-[20px] w-[350px] text-[16px] text-left">{dictionnaire.TextDivers.Produitcol1.subtitle}</p>
  <p className="mx-auto mt-[10px] w-[350px] text-[16px] text-left">{dictionnaire.TextDivers.Produitcol1.description}</p>
  <div className="w-[270px] mt-[30px] flex flex-row center">
      <div className="text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-mt-extra-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>{dictionnaire.Produitcol1.buttonText}</p></div>    
  </div>
  </>)
}

const Produitcol2 = ()=>{
  const { dictionnaire } = useContext(LanguageContext);
  return (<>
  <p className="mx-auto mt-[35px] w-[350px] text-[30px] font-mt-extra-bold text-blue_poskin text-left">{dictionnaire.TextDivers.Produitcol2.title}</p>
  <p className="mx-auto text-[30px] w-[350px] font-mt-extra-bold text-blue_poskin text-left">{dictionnaire.TextDivers.Produitcol2.subtitle}</p>
  <p className="mx-auto mt-[10px] w-[350px] text-[16px] text-left ">{dictionnaire.TextDivers.Produitcol2.description}</p>
  <div className="w-[340px] mt-[10px] flex flex-row center">
      <div className="text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-mt-extra-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>{dictionnaire.Produitcol2.buttonText}</p></div>    
  </div>
  </>)
}

const Produitcol3 = () =>{
  const { dictionnaire } = useContext(LanguageContext);
  return (<>
  <p className="mx-auto mt-[35px] w-[350px] text-[30px] font-mt-extra-bold text-blue_poskin text-left">{dictionnaire.TextDivers.Produitcol3.title}</p>
  <p className="mx-auto mt-[20px] w-[350px] text-[16px] text-left ">{dictionnaire.TextDivers.Produitcol3.subtitle}</p>
  <p className="mx-auto mt-[10px] w-[350px] text-[16px] text-left ">{dictionnaire.TextDivers.Produitcol3.description}</p>
  <div className="w-[330px] mt-[10px] flex flex-row center">
      <div className="text-[20px] w-fit px-4 py-2 bg-[#83C5BE] rounded-3xl font-mt-extra-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>{dictionnaire.Produitcol3.buttonText}</p></div>    
  </div>
  </>)
}


const Quisommesnous = () =>{
  const { dictionnaire } = useContext(LanguageContext);
  return (<>
    
    <p className="text-[25px] sm:text-[50px] font-mt-extra-bold text-blue_poskin text-left mt-[4%] ">{dictionnaire.TextDivers.Quisommesnous.key1}</p>
    <p className="text-[25px] sm:text-[50px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.Quisommesnous.key2}</p>
    <div className="sm:w-[85%] h-full text-left text-[12px] sm:text-[16px]">
      <p className="mt-[20px]">{dictionnaire.TextDivers.Quisommesnous.key3}</p>
      <p className="mt-[20px]">{dictionnaire.TextDivers.Quisommesnous.key4}</p>
      <p className="mt-[20px]">{dictionnaire.TextDivers.Quisommesnous.key5}</p> 
    </div>
  <div className="mt-[20px] left-0 w-full"><div className="w-full sm:w-[80%]  flex center"><div className="ml-[10px] text-[15px] sm:text-[30px] w-fit px-6 py-2 bg-[#83C5BE] rounded-full font-mt-extra-bold text-[#264C4D] text-left hover:text-white hover:bg-blue"><p>En savoir plus</p></div></div>   
  </div>
  </>)
}
const Quisommesnous2 = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (<>
    <p className="text-[25px] sm:text-[50px] font-mt-extra-bold text-blue_poskin text-center w-full">{dictionnaire.TextDivers.Quisommesnous2.key1}</p>
  </>);
};

const Quisommesnous3 = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (<div className="sm:w-[450px]">
    <p className="mt-[32px] mb-[32px] text-[12px] sm:text-[24px] font-mt-extra-bold text-blue_poskin text-center w-full">{dictionnaire.TextDivers.Quisommesnous3.key1}</p>
    <div className=""><p className="mt-[32px] mb-[32px] text-[12px] sm:text-[16px] font-mt-bold text-blue_poskin text-center w-full">{dictionnaire.TextDivers.Quisommesnous3.key2}</p>
    </div>
  </div>);
};

const Quisommesnous4 = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (<div className="sm:w-[450px]">
    <p className="mt-[32px] mb-[32px] text-[24px] font-mt-extra-bold text-blue_poskin text-center w-full">{dictionnaire.TextDivers.Quisommesnous4.key1}</p>
    <div className=""><p className="mt-[32px] mb-[32px] text-[12px] sm:text-[16px] font-mt-bold text-blue_poskin text-center w-full">{dictionnaire.TextDivers.Quisommesnous4.key2}</p>
    </div>
  </div>);
};

const Carousel1 = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <p className="mt-[6px] sm:mt-[20px] text-[8px] sm:text-[16px] font-mt-extra-bold text-blue">{dictionnaire.TextDivers.carousel1.key}</p>
      <div className="h-[120px]">
        <p className="text-[8px] sm:text-[16px] mt-[5px]">{dictionnaire.TextDivers.carousel1.subKey1}</p>
        <p className="text-[8px] sm:text-[16px]">{dictionnaire.TextDivers.carousel1.subKey2}</p>
      </div>
    </>
  );
};

const Carousel2 = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <p className="mt-[20px] text-[8px] sm:text-[16px] font-mt-extra-bold text-blue">{dictionnaire.TextDivers.carousel2.key}</p>
      <p className="text-[8px] sm:text-[16px] w-[80%] mx-auto mt-[5px] h-[120px]">{dictionnaire.TextDivers.carousel2.subKey}</p>
    </>
  );
};

const Carousel3 = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <p className="mt-[20px] text-[8px] sm:text-[16px] font-mt-extra-bold text-blue">{dictionnaire.TextDivers.carousel3.key}</p>
      <p className="text-[8px] sm:text-[16px] w-[80%] mx-auto mt-[5px] h-[120px]">{dictionnaire.TextDivers.carousel3.subKey}</p>
    </>
  );
};

const NotreHistoire = ()=>{
  const { dictionnaire } = useContext(LanguageContext);
  return <div className="sm:w-[90%] mb-[10px]">
      <p className="text-[25px] sm:text-[50px] font-mt-extra-bold text-left ">{dictionnaire.TextDivers.NotreHistoire.NosExperts}</p>
      <p className="text-[12px] sm:text-[16px] text-justify mt-[20px] sm:mt-[50px]">{dictionnaire.TextDivers.NotreHistoire.PlongezDansLUnivers}</p>
      </div>
}
const ExpertisePassion = ()=>{
  const { dictionnaire } = useContext(LanguageContext);
return <div className="sm:w-[90%]">
      <p className="text-[25px] sm:text-[50px] font-mt-extra-bold text-left ">{dictionnaire.TextDivers.ExpertisePassion.UneExpertiseUnePassion}</p>
      <p className="text-[16px] text-justify mt-[40px]">{dictionnaire.TextDivers.ExpertisePassion.NosExpertsFacialistes}</p>
      <p className="text-[16px] text-justify mt-[10px]">{dictionnaire.TextDivers.ExpertisePassion.GrâceÀLeurExpérience}</p> 
      <p className="text-[16px] text-justify  mt-[10px]">{dictionnaire.TextDivers.ExpertisePassion.FaitesConfianceÀNosExperts}</p>
  </div>
}
const EcoleDelphine = ()=>{
  const { dictionnaire } = useContext(LanguageContext);
  return <div className="sm:w-[80%] sm:ml-[30px] mt-[5px]">
      <p className="text-[20px] sm:text-[40px] font-mt-extra-bold text-left ">{dictionnaire.TextDivers.EcoleDelphine.EcoleDelphineLanglois}</p>
      <p className="text-[20px] sm:text-[40px] font-mt-extra-bold text-left ">{dictionnaire.TextDivers.EcoleDelphine.FacialisteParis}</p>
      <p className="text-[12px] sm:text-[16px] text-justify mt-[30px]">{dictionnaire.TextDivers.EcoleDelphine.NosExpertsEnSoinsDeLaPeau}</p>
      <p className="text-[12px] sm:text-[16px] text-justify mt-[10px]">{dictionnaire.TextDivers.EcoleDelphine.EnCollaborantAvecDesExperts}</p>
      <div className="flex center"><div className="mt-[20px] text-[15px] sm:text-[30px] w-fit px-4 sm:px-8 py-2 sm:py-4 bg-[#83C5BE] rounded-full font-mt-extra-bold text-blue_poskin text-left hover:text-white hover:bg-blue"><p>{dictionnaire.TextDivers.EcoleDelphine.EnSavoirPlus}</p></div>
      </div>
  </div>
}

const Commu = ()=>{
  const { dictionnaire } = useContext(LanguageContext);
  return <div className="w-[100%] mt-[10px]">
    <p className="text-[22px]">
      {dictionnaire.TextDivers.Commu.key}
      <br />
      {dictionnaire.TextDivers.Commu.key2}
    </p>
 </div>
};

const Commu1 = ()=>{
  const { dictionnaire } = useContext(LanguageContext);
  return <>
  <div className="font-mt-extra-bold text-[28px]">
    {dictionnaire.TextDivers.Commu1.key}
  </div>
  <div className="text-[22px] mt-[10px]">
    {dictionnaire.TextDivers.Commu1.key2}
  </div>
  </>
};
const Expertise1 = ()=>{
  const { dictionnaire } = useContext(LanguageContext);
  return <div className="w-full flex flex-col center">
   <p className="text-[15px] sm:text-[30px] bg-[#264C4D] font-mt-bold text-center text-white w-[312px] p-2">{dictionnaire.TextDivers.Expertise1.key1}</p>
   <p className="text-[12px] sm:text-[16px] bg-[#264C4D] font-mt-bold text-justify  text-white w-[312px] h-[160px] sm:h-[300px] px-4 pb-10">{dictionnaire.TextDivers.Expertise1.key2}</p>
  </div>
}

const Expertise2 = ()=>{
  const { dictionnaire } = useContext(LanguageContext);
  return <div className="w-full flex flex-col center">
   <p className="text-[15px] sm:text-[30px] bg-[#264C4D] font-mt-bold text-center text-white w-[312px] p-2">{dictionnaire.TextDivers.Expertise2.key1}</p>
   <p className="text-[12px] sm:text-[16px] bg-[#264C4D] font-mt-bold text-justify  text-white w-[312px] h-[160px] sm:h-[300px] px-4 pb-10">{dictionnaire.TextDivers.Expertise2.key2}</p>
  </div>
}

const Expertise3 = ()=>{
  const { dictionnaire } = useContext(LanguageContext);
  return <div className="w-full flex flex-col center">
   <p className="text-[15px] sm:text-[30px] bg-[#264C4D] font-mt-bold text-center text-white w-[312px] p-2">{dictionnaire.TextDivers.Expertise3.key1}</p>
   <p className="text-[12px] sm:text-[16px] bg-[#264C4D] font-mt-bold text-justify  text-white w-[312px] h-[160px] sm:h-[300px] px-4 pb-10">{dictionnaire.TextDivers.Expertise3.key2}</p>
  </div>
}

// PAGES CONSEILS & ASTUCES

//Carousel1
const ConseilCarousel1Image1 = () =>{
  const { dictionnaire } = useContext(LanguageContext);
  return (<>
    <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel1Image1.key}</p>
    <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel1Image1.key2}</p>
  </>);
}

const ConseilCarousel2Image1 = () =>{
  const { dictionnaire } = useContext(LanguageContext);
  return (<>
    <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel2Image1.key}</p>
    <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel2Image1.key2}</p>
  </>);
}

const ConseilCarousel2Image2 = () =>{
  const { dictionnaire } = useContext(LanguageContext);
  return (<>
    <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel2Image2.key}</p>
    <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel2Image2.key2}</p>
  </>);
}

const ConseilCarousel2Image3 = () =>{
  const { dictionnaire } = useContext(LanguageContext);
  return (<>
    <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel2Image3.key}</p>
    <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel2Image3.key2}</p>
  </>);
}

// Carousel 3

//Carousel 4
const ConseilCarousel4Image1 = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel4Image1.key}</p>
      <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel4Image1.key2}</p>
    </>
  );
};

const ConseilCarousel4Image2 = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel4Image2.key}</p>
      <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel4Image2.key2}</p>
    </>
  );
};

const ConseilCarousel4Image3 = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel4Image3.key}</p>
      <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.ConseilCarousel4Image3.key2}</p>
    </>
  );
};
const VitamineC = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <div className="h-[100px] sm:h-[150px] flex center flex-col">
        <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.VitamineC.key}</p>
        <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.VitamineC.key2}</p>
      </div>
    </>
  );
};

const CremeSolaire = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <div className="h-[100px] sm:h-[150px] flex center flex-col">
        <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.CremeSolaire.key}</p>
        <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.CremeSolaire.key2}</p>
      </div>
    </>
  );
};

const AvoirUneBellePeau = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <div className="h-[100px] sm:h-[150px] flex center flex-col">
        <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.AvoirUneBellePeau.key}</p>
        <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.AvoirUneBellePeau.key2}</p>
      </div>
    </>
  );
};

const PeauParfaite = () => {
  const { dictionnaire } = useContext(LanguageContext);
  return (
    <>
      <div className="h-[100px] sm:h-[150px] flex center flex-col">
        <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.PeauParfaite.key}</p>
        <p className="text-[20px] sm:text-[100px] font-mt-extra-bold text-blue_poskin text-left ">{dictionnaire.TextDivers.PeauParfaite.key2}</p>
      </div>
    </>
  );
};
// PAGES CONSEILS & ASTUCES
export {switchtext}