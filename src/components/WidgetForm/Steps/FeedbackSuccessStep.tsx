import { CloseButton } from "../../CloseButton";

export function FeedbackSuccessStep(){
  return(
   <>
   <header>
     <CloseButton />
   </header>

   <div className="flex flex-col items-center py-10 w-[304px]">
   <h1>Success</h1>
   </div>
   </>
  )
}