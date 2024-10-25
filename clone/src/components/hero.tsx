

export default function Hero() {
    return(
        <>
        <div className="py-24 bg-gradient-to-b from-[#011c3a] to-[#013777] justify-items-center">
            <div className=" w-full sm:w-3/4  flex flex-col gap-8">
                <div>
                    <h1 className=" text-white text-center text-4xl font-medium">Find Used Cars in Pakistan</h1>
                    <p className="text-white text-center text-lg font-medium">With thousands of cars , we have just the right one for you</p>
                </div>
                <div className=" mx-auto">
                    <form>
                    <input type="text" placeholder="Car Make or Model" name="" id="" className="p-2 md:p-3 lg:p-4 rounded-l-md"/>
                   <input type="text" placeholder="All Cities" name="" id="" className="hidden md:p-3 md:inline lg:p-4"/>
                   <input type="text" placeholder="Price Range" name="" id="" className="hidden lg:inline lg:p-4 " />
                   <button className="rounded-r-md bg-[green] p-2 md:p-3 lg:p-4 text-white">Search</button>
                    </form>
                </div>
                <div className=" mx-auto">
                    <button className="px-2 border text-white text-lg border-white">Advanced Filter </button></div>
            </div>
        </div>
        </>
    )
}