import logo from "../assets/logo.png";
import { navItems } from "../constants";


const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="contaniner px-8 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-lg font-bold tracking-tight">ArWorld</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => [
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>

            ])}
        </ul>

        <div className="hidden lg:flex space-x-12 items-center">
           <a href="#" className="border rounded-md py-2 px-3">
              SignUp
           </a>
           <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>

           
        </div>


        </div>

      </div>
    </div>

  )
}


export default NavBar