
export async function POST(req) {
  const formData = await req.json();
  if(!formData) {
    return Response.json({message: 'No data provided'})
  }
  const res = await fetch(process.env.API_URL+'/users', {
    method: 'POST',
    headers: {
      "Authorization": "Bearer "+process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  const data = await res.json()
  return Response.json(data)

}


