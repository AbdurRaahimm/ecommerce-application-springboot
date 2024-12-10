import React, { useEffect } from 'react'
import { useCompany } from '../context/CompanyContext';
import { useProducts } from '../context/ProductContext';

export default function AddProduct() {
    const { companies, fetchCompanies } = useCompany();
    const { addProduct } = useProducts();
    // console.log(companies)

    useEffect(() => {
        fetchCompanies()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data)
        try {
            await addProduct(data)
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
                                    <label htmlFor="product-name" className="block text-sm font-medium leading-6 text-gray-900">Product name</label>
                                    <div className="mt-2">
                                        <input type="text" name="name" id="product-name" autoComplete="given-name" className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="companySelect" className="block text-sm font-medium leading-6 text-gray-900">Select Company</label>
                                    <div className="mt-2">
                                        <select id="companySelect" name="companyId" autoComplete="select-one" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-2">
                                            {
                                                companies.map(com => <option key={com.id} value={com.id}>{com.name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="product-price" className="block text-sm font-medium leading-6 text-gray-900">Product price</label>
                                    <div className="mt-2">
                                        <input type="number" name="price" id="product-price" autoComplete="given-name" className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="ProductDescription" className="block text-sm font-medium leading-6 text-gray-900">Product Description</label>
                                    <div className="mt-2">
                                        {/* <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> */}
                                        <textarea name="desc" id="ProductDescription" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="img" className="block text-sm font-medium leading-6 text-gray-900">Product Image Link</label>
                                    <div className="mt-2">
                                        <input type="text" name='imgURL' placeholder="Enter image link" className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div className="mt-3 flex items-center justify-start gap-x-3 col-span-full">
                                    {/* <button type="button" className=" text-sm font-semibold border border-indigo-600 px-2 py-1 rounded-md  text-gray-900">Cancel</button> */}
                                    <button type="submit" className=" rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Product</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
