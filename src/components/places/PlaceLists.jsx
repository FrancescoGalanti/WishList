import { useContext } from 'react';
import { AVAILABLE_PLACES } from '../../data/places';
import { PlaceContext } from '../context/ContextVisitedPlaces';
import PlaceListItem from './PlaceListItem';
import SectionMain from '../layout/SectionMain';

export default function PlaceLists() {

  const { visitedPlaces, dispatch } = useContext(PlaceContext)

  function isVisited(place) {

    return visitedPlaces.find(visitedPlace => place.id === visitedPlace.id);
  }

  return (
    <SectionMain title="Available Places" >
      <ul className='  container grid grid-cols-4 gap-6'>
        {

          AVAILABLE_PLACES.map(element =>
            !isVisited(element) ? (
              <PlaceListItem action="add" element={element} key={element.id} onClick={() => dispatch({ type: 'ADD_PLACES', payload: element })} />
            ) : null
          )
        }

      </ul>
    </SectionMain>
  )
}
