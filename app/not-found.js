import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Oops!
        </p>

        <p className="mt-4 text-gray-500">Page not found.</p>

        <Link
          href="/"
          className="inline-block px-5 pt-2 pb-3 mt-6 text-sm font-medium text-white bg-sky-500 rounded-full hover:bg-sky-600 focus:outline-none focus:ring"
        >
          Back home
        </Link>
      </div>
    </div>
  )
}