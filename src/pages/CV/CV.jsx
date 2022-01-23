import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import './CV.css'

import cv from '../../assets/CV/CV BOUKEZZATA Aymen 2022.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV = () => {
    return (
        <div className='cv w-100'>
            <h1 className='fw-bolder text-light-gray titre mt-5'>Mon CV</h1>
            <div className='pdf d-flex justify-content-center w-100'>
                <Document file={cv}>
                    <Page pageNumber={1}></Page>
                </Document>
            </div>
        </div>
    );
};

export default CV;