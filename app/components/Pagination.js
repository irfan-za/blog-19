'use client'
import Link from 'next/link'

const Pagination = (
  {
    hasNextPage,
    hasPrevPage,
    page,
    total_pages,
  }
) => {
  return (
    <div className='flex gap-2 mx-auto my-10 overflow-x-auto max-w-[90%] sm:max-w-fit'>
      <Link 
        scroll={false}
        href={`?page=1`}
        className={`${page== '1'? 'cursor-not-allowed': ' hover:text-white hover:bg-sky-500'} p-1 text-black rounded-md px-2 py-2 `}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>

      </Link>
      <button
        className={`${!hasPrevPage? 'cursor-not-allowed': ' hover:text-white hover:bg-sky-500'} p-1 text-black rounded-md px-2 py-2 flex`}>
          {!hasPrevPage?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

          :
          <Link 
            scroll={false}
            href={`?page=${Number(page) - 1}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

          </Link>
          }
      </button>
        <span 
          className={` relative inline-flex items-center px-4 py-2 text-sm font-semibold text-black `}
        >
        {`${page}/${total_pages}`}
        </span>
      <button
        className={`${!hasNextPage? 'cursor-not-allowed': ' hover:text-white hover:bg-sky-500'} p-1 text-black rounded-md px-2 py-2 flex`}>
          {!hasNextPage?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          :
          <Link 
            scroll={false}
            href={`?page=${Number(page) + 1}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

          </Link>
          }
      </button>
      <Link 
        scroll={false}
        href={`?page=${total_pages}`}
        className={`${page==total_pages? 'cursor-not-allowed': ' hover:text-white hover:bg-sky-500'} p-1 text-black rounded-md px-2 py-2 `}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
    </div>
  )
}

export default Pagination