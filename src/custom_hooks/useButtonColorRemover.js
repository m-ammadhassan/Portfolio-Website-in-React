import { useEffect } from 'react';

export function useButtonColorRemover()
{
    useEffect( ()=>{

        let submitButton = document.querySelector(".submit-btn");

        submitButton.classList.remove("btn-primary");
    
    } );
}