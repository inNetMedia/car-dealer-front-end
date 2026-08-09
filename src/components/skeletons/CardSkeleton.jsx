
const CardSkeleton = () => {
    return(
        <div className='max-h-100 h-120 pb-4 mb-5 rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer flex flex-col overflow-hidden bg-gray-400 [&_div]:animate-pulse'>
            <div className="h-75 w-full shrink-0 bg-gray-400 animate-pulse"></div>
            <div className='p-3 flex-1'>
                <div className="flex justify-between">
                    <div className='bg-gray-400 w-[65%] rounded-md h-4 mb-2'></div>
                    <span className="bg-gray-400 w-8 rounded-md h-4"></span>
                </div>
                <div className='bg-gray-400 w-[45%] h-4 mb-2 rounded-md'></div>
                <div className="h-4 rounded-md w-[20%] bg-gray-400"></div>
            </div>
        </div>
    )
}

export default CardSkeleton