
export default async function PostDetail({params}) {
  const res= await fetch(process.env.API_URL+'/posts/'+params.id)
  const post= await res.json()
  const res_comments= await fetch(process.env.API_URL+'/posts/'+params.id+'/comments')
  const comments= await res_comments.json()
  const res_user= await fetch(process.env.API_URL+'/users/'+post.user_id)
  const user= await res_user.json()
  console.log(user);
  return (
    <div className="text-gray-700 mx-auto max-w-3xl px-3 sm:px-0 mt-24 sm:mt-32">
      <h1 className="text-gray-800 font-semibold text-2xl sm:text-3xl text-center">{post.title}</h1>
      <p className="text-center mt-2 mb-8 sm:mb-10">~ {user.name} ~</p>
      <p className="text-lg">{post.body}</p>
      <hr className="mt-16 border-gray-400"/>
      <div>
        <h1 className="text-gray-800 font-semibold text-xl sm:text-2xl mt-8 mb-4">Comments ({comments.length})</h1>
        {
          comments.map(comment => (
            <div key={comment.id} className="border rounded-lg border-gray-400 p-3 sm:p-5 text-gray-700 mb-4">
              <p className="text-sm mb-2">
                <span className="font-medium text-gray-800">{comment.name} </span>
                ~ {comment.email}
              </p>
              <p className="text-lg">{comment.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
