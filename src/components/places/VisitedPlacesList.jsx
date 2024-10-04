import { useContext, useState } from "react";
import PlaceListItem from "./PlaceListItem";
import ModalVisitedPlaces from "./ModalVisitedPlaces";
import { PlaceContext } from "../context/ContextVisitedPlaces";
import SectionMain from "../layout/SectionMain";


export default function VisitedPlacesList() {

  const { visitedPlaces, dispatch } = useContext(PlaceContext)

  const visitedPlacesText = visitedPlaces.length === 0 ? 'Click an available place from the section below' : null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  const toDeleteTitle = toDelete?.title;

  function handleConfirmation(place) {
    console.log("array", place);

    setIsModalOpen(true);
    setToDelete(place)

  }

  function handleCancel() {
    setIsModalOpen(false);
    setToDelete(null);

  }

  function handleDelete() {
    dispatch({ type: 'REMOVE_PLACE', payload: toDelete.id });
    handleCancel();

  }

  return (

    <SectionMain title="I'd like to visit..." text={visitedPlacesText} theme="primary">
      <ul className="grid grid-cols-4 container gap-4">
        {
          visitedPlaces.map(element => (
            <PlaceListItem action="remove" key={element.id} element={element} onClick={() => handleConfirmation(element)} />
          ))
        }
      </ul>
      <ModalVisitedPlaces handleDelete={handleDelete} handleCancel={handleCancel} isOpen={isModalOpen} placeName={toDeleteTitle} />


    </SectionMain>


  )
}
