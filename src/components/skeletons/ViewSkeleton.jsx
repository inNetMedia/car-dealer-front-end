

const ViewSkeleton = () => {
    return(
        <div className='flex lg:flex-row flex-col lg:items-start justify-center lg:gap-4 max-w-[800px] lg:max-w-full'>
            <div className='md:flex md:flex-col max-w-170 bg-gray'>
                <div className='mb-5 flex justify-center w-full md:h-130 h-90'>
                    <div  className='rounded-md object-cover cursor-pointer w-full h-full bg-gray-400 text-transparent animate-pulse'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus cum modi nam? Suscipit, deleniti numquam perferendis quos nihil eos unde eius enim, ullam cum culpa beatae maiores eligendi quibusdam iste.</div>
                </div>
            </div>

            <section className='md:flex md:flex-col md:flex-[40%] md:min-w-100 max-w-170'>
                <div>
                    <div className='bg-gray-400 animate-pulse w-[30%] rounded-md text-transparent'>.</div>
                    <div className='bg-gray-400 animate-pulse w-[45%] mt-2 rounded-md text-transparent'>.</div>
                    <div className='bg-gray-400 animate-pulse w-[65%] mt-2 rounded-md text-transparent'>.</div>
                </div>

                <div className='[&_span]:text-gray-600 bg-gray-400 animate-pulse rounded-md p-4 mt-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'>
                    <h2 className="text-transparent"><i className="fa-solid fa-car-side"></i> Lorem ipsum dolor, sit amet consectetur sdf dsafdsa fsdafas fsda fdsafd asfsda fdsa.</h2>
                    <div className='text-xs mt-5 grid grid-cols-2 gap-4 text-transparent'>
                        <div className=" rounded-md">.</div>
                        <div className="">.</div>
                        <div >.</div>
                        <div>.</div>
                        <div>.</div>
                        <div>.</div>
                    </div>
                </div>

                <div className='bg-gray-400 animate-pulse text-transparent rounded-md p-4 mt-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'>
                    <div>.</div>
                    <p className='text-sm text-gray-600'></p>
                    <h1 className="font-bold mt-5">.</h1>
                    <ul className="grid grid-cols-2 list-disc list-inside space-y-1 [&_li]:text-xs">
                        <li>.</li>
                        <li>.</li>
                        <li>.</li>
                        <li>.</li>
                    </ul>
                </div>
                <div className='flex flex-col mt-5 text-transparent'>
                    <button className='bg-gray-400 animate-pulse p-1 rounded-md mb-2 cursor-pointer'>.</button>
                    <button className='p-1 bg-gray-400 animate-pulse rounded-md cursor-pointer'><i className="fa-brands fa-whatsapp"></i>.</button>
                </div>
            </section>
        </div>
    )
}


export default ViewSkeleton