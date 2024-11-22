import { features } from "../constants"

const FeatureSec = () => {

  return (
    <div className="relative border-b mt-20 border-neutral-800 min-h-[600px]">
      <div className=" text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-lg font-medium px-2 py-1 uppercase">
          Feature
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide ">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>

      </div>
    
     <div className="flex ">
      {features.map((feature , index)=>(
        <div key={index}>
          <div className="flex">
          <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  )


}

export default FeatureSec