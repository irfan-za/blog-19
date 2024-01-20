
import TableData from "../components/TableData"

export default async function Home() {
  const res= await fetch(process.env.API_URL+'/users',{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/json',  
    },
    next: { revalidate: 5 },
  })
  const users= await res.json()

  return (
    <main className="mx-auto max-w-3xl px-2 mt-24 sm:mt-28">
      <TableData users={users} />
    </main>
  )
}
