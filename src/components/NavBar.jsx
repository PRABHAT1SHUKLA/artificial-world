import logo from "../assets/logo.png";


const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="contaniner px-8 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center">
           <img className="h-10 w-10 mr-2" src={logo} alt="logo"/> 
           <span className="text-lg font-bold tracking-tight">ArWorld</span>
          </div>

        </div>

      </div>
    </div>

  )
}


export default NavBar