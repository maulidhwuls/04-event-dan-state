import exp from "constants";
import { useState } from "react";

export default function Form(){
    const [jawaban, setJawaban] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success'){
        return <h1>Yay, jawaban benar !! </h1>
    }

    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(jawaban);
            setStatus('success');
        }   catch (error) {
            setStatus('typing');
            setError(error);
        }
        
    }

    function handleTextareaChange(e){
        setJawaban(e.target.value);
    }

    return(
        <>
        <div className="w-full max-w-xs">
            <h2> Tebak Nama Hewan </h2>
            <p> Hewan apa yang ditakuti oleh doraemon?</p>
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
            onSubmit={handleSubmit}>
            <textarea 
                value={jawaban} 
                onChange={handleTextareaChange} 
                disabled={status === 'submitting'}
            />
            <br />
            <button 
                className="bg-blue-400 p-2 m-2 rounded text-sm text-white"
                disabled={jawaban.length === 0 || status === 'submitting'}>
                Submit
            </button>
            {error !== null && <p className="Error text-red-500 text-sm">{error.message}</p>}
            </form>

        </div>
        </>
    );
}

export function Form_2(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullname = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    return(
        <>
        <h2>Silakan isi nama lengkap anda</h2>
        <label className="block w-full m-2">
            Nama depan:
            <input className="text-sm text-black ml-2 rounded"
            value={firstName}
            onChange={handleFirstNameChange} 
            />
        </label>

        <label className="block w-full m-2">
            Nama belakang: 
            <input className="text-sm text-black ml-2 rounded"
            value={lastName}
            onChange={handleLastNameChange} 
            />
        </label>
        <p>Nama lengkap anda adalah : <b className="text-blue-600">{fullname}</b></p>
        </>
    );
}

function submitForm(jawaban) {
    return new Promise<void>((resolve, reject) => {
        setTimeout (() => {
            let shouldError = jawaban.toLowerCase() !== 'tikus'
            if (shouldError) {
                reject(new Error('tebakan yang bagus tapi jawaban salah. Silakan coba lagi!'));
            } else {
                resolve();
            }
        }, 500);
    });
}