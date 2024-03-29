interface TemplateProps {
  children: React.ReactNode
}

export const Template = (props: TemplateProps) => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 px-4">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

const Header = () => {
  return (
    <header className="bg-indigo-950 text-white py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1>ImageLite</h1>
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-4 mt-8 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        Desenvolvido por Jonyelson Lopes
      </div>
    </footer>
  )
}