import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "./Loading";
export function ScreenshotButton(){
    const [isTakingScreenshot, setTakingScreenshot] = useState(false);

    async function handleTakeScreenshot(){
        setTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64Image = canvas.toDataURL('image/png');

        console.log(base64Image);
        setTakingScreenshot(false);
    }   

    return (
        <button
            onClick={handleTakeScreenshot}
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
            {isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6"/>}
        </button>
    );
}