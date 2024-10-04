
const sectionTheme = {
  default: '',
  primary: 'bg-secondary text-primary',
  secondary: 'bg-black text-secondary'
}


export default function SectionMain({ children, title, text, theme = 'default' }) {

  return (
    <section className={`text-center py-12  ${sectionTheme[theme]} ${theme === 'default' ? "text-secondary" : ''}`}>
      <h2 className="text-3xl font-semibold pb-6">{title}</h2>
      {text &&
        <p className="text-sm pb-6 text-">
          {text}
        </p>
      }

      {children}
    </section>
  )
}
