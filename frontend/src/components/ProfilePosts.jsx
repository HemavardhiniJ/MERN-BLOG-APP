

export const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
     <img src="tech.avif" alt="" className="h-full w-full object-cover" />
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
       <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
        10 Uses of Artificial intelligence in day to day life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@hemadev</p>
          <div className="flex space-x-2 text-sm">
            <p>16/06/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, earum atque cum odio pariatur tenetur consequatur ducimus eaque explicabo odit eius perspiciatis iure voluptas quam itaque.</p>
    </div>
    </div>
  )
}
