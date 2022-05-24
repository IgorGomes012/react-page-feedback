import { CloseButton } from "../CloseButton";
// import cactoImageUrl from '../assets/cacto.png'
// import ideiaImageUrl from '../assets/lampada.png'
// import otherImageUrl from '../assets/mundo.png'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    //  Image:{
    //    source:cactoImageUrl,
    //    alt:'imagem de um cacto'
    //  }
  },
  IDEIA: {
    title: 'Ideia',
    // Image:{
    //   source:ideiaImageUrl,
    //   alt:'imagem de uma lampada'
    // }
  },
  OTHER: {
    title: 'Outro',
    //  Image:{
    //   source:otherImageUrl,
    //   alt:'imagem de um balão de planeta'
    // }
  },
}
export type FeedbackType = keyof typeof feedbackTypes;

// Objetct.entries (feedbackTypes)

// [
//    [BUG,{...}],
//    [IDEIA,...],
//    [OTHER,...]
// ]

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const[feedbackSent,setFeedbackSent] = useState(false)

  function handleRestartFeedback(){
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
     { feedbackSent ?(
       <FeedbackSuccessStep />
     ) : (
       <>
        {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
     ) : (
       <FeedbackContentStep 
       feedbackType={feedbackType}
       onFeedbackRestartRequested = {handleRestartFeedback}
       onFeedbackSent={()=> setFeedbackSent(true)}
       />
     )}
       </>
     )}

      {/* key e value foram desestruturados, poderia ser assim (item) que pegaria o value completo do array */}
    
      <footer className="text-xs text-neutral-400">
        feito com ♡. projeto da rockeseat
      </footer>
    </div>

  )
}