import Link from "next/link"

async function Card({data}) {
  const res= await fetch(process.env.API_URL + '/users/'+data.user_id)
  const user= await res.json()
  return (
    <div className='border-b border-gray-300 p-3 text-center text-gray-700'>
      <h1 className='font-medium text-xl sm:text-2xl text-gray-800 line-clamp-2 sm:line-clamp-1'>{data.title}</h1>
      <p className="text-sm my-2">~ {user.name} ~</p>
      <p className=' line-clamp-3'>{data.body}</p>
      <Link href={`/posts/${data.id}`} className="inline-flex space-x-1 hover:underline text-sky-500 hover:text-sky-600 font-medium group my-1">
        <span>Read more </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group-hover:transform group-hover:translate-x-2 duration-100 ease-in inline-block w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>

        </Link>
    </div>
  )
}

export default Card