import Badge from "@/app/components/Badge";
import Card from "@/app/components/Card";
import Link from "next/link";

export default async function UserDetail({params}) {
  const res= await fetch(process.env.API_URL+'/users/'+params.id)
  const user= await res.json()
  const res_posts= await fetch(process.env.API_URL+'/users/'+params.id+'/posts')
  const posts= await res_posts.json()
  
  if(user.email){ 
    return(
      <main className="mx-auto max-w-3xl px-2 mt-24 sm:mt-28">
        <h1 className="font-medium text-gray-800 text-3xl mb-12 text-center ">{user.name}</h1>
        <table >
          <tbody>
            <tr>
              <td>Email</td>
              <td className="px-3"> : </td>
              <td><p className="text-gray-700">{user.email}</p></td>
            </tr>
            <tr>
              <td>Gender</td>
              <td className="px-3"> : </td>
              <td><p>{user.gender}</p></td>
            </tr>
            <tr>
              <td>Status</td>
              <td className="px-3"> : </td>
              <td><Badge status={user.status} /></td>
            </tr>
          </tbody>
        </table>
        <hr className="mt-16 border-gray-400"/>
        <div>
          <h1 className="text-gray-800 font-semibold text-xl sm:text-2xl my-4">Posts ({posts.length})</h1>
          {
            posts && posts.map(post => <Card key={post.id} data={post}/>)
          }
        </div>
      </main>
    )
  }
  else{
    return(
      <main className="mx-auto max-w-3xl px-2 mt-24 sm:mt-36 text-center">
        <h1 className="font-medium text-gray-800 text-3xl mb-6">User Not Found</h1>
        <p>The user with id <span className="font-medium">{params.id}</span> doesn&apos;t exist in our API data.</p>
        <p>Please back to users page</p>
        <Link
          href="/users"
          className="inline-block px-5 pt-2 pb-3 mt-6 text-sm font-medium text-white bg-sky-500 rounded-full hover:bg-sky-600 focus:outline-none focus:ring"
        >
          Back to users
        </Link>
      </main>
    )
  }
}