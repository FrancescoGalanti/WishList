import { createContext, useEffect, useReducer } from "react"

export const PlaceContext = createContext()

const InitialVisitedPlaces = {
    items: []
};


function visitedPlacesReduce(state, action) {
    switch (action.type) {
        case 'ADD_PLACES':
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case 'REMOVE_PLACE':
            return {
                ...state,
                items: state.items.filter(visitedPlace => visitedPlace.id !== action.payload)
            }
        default:
            console.log(`invalid action ${action.type} for visitedPlacesReduce`)
            return state;

    }
}


export default function ContextVisitedPlaces({ children }) {


    const [state, dispatch] = useReducer(visitedPlacesReduce, InitialVisitedPlaces, () => {
        return {
            ...InitialVisitedPlaces,
            items: localStorage.getItem('visitedPlaces') ? JSON.parse(localStorage.getItem('visitedPlaces')) : InitialVisitedPlaces.items
        }
    })

    useEffect(() => {
        localStorage.setItem('visitedPlaces', JSON.stringify(state.items))
    }, [state.items])


    return (
        <PlaceContext.Provider value={{ visitedPlaces: state.items, dispatch }}>
            {children}
        </PlaceContext.Provider>
    )
}
