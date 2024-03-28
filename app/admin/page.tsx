import authOptions from "@/utils/authOptions"
import supabaseClient from "@/utils/supabase-connect"
import { getServerSession } from "next-auth"


export default async function Admin() {
  const session = await getServerSession(authOptions as Object)
  const email = session?.user?.email
  const {data: user} = await supabaseClient.from("users").select("role").eq("email",email)
  const {data} = await supabaseClient.from("users").select("*")

  if(email && user && user[0].role === "admin") {
    return (
      <>
      {data ? (
          // data.map((data: { id: any,name: String, email: String, role: String, active: boolean}) => (
          //   <div key={data.id} className="group flex flex-col h-full items-center justify-center text-center rounded-lg bg-gray-300 p-4 sm:p-6  focus:outline-none focus:ring-1">
          //   <div className="mt-5 w-full h-full flex flex-row items-center justify-center gap-2">
          //     <p className='text-xl text-black'>{data.email}</p> 
          //     <p className='text-xl text-black'>{data.name}</p> 
          //     <p className='text-xl text-black'>{data.active}</p> 
          //     <p className='text-xl text-black'>{data.role}</p> 
          //   </div>
          // </div>
          //   ))
          <div className="container mx-auto mt-8 text-center max-sm:p-2">
          <div className='py-5 pb-10'>
              <h1 className='text-5xl'>All Users </h1>
          </div>
        <table className="min-w-full bg-white border border-black text-black">
          <thead>
            <tr>
            <th className="py-2 px-4 border-b border-r">ID</th>
              <th className="py-2 px-4 border-b border-r">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-r">{user.id}</td>
                <td className="py-2 px-4 border-b border-r">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">{user.active}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ) : (
        <></>
      )}
      </>
    )
  }
        return (
            <>
         not admin
            </>
    )
    
}