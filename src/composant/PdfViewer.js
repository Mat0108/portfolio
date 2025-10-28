import React, { useContext, useEffect, useMemo, useState } from 'react';
import { pdfjs, Document, Page,  } from 'react-pdf';

import { PDFDownloadLink } from '@react-pdf/renderer';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PdfViewer = ({file,title,filename}) => {
    const [pageNumber, setPageNumber] = useState(1);

    const isMobile = window.screen.width < 600;
    const downloadPdf = () => {
    const link = document.createElement('a');
        link.href = file
        link.download = filename;
        link.click();
    };
    const element = useMemo(() => {

        function onDocumentLoadSuccess(numPages){

            console.log('numPages : ', numPages._pdfInfo.numPages)
            setPageNumber(numPages._pdfInfo.numPages);
        }
        return <div className='relative '>
        <div className='w-full text-white text-[12px] sm:text-[20px] text-center mb-3 mr-3' >
            {title}  
           <div className="absolute right-0 -top-[4px] w-fit h-fit bg-russet p-2 rounded-lg" onClick={downloadPdf}><img src={"/images/downloads.png"} alt={"downloads"} className="w-3 sm:w-6 h-3 sm:h-6"/></div>
           
        </div>
        

        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
             <Page 
                renderTextLayer={false}
                renderAnnotationLayer={true}
                pageNumber={pageNumber} 
                scale={isMobile ? 0.6 : 0.95}/>
        </Document>
       
    </div>
    }, [pageNumber,title])
    return (
        <div className='w-full h-full flex center mt-0 lg:mt-4'>
            <div className='bg-black p-4 rounded-3xl w-fit h-fit '>
                {element}
            </div>
      </div>
    )
}

