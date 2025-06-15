import { PdfViewer } from "./PdfViewer"


export const CVDisplay = ()=>{
    return <div className="bg-blue_dark relative h-full pb-20 overflow-y-auto overflow-x-hidden custom-scrollbar" id={"Scrollref"}>
        <PdfViewer file={"/pdf/CV Matthieu Barnabe 2025.pdf"} title={'Mon cv'} filename={"CV Matthieu Barnabe 2025"}/></div>
}