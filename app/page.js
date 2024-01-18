import Card from "./components/Card";

export default async function Home() {
  const res= await fetch(process.env.API_URL+'/posts')
  const posts= await res.json()
  return (
    <main className="mx-auto max-w-3xl px-2 mt-20">
      {
        posts.map(post => <Card key={post.id} data={post}/>)
      }
    </main>
  )
}
