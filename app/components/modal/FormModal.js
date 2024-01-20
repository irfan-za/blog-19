import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


export default function FormModal({open, setOpen, title, data}) {
  const cancelButtonRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'male',
    status: 'inactive',
  });
  useEffect(() => {
    if(data){
      setFormData({
        name: data.name,
        email: data.email,
        gender: data.gender,
        status: data.status,
      })
    }
  }, [data])
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const submitForm= async(e)=>{
    e.preventDefault()

    if(data){
      editUser(data)
      setOpen(false)
    }else{
      createUser();
      setOpen(false)
    }
  }
  const editUser=async()=>{
     const res= await fetch('/api/user/'+data.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: data.id, data: formData}),
    })
    const post= await res.json()
  }
  const createUser= async()=>{
    const res= await fetch('/api/user',{
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData),
    })
    const post= await res.json()
    if(post[0]?.message){
      alert(post[0].field +" "+ post[0].message)
    }else{
      alert('success create user')
    }
  }


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white dark:bg-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 text-center mb-2 w-full">
                    {title}
                  </Dialog.Title>
                  <form onSubmit={submitForm}>
                    <div className="grid gap-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-2 dark:text-gray-300 font-semibold">Name</label>
                        <div className="relative">
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="longUrl-error"
                            placeholder='Your name...'/>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2 dark:text-gray-300 font-semibold">Email</label>
                        <div className="relative">
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}  className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="longUrl-error"
                            placeholder='hello@example.com'/>
                        </div>
                      </div>

                      <div className="flex justify-start space-x-5 items-center">
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-800">
                          Gender :
                        </label>
                        <div className="mt-2">
                          <select
                            id="gender"
                            name="gender"
                            value={formData.gender} onChange={handleChange}
                            autoComplete="gender"
                            className="block focus:outline-none w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option>male</option>
                            <option>female</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-start space-x-5 items-center">
                        <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-800">
                          Status :
                        </label>
                        <div className="mt-2">
                          <select
                            id="status"
                            name="status"
                            value={formData.status} onChange={handleChange}
                            autoComplete="status"
                            className="block focus:outline-none w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option>inactive</option>
                            <option>active</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-sky-500 dark:bg-sky-600 dark:hover:bg-sky-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-600 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => {setOpen(false);}}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>

                 
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
