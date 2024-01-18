import Link from "next/link"

export default async function Home() {
  const res= await fetch(process.env.API_URL+'/users')
  const users= await res.json()
  return (
    <main className="mx-auto max-w-3xl px-2 mt-24 sm:mt-28">
      <table className="border border-gray-400  rounded-full">
        <thead>
          <tr className="grid grid-cols-6 gap-3 mx-auto py-1">
            <th className="font-medium col-span-3">Name</th>
            <th className="font-medium">Gender</th>
            <th className="font-medium">Status</th>
            <th className="font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => {
            return (
            <tr key={user.id} className="grid grid-cols-6 gap-3 p-2 border-t border-gray-400 mx-auto">
              <td className="col-span-3">{user.name}</td>
              <td>{user.gender}</td>
              <td><span className={`${user.status==='active' ? 'bg-green-400' : 'bg-red-400'} rounded-full px-3 pb-1 text-white text-sm`}>{user.status}</span></td>
              <td className="text-end pr-2 text-sky-500 hover:text-sky-600 font-medium"><Link href={`/users${user.id}`}>Detail</Link></td>
            </tr>)
            })
          }
        </tbody>
      </table>
    </main>
  )
}
