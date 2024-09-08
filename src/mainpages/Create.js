import { useState } from "react";
import EmojiPicker from 'emoji-picker-react';
import { CgZoomIn } from "react-icons/cg";

const Create = () => {

    let categories = [
        {
            categoryid: '1',
            categoryName: 'Transportation',
            categoryIcon: '🚗'
        },
        {
            categoryid: '2',
            categoryName: 'Utilities',
            categoryIcon: '💡'
        },
        {
            categoryid: '3',
            categoryName: 'Entertainment',
            categoryIcon: '🎮'
        },
        {
            categoryid: '4',
            categoryName: 'Health',
            categoryIcon: '🏥'
        },
        {
            categoryid: '5',
            categoryName: 'Education',
            categoryIcon: '📚'
        },
        {
            categoryid: '6',
            categoryName: 'Dining Out',
            categoryIcon: '🍽️'
        },
        {
            categoryid: '7',
            categoryName: 'Groceries',
            categoryIcon: '🛒'
        },
        {
            categoryid: '8',
            categoryName: 'Clothing',
            categoryIcon: '👗'
        },
        {
            categoryid: '9',
            categoryName: 'Travel',
            categoryIcon: '✈️'
        },
        {
            categoryid: '10',
            categoryName: 'Fitness',
            categoryIcon: '🏋️‍♂️'
        },
        {
            categoryid: '11',
            categoryName: 'Home Maintenance',
            categoryIcon: '🏠'
        },
        {
            categoryid: '12',
            categoryName: 'Insurance',
            categoryIcon: '🛡️'
        },
        {
            categoryid: '13',
            categoryName: 'Subscriptions',
            categoryIcon: '📅'
        },
        {
            categoryid: '14',
            categoryName: 'Gifts',
            categoryIcon: '🎁'
        },
        {
            categoryid: '15',
            categoryName: 'Savings',
            categoryIcon: '💰'
        },
        
    ];
    // adding new category
    const addCategory = (categoryid, categoryName, categoryIcon) => {
        const newCategory = [
            {
                categoryid: categoryid,
                categoryName: categoryName,
                categoryIcon: categoryIcon
            }
        ];
        categories = [newCategory, ...categories];
        console.log("category after adding new category: ", categories)
    } 

    let transactions = [
        { transactionid: '0', category: 'Health', amount: 1500, date: "2024-09-01", note: "Doctor visit" },
        { transactionid: '1', category: 'Grocery', amount: 2500, date: "2024-09-02", note: "Weekly shopping" },
        { transactionid: '2', category: 'Transport', amount: 300, date: "2024-09-03", note: "Bus fare" },
        { transactionid: '3', category: 'Entertainment', amount: 1200, date: "2024-09-04", note: "Movie tickets" },
        { transactionid: '4', category: 'Utilities', amount: 4000, date: "2024-09-05", note: "Electricity bill" },
        { transactionid: '5', category: 'Health', amount: 2200, date: "2024-09-01", note: "Medicine" },
        { transactionid: '6', category: 'Grocery', amount: 1800, date: "2024-09-02", note: "Vegetables" },
        { transactionid: '7', category: 'Transport', amount: 500, date: "2024-09-03", note: "Taxi ride" },
        { transactionid: '8', category: 'Entertainment', amount: 3000, date: "2024-09-04", note: "Concert tickets" },
        { transactionid: '9', category: 'Utilities', amount: 3500, date: "2024-09-05", note: "Water bill" },
        { transactionid: '10', category: 'Health', amount: 2700, date: "2024-09-01", note: "Dentist appointment" },
        { transactionid: '11', category: 'Grocery', amount: 2000, date: "2024-09-02", note: "Fruits and snacks" },
        { transactionid: '12', category: 'Transport', amount: 800, date: "2024-09-03", note: "Train ticket" },
        { transactionid: '13', category: 'Entertainment', amount: 2500, date: "2024-09-04", note: "Theatre show" },
        { transactionid: '14', category: 'Utilities', amount: 4500, date: "2024-09-05", note: "Gas bill" },
        { transactionid: '15', category: 'Health', amount: 1200, date: "2024-09-01", note: "Gym membership" },
        { transactionid: '16', category: 'Grocery', amount: 3200, date: "2024-09-02", note: "Bulk groceries" },
        { transactionid: '17', category: 'Transport', amount: 1000, date: "2024-09-03", note: "Fuel" },
        { transactionid: '18', category: 'Entertainment', amount: 4500, date: "2024-09-04", note: "Gaming console" },
        { transactionid: '19', category: 'Utilities', amount: 5000, date: "2024-09-05", note: "Internet bill" }
    ];
    // to add new transaction
    const addTransaction = (category, amount, date, note="" ) => {
        const newTransaction = [
            {
                transactionid: new Date(), 
                category: category, 
                amount: amount, 
                date: date, 
                note: note,
            }
        ];
        transactions = [newTransaction, ...transactions];
        console.log("Transactions after adding new transaction: ", transactions)
    } 

    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [newCategory, setNewCategory] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    // Emoji picker handler
    const onEmojiClick = (event) => {
        setChosenEmoji(event.emoji);
        setShowEmojiPicker(false);
    };

    // handle on add transaction button
    const createTransaction = (event) => {
        event.preventDefault();
        if (selectedCategory === 'Custom') {
            addCategory(new Date(), newCategory, chosenEmoji);
            setNewCategory('');
            setChosenEmoji('');
        }
        addTransaction(selectedCategory, amount, date, note);
        setSelectedCategory('');
        setAmount(0.00);
        setDate('');
        setNote('');

    }

    const [selectedCategory, setSelectedCategory] = useState('');
    const [amount, setAmount] = useState(0.00);
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');


    return (
        <div className="flex flex-col items-center justify-center pt-2 pb-12">
            <h1 className="text-3xl font-bold text-green-600">Create New Transaction</h1>
            <div className="mx-auto w-full p-10 mt-5 max-w-[550px] bg-white rounded-xl shadow-green-200 shadow-smx">
                <form>
                    {/* category */}
                    <div className="mb-5">
                        <label htmlFor="category" className="mb-3 block text-base font-medium text-[#07074D]">
                            Category<span className="text-red-500"> *</span>
                        </label>
                        <select
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-lg font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            required>
                                <option value="">Select a Category</option>
                                {categories.map((category) => 
                                    <option key={category.categoryid} value={category.categoryName}>
                                        {category.categoryIcon} {category.categoryName}
                                    </option>
                                )}
                                <option value="Custom">Custom</option>
                        </select>
                    </div>

                    {/* add new Category - only visible when Custom is selected */}
                    {selectedCategory === 'Custom' && (
                        <div className="mb-5">
                            <label htmlFor="newcategory" className="mb-3 block text-base font-medium text-[#07074D]">
                                New Category<span className="text-red-500"> *</span>
                            </label>
                            
                            <div className="flex items-center space-x-3">
                                {/* open emoji picker */}
                                <button
                                    type="button"
                                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                    className="px-3 py-2 rounded-md border-2 text-black focus:outline-none">
                                    {chosenEmoji ? chosenEmoji : <CgZoomIn />}
                                </button>

                                {/* New Category Name Input */}
                                <input 
                                    type="text" 
                                    placeholder="Category Name"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    className="flex-1 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                                    required 
                                />
                            </div>

                            {/* Show Emoji Picker if the button is clicked */}
                            {showEmojiPicker && (
                                <div className="mt-3">
                                    <EmojiPicker onEmojiClick={onEmojiClick} />
                                </div>
                            )}
                        </div>
                    )}

                    {/* date */}
                    <div className="mb-5">
                        <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                            Date<span className="text-red-500"> *</span>
                        </label>
                        <input type="date" max={new Date().toISOString().split("T")[0]}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required />
                    </div>

                    {/* amount */}
                    <div className="mb-5">
                        <label htmlFor="amount" className="mb-3 block text-base font-medium text-[#07074D]">
                            Amount<span className="text-red-500"> *</span>
                        </label>
                        <input type="number" placeholder=" ₹ 0.00"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required />
                    </div>

                    {/* note */}
                    <div className="mb-5">
                        <label htmlFor="note" className="mb-3 block text-base font-medium text-[#07074D]">
                            Note
                        </label>
                        <input type="text" placeholder="Ex: Mobile recharge"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            value={note}
                            onChange={(e) => setNote(e.target.value)} />
                    </div>

                    {/* submit button */}
                    <div>
                        <button
                        onClick={createTransaction}
                            className="hover:shadow-form w-full rounded-md bg-green-800 py-3 px-8 text-center text-base font-bold text-white outline-none tracking-wide hover:bg-green-600 hover:text-blue-900">
                            Add Transaction
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create;
