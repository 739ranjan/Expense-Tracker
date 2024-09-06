const Create = () => {
    return(
        <div className="flex flex-col items-center justify-center pt-2 pb-12">
            <h1 className="text-3xl font-bold text-green-600">Create New Transaction</h1>
            <div className="mx-auto w-full p-5 mt-5 max-w-[550px] bg-white rounded-xl shadow-green-200 shadow-smx">
                <form>
                    {/* category */}
                    <div className="mb-5">
                        <label htmlFor="category" className="mb-3 block text-base font-medium text-[#07074D]">
                            Category
                        </label>
                        <input type="text" placeholder="Select Category"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    {/* date */}
                    <div className="mb-5">
                        <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input type="date" 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    {/* amount */}
                    <div className="mb-5">
                        <label htmlFor="amount" className="mb-3 block text-base font-medium text-[#07074D]">
                            Number
                        </label>
                        <input type="number" placeholder=" ₹ 0.00"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    {/* note */}
                    <div className="mb-5">
                        <label htmlFor="note" className="mb-3 block text-base font-medium text-[#07074D]">
                            Note
                        </label>
                        <input type="text" placeholder="Ex: Mobile recharge"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div>
                        <button
                            className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Add Transaction
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create;