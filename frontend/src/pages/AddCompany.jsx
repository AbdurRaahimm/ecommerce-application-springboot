import React from 'react'
import { useCompany } from '../context/CompanyContext';

export default function Dashboard() {

  const { addCompany } = useCompany();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data)
    try {
      await addCompany(data)
      e.target.reset();
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <section>
      <div className="company px-10">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="companyContent">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Company name</label>
                  <div className="mt-2">
                    <input type="text" name="name" id="company-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Company Email address</label>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-start gap-x-3 col-span-full">
                  {/* <button type="button" className="text-sm font-semibold border border-indigo-600 px-2 py-1 rounded-md  text-gray-900">Cancel</button> */}
                  <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Company</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
