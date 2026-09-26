const ConfirmPopUp = ({ setShowConfirmation, message, method, action, title }) => {
    return(
        <div onClick={() => setShowConfirmation(false)} className='bg-black/30 fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center p-4'>
            <div className="bg-white min-w-sm max-w-md p-4 rounded-md">
                {title}
                <div className="text-gray-700">{message}</div>
                <div className="flex justify-end mt-10">
                    <button className="mr-4 bg-white border-1 border-gray-400 px-3 py-2 rounded-md cursor-pointer">Cancel</button>
                    <button onClick={method} className="bg-red-500 text-white px-3 py-2 rounded-md font-bold cursor-pointer">{action}</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPopUp