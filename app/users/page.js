
import Pagination from "../components/Pagination"
import TableData from "../components/TableData"

export default async function Users({searchParams}) {
  const page = searchParams['page'] ?? '1'
  const res= await fetch(process.env.API_URL+'/users?page='+page,{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/json',  
    },
    next: { revalidate: 5 },
  })
  
  const users= await res.json()
  const total_pages = res.headers.get('x-pagination-pages')
  const current_page= res.headers.get('x-pagination-page')
  const hasNextPage = parseInt(current_page) < total_pages ? true : false
  const hasPrevPage = res.headers.get('x-links-previous') !==''

  return (
    <main className="mx-auto max-w-3xl px-2 mt-24 sm:mt-28">
      <TableData users={users} />
      <Pagination hasNextPage={hasNextPage} hasPrevPage={hasPrevPage} page={page} total_pages={total_pages} />
    </main>
  )
}
