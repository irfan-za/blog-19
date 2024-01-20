import { NextResponse } from "next/server"

export async function POST(req) {
  const {id} = await req.json();
  if(!id) {
    return Response.json({message: 'No data provided'})
  }
  await fetch(process.env.API_URL+'/users/'+id, {
    method: 'DELETE',
    headers: {
      "Authorization": "Bearer "+process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    },
  })
  return NextResponse.json({message: 'success delete user'})
}



export async function PUT(req) {
  const formData = await req.json();
  await fetch(process.env.API_URL+'/users/'+formData.id, {
    method: 'PUT',
    headers: {
      "Authorization": "Bearer "+process.env.ACCESS_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData.data),
  })
 
  return Response.json({message: 'success edit user'})
}