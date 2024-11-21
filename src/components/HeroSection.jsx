import { ArrowBigLeft, ArrowRight } from "lucide-react"

const HeroSection = () => {
  return <>
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-2xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className="flex justify-center mt-10 gap-x-6">
      <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="border flex gap-x-2 rounded-md px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent items-center">
          View Docs
          <ArrowRight className="text-white"/>
         
        </a>
      </div>

    </div>
  </>
}

export default HeroSection