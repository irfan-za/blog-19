'use client'
import Link from "next/link"
import Badge from "./Badge"
import FormModal from "./modal/FormModal"
import DeleteModal from "./modal/DeleteModal"
import { Fragment, useState } from "react"
import { Menu, Transition } from "@headlessui/react"

function TableData({users}) {
  const [open, setOpen] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [title, setTitle] = useState("")
  const [data, setData] = useState([])

  return (
    <div className="border border-gray-400 bg-white pt-5 rounded-lg">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold pl-4">Users</h1>
        <div className="flex flex-row space-x-2 md:space-x-4 pr-4">
            <div className="relative flex items-center">
              <svg className="absolute top-[25%] right-2 h-4 w-4 text-gray-500 bg-gray-100" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" id="icon" name="icon"  className="py-1 px-4 w-full md:w-48 bg-transparent border border-gray-700 shadow-sm rounded-lg text-sm text-gray-700 focus:outline-sky-500 focus:ring-gray-600 placeholder:text-gray-500" placeholder="Find user..."/>      
            </div>
            
            <button
            onClick={()=>{setOpen(true); setTitle("Create New User")}}
            className="w-fit py-1 px-2 flex justify-center items-center text-sm font-semibold rounded-lg bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              Add
            </button>
          </div>
      </div>

    <table>
      <thead>
        <tr className="grid grid-cols-7 gap-3 mx-auto py-1 text-left px-2">
          <th className="font-medium ml-2">No</th>
          <th className="font-medium col-span-3">Name</th>
          <th className="font-medium">Gender</th>
          <th className="font-medium">Status</th>
          <th className="font-medium"></th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user,i) => {
          return (
          <tr key={user.id} className="grid grid-cols-7 gap-3 p-2 border-t border-gray-400 mx-auto">
            <td className="ml-2">{i+1}</td>
            <td className="col-span-3">{user.name}</td>
            <td>{user.gender}</td>
            <td><Badge status={user.status} /></td>
            <td>
              <Menu as="div" className="px-6 py-1.5">
                <div className=" sm:relative inline-block">
                  <Menu.Button type="button" className="btn">
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                  </Menu.Button>
                  <Transition as={Fragment}>
                    <Menu.Items  className="absolute right-10 sm:right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                      {({ active }) => (
                        <Link href={`/users/${user.id}`}
                        className={`${active && 'bg-blue-200 dark:bg-blue-800'} dropdown-btn`}>Detail</Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                      {({ active }) => (
                        <button 
                        onClick={()=>{setTitle("Edit User"); setOpen(true); setData(user);}}
                        className={`${active && 'bg-blue-200 dark:bg-blue-800'} dropdown-btn`}>
                          Edit
                        </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                      {({ active }) => (
                        <button 
                          onClick={()=>{setOpenDeleteModal(true); setData(user);}}
                          className={`${active && 'bg-red-200 dark:bg-red-800'} dropdown-btn-danger`}>
                          Hapus
                        </button>
                        )}
                      </Menu.Item>
                    </div>
                    </Menu.Items>
                  </Transition>
                </div>
              </Menu>
            </td>
          </tr>)
          })
        }
      </tbody>
    </table>
    <FormModal open={open} setOpen={setOpen} title={title} data={data} setData={setData} />
  <DeleteModal openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} data={data} />
    </div>
  )
}

export default TableData