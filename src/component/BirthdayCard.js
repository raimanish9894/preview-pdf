import React,{useState,useRef} from 'react';
import { Document, Page } from 'react-pdf';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import happy from "../assets/format.jpg"
import "../component/style.css";

const BirthdayCard = () => {

    const [message, setMessage] = useState("");
    const pdfRef = useRef();

    const convertToPdf = async() => {
        const canvas = await html2canvas(pdfRef.current);
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("birthday-card.pdf");
    };


  return (
    <div className='main' >
    <div ref={pdfRef}>
    <img src={happy} alt='happy-birthday'  className='format-image'/>
        <p className='text-style'>{message}</p>
    </div>
        
        <input
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
            type='text'
            className='input-style'
        />
        <button onClick={convertToPdf}>convert to pdf</button>
    </div>
  )
}

export default BirthdayCard