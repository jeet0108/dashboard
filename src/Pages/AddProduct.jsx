import { CompassIcon, ImageDown, Info, Tag, Upload } from 'lucide-react'
import JoditEditor from 'jodit-react';
import CustomSelect from '../Components/SelectCustom';
import React, { useState, useRef } from 'react';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

const AddProduct = () => {

    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);
    const [enabled, setEnabled] = useState(false);

    const [vendor, setVendor] = useState("");
    const [category, setCategory] = useState("");
    const [collection, setCollection] = useState("");
    const [status, setStatus] = useState("");

    const vendors = [
        { value: "vendorA", label: "Vendor A" },
        { value: "vendorB", label: "Vendor B" },
        { value: "vendorC", label: "Vendor C" },
      ];
    
      const categories = [
        { value: "category1", label: "Category 1" },
        { value: "category2", label: "Category 2" },
        { value: "category3", label: "Category 3" },
      ];
    
      const collections = [
        { value: "collectionX", label: "Collection X" },
        { value: "collectionY", label: "Collection Y" },
        { value: "collectionZ", label: "Collection Z" },
      ];
      const Status = [
        { value: "", label: "All" },
        { value: "Inactive", label: "Inactive" },
        { value: "Scheduled", label: "Scheduled" },
        { value: "Publish", label: "Publish" },
      ];

  return (
    <>
        <div>
            <div className='flex justify-between flex-wrap items-center px-3'>
                <div className='mb-3'>
                    <p className=' text-2xl font-[500] '>Add  New Product</p>
                    <p className=' text-xl text-gray-400'>Orders placed across your store</p>
                </div>
                <div className='flex items-center flex-wrap gap-3'>
                    <button className=' bg-gray-300 text-gray-600 px-5 py-1 rounded-lg text-lg hover:bg-gray-400 transition-all'>Discard</button>
                    <button className=' bg-[rgba(74,61,203,0.2)] text-[rgba(74,61,203,1)] px-5 py-1 rounded-lg text-lg  hover:bg-blue-300 transition-all'>Save Draft</button>
                    <button className=' bg-[rgba(66,80,134,1)] text-white px-5 py-1 rounded-lg text-lg flex items-center  hover:bg-blue-900 transition-all'> <Upload className='me-2'/> Publish Product</button>
                </div>
            </div>

            {/* Form section */}

            <div className='grid grid-cols-12 mt-3 gap-3'>
                <div className='lg:col-span-8 col-span-12'>
                    <div className='card h-auto'>
                        <div className='flex items-end'>
                            <Info className=' text-blue-700 me-2'/>
                            <p className=' text-xl font-[500]'>Product Information</p>
                        </div>
                        <div>
                            <form>
                                <div className='mt-5'>
                                    <label htmlFor="ProductName">Name</label>
                                    <input type="text"
                                    id='ProductName'
                                    className='w-full mt-1 pl-3'
                                    placeholder='Product Title'
                                    required
                                     />
                                </div>
                                <div className=' grid grid-cols-12 gap-3'>
                                    <div className='mt-5 col-span-6'>
                                        <label htmlFor="ProductName">SKU</label>
                                        <input type="text"
                                        id='SKU'
                                        className='mt-1 pl-3'
                                        placeholder='SKU'
                                        required
                                         />
                                    </div>
                                    <div className='mt-5 col-span-6'>
                                        <label htmlFor="ProductName">Barcode</label>
                                        <input type="text"
                                        id='Barcode'
                                        className='mt-1 pl-3'
                                        placeholder='0123-4567'
                                        required
                                         />
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <label htmlFor="">Description (optional)</label>
                                    <JoditEditor
                                    className=' mt-1'
                                    ref={editor}
                                    value={content}
                                    onChange={newContent => setContent(newContent)} 
		                            />
                              </div>
                            </form>
                        </div>
                    </div>
                    <div className=' card h-auto mt-5'>
                        <div className=' flex justify-between mb-5'>
                            <div className=' flex items-center text-xl font-[500]'>
                                <ImageDown className='me-1 text-blue-500'/>Product Image
                            </div>
                            <div className=' text-blue-800'>
                                Add media from URL
                            </div>
                        </div>
                        <div className='h-auto'>
                            <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={true}
                            maxFiles={5}
                            labelIdle='Drag & Drop your images or <span class="filepond--label-action">Browse</span>'
                            />
                        </div>
                    </div>
                </div>
                <div className=' lg:col-span-4 col-span-12'>
                    <div className=' grid grid-cols-12 gap-3'>
                        <div className=' card h-auto  col-span-12'>
                            <div className=' flex items-center text-xl font-[500]'>
                                <Tag className=' text-blue-600 me-1' size={20}/>Pricing
                            </div>
                            <div className=' mt-5'>
                                <label htmlFor="Price">Base Price</label>
                                <input type="text"
                                className=' mt-1 pl-3'
                                id='Price'
                                placeholder='Price'
                                 />
                            </div>
                            <div className=' mt-5'>
                                <label htmlFor="d-Price">Discounted Price</label>
                                <input type="text"
                                className=' mt-1 pl-3'
                                id='d-Price'
                                placeholder='Discounted Price'
                                 />
                            </div>
                            <div className=' mt-5 flex items-center border-b-2 border-gray-400 pb-3'>
                                <input type="checkbox" name="" id="" className='w-5 h-5 me-3 mt-1'/>
                                <p className=' text-gray-600'>Charge tax on this product</p>
                            </div>
                            <div className=' mt-3 flex justify-between'>
                                <p className=' text-md text-gray-600'>In Stock</p>
                                <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={enabled}
                                    onChange={() => setEnabled(!enabled)}
                                />
                                <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 relative transition">
                                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 left-1 transition-all ${enabled ? "translate-x-5.5" : "-translate-x-0.5"}`}></div>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className='card h-auto col-span-12'>
                            <div className=' flex items-center text-xl font-[500]'>
                                <CompassIcon className=' text-blue-600 me-1 mt-1' size={26}/>Organize
                            </div>
                            <div className="space-y-3 mt-5">
                                {/* Vendor Select */}
                                <div>
                                    <p className='mb-1'>
                                    Vendor
                                    </p>
                                    <CustomSelect options={vendors} placeholder="Select Vendor" onChange={setVendor} />
                                </div>
                                {/* Category Select */}
                                <div>
                                    <p className='mb-1'>
                                    Category
                                    </p>
                                    <CustomSelect options={categories} placeholder="Select Category" onChange={setCategory} />
                                </div>
                                {/* Collection Select */}
                                <div>
                                    <p className='mb-1' >
                                    Collection
                                    </p>
                                    <CustomSelect options={collections} placeholder="Select Collection" onChange={setCollection} />
                                </div>
                                <div>
                                    <p className=' mb-1'>
                                    Status
                                    </p>
                                    <CustomSelect options={Status} placeholder="Select Status" onChange={setStatus} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddProduct