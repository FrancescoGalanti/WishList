import { Minus, Plus } from "lucide-react";

export default function PlaceListItem({element, onClick,action}) {
  return (
    <li onClick={onClick} className={`list-item-li ${action}`}>
      <h3 className="font-semibold text-sm absolute bottom-2 right-2 bg-secondary text-primaryDark px-2 py-1">{element.title}</h3>
      <img src={element.image.src} alt={element.image.alt} />
      {
        action === "add" ?  <Plus  color="white" className="bg-black/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/> : <Minus color="white" className="bg-black/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      }
     
    </li>
    
  )
}
