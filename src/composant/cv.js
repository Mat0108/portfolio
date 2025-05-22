import { PdfViewer } from "./PdfViewer"


export const CVDisplay = ()=>{
    return <PdfViewer file={"/pdf/CV Matthieu Barnabe 2025.pdf"} title={'Mon cv'} filename={"CV Matthieu Barnabe 2025"}/>
}