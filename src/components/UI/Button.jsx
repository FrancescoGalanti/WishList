

export default function Button({ children, ...props }) {
    return (
        <button {...props} className="text-secondary bg-primary font-semibold  px-2 py-1 hover:ring-2  hover:ring-secondary hover:ring-offset-2 transition-all rounded" >
            {children}
        </button>
    )
}
