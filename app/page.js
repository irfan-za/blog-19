import Card from "./components/Card";
import Pagination from "./components/Pagination";

export default async function Home({searchParams}) {
  const page = searchParams['page'] ?? '1'
  const res= await fetch(process.env.API_URL+'/posts?page='+page)
  const posts= await res.json()

  const total_pages = res.headers.get('x-pagination-pages')
  const current_page= res.headers.get('x-pagination-page')
  const hasNextPage = parseInt(current_page) < total_pages ? true : false
  const hasPrevPage = res.headers.get('x-links-previous') !==''
  return (
    <main className="mx-auto max-w-3xl px-2 mt-20">
      {
        posts && posts.map(post => <Card key={post.id} data={post}/>)
      }
      <Pagination hasNextPage={hasNextPage} hasPrevPage={hasPrevPage} page={page} total_pages={total_pages} />
    </main>
  )
}
