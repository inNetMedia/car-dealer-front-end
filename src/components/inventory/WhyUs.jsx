

function WhyUs(){
    return(
        <section className="text-center mt-15 p-4">
            <h1 className="font-bold text-3xl m-3">Why Choose NN Motors?</h1>
            <p className="text-gray-600 mb-5">We provide premium automotive experiences with unmatched service quality</p>
            <section className="md:grid md:grid-cols-4 md:gap-3 md:[&_div]:m-0 [&_div]:mt-4">
                <div className="flex flex-col p-5 bg-white rounded-md">
                    <span>
                        <i className="fa-regular fa-star text-5xl font-bold"></i>
                    </span>
                    <span className="font-bold m-3">Premium Quality</span>
                    <p className="text-gray-600">Only the finest vehicles from trusted brands</p>
                </div>

                <div className="flex flex-col bg-white p-5 rounded-md">
                    <span>
                        <i className="fa-solid fa-shield-halved text-5xl font-bold"></i>
                    </span>
                    <span className="font-bold m-3">Warranty Protection</span>
                    <p className="text-gray-600">Comprehensive coverage for piece of mind</p>
                </div>

                <div className="flex flex-col  bg-white p-5 rounded-md">
                    <span>
                        <i className="fa-solid fa-headphones text-5xl font-bold"></i>
                    </span>
                    <span className="font-bold m-3">Expert Support</span>
                    <p className="text-gray-600">24/7 customer service from car specialists</p>
                </div>

                <div className="flex flex-col  rounded-md bg-white p-5">
                    <span>
                        <i className="fa-solid fa-award text-5xl font-bold"></i>
                    </span>
                    <span className="font-bold m-3">Award Winning</span>
                    <p className="text-gray-600">Recognized for excellence in automotive retail</p>
                </div>
            </section>
        </section>
    )
}

export default WhyUs