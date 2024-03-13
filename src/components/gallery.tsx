import { sculptureList } from "@/data/article";
import { useState } from 'react';

export default function Gallery(){
    const [index, setIndex] = useState(0); //index data dimulai dari 0

    function handleClick(){
        if (index < 4){
            setIndex(index + 1); //counter index + 1, untuk melihat data selanjutnya
        }   
    }

    function handlePrevClick(){
        if (index > 0) {
            setIndex(index - 1);
          } //counter index - 1, untuk melihat data sebelumnya
    }

    let sculpture = sculptureList[index]; // membaca data sesuai index

    return(
        <>
        <button onClick={handlePrevClick} className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded">
            Artikel Sebelumnya</button>
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded">
            Artikel Selanjutnya</button>
            
            <h2><i>{sculpture.name}</i> oleh {sculpture.artist}</h2>
            
            <h3>({index + 1} dari {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
            
        </>
    );
}