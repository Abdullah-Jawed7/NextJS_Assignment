import { ICustomer } from "@/lib/type"

export default async function DynamicUserPage({params}:{params:{
    id:string
}}){
    
   const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
   const data:ICustomer = await user.json()
    return(
        <div className="bg-white min-h-screen">
            <h1 className=" text-5xl md:text-7xl text-center underline py-7 ">Customer Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full px-8 md:px-16 lg:px-32 py-12 ">
                <div className=" bg-green-100 p-5  my-5 mx-2  md:m-5 border-2 border-black rounded-xl">
                    <h1 className="text-2xl underline font-bold mb-3 ">Personal Details:</h1>
                    <div className=" space-y-2">
                        <p>User Name: {data.username}</p>
                        <p>Name: {data.name}</p>
                        <p>Email: {data.email}</p>
                        <p>Phone: {data.phone}</p>
                    </div>
                </div>
                <div className=" bg-green-100 p-5 my-5 mx-2  md:m-5 border-2 border-black rounded-xl">
                    <h1 className="text-2xl underline font-bold mb-3">Address:</h1>
                    <div className=" space-y-2">
                        <p>ZipCode: {data.address.zipcode}</p>
                        <p>Street: {data.address.street} {data.address.suite}</p>
                        <p>City: {data.address.city}</p>
                        <p>Geo: {data.address.geo.lat} {data.address.geo.lng}</p>
                    </div>
                </div>
                <div className=" bg-green-100 p-5 my-5 mx-2 md:m-5 border-2 border-black rounded-xl">
                    <h1 className="text-2xl underline font-bold mb-3"    >Company:</h1>
                    <div className=" space-y-2">
                        <p>Company Name:{data.company.name}</p>
                        <p>Company Bs:{data.company.bs}</p>
                        <p>Company CatchPhrase:{data.company.catchPhrase}</p>
                        <p>Website:{data.website}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}