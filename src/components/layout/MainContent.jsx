
import PlaceLists from "../places/PlaceLists";
import VisitedPlacesList from "../places/VisitedPlacesList";
import ContextVisitedPlaces from "../context/ContextVisitedPlaces";

export default function MainContent() {
  return (
    <main className="grow">
      <ContextVisitedPlaces>
        <VisitedPlacesList />

        <PlaceLists />
      </ContextVisitedPlaces>
    </main>
  )
}
