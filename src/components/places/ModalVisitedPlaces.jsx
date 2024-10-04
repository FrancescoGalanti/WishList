import { useEffect, useRef } from "react"
import Button from "../UI/Button";


export default function ModalVisitedPlaces({ isOpen, placeName, handleCancel, handleDelete }) {

    const dialogRef = useRef(); // {}

    useEffect(() => {
        if (isOpen) {
            // showModal()
            dialogRef.current.showModal();
        } else {
            // close()
            dialogRef.current.close();
        }
    }, [isOpen]);

    return (
        <dialog className="w-full max-w-md p-4 rounded-md backdrop:bg-black/80 border-secondary border-4" ref={dialogRef} onClose={handleCancel}>
            <p className="pt-2 mb-3">Are you sure you want to delete {placeName}?</p>

            <div className="flex items-center justify-center gap-2">
                <Button onClick={handleDelete}>Remove</Button>
                <Button onClick={handleCancel}>Close</Button>
            </div>
        </dialog>
    )
}
