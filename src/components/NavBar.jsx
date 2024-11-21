import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";


const NavBar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const toogleNavBar = () => {
    setMobileOpen(!mobileOpen)
  }

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


          <div className="lg:hidden md:flex flex-col justify-end">

            <button onClick={toogleNavBar}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
         </div>

        </div>

        {mobileOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center gap-y-8 lg:hidden">
              <ul>
                {navItems.map((item, index)=>(
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}

              </ul>
 
              <div className="flex gap-x-8">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-5 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
            </div>
        )}



      </div>
    </div>

  )
}


export default NavBar