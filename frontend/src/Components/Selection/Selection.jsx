// import React from 'react';


// eslint-disable-next-line react/prop-types
const Selection = ({selectedSection,setSelectedSection}) => {
    return (
        <section>
            <div className="selection mb-20">
                <div className="container">
                    <div className="selectionContent">
                        <div className="col-span-full">
                            <label htmlFor="select" className="block text-sm font-medium leading-6 text-gray-900">Select</label>
                            <div className="mt-2">
                                <select  onChange={(e) => setSelectedSection(e.target.value)} value={selectedSection} id="select" name="select" autoComplete="select-one" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option className="hidden">Choose One</option>
                                    <option value="Company">Company</option>
                                    <option value="Product">Product</option>
                                </select>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Selection;