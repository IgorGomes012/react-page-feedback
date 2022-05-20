import { CloseButton } from "./CloseButton";

import cactoImageUrl from '../assets/cacto.png'
import ideiaImageUrl from '../assets/lampada.png'
import otherImageUrl from '../assets/mundo.png'

const feedbackTypes = {
  BUG:{
     title:'Problema',
    //  Image:{
    //    source:cactoImageUrl,
    //    alt:'imagem de um cacto'
    //  }
  },
  IDEIA:{
    title: 'Ideia',
    // Image:{
    //   source:ideiaImageUrl,
    //   alt:'imagem de uma lampada'
    // }
  },
  OTHER:{
     title: 'Outro',
    //  Image:{
    //   source:otherImageUrl,
    //   alt:'imagem de um balão de planeta'
    // }
  },
}

// Objetct.entries (feedbackTypes)

// [
//    [BUG,{...}],
//    [IDEIA,...],
//    [OTHER,...]
// ]

export function WidgetForm() {



  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">deixe seu feedback</span>
        <CloseButton/>
      </header>

{/* key e value foram desestruturados, poderia ser assim (item) que pegaria o value completo do array */}
      <div className="flex py-8 gap-2 w-full">
         { Object.entries(feedbackTypes).map(([key, value]) =>{
           return (
              <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              // onClick={}
              type="button"
              >
                {/* <img src={value.Image.source} alt={value.Image.alt} /> */}
                <span>{value.title}</span>
              </button>
           );
         })}
      </div>

      <footer className="text-xs text-neutral-400">
         feito com ♡
      </footer>
    </div>

  )
}