
function Cardsafe(){
    return(
        <>
        <section className="mx-auto max-w-screen-xl sm:mt-28 mt-20 lg:px-0 px-2">

<h2 className="font-semibold lg:text-5xl text-3xl text-black-soft text-center">Safe travel!</h2>
<p className="text-gray-dark font-normal lg:text-2xl sm:text-xl text-base  sm:mt-6 mt-4 text-center">Check our
    Covid-19 travel
    restrictions
    map
    for new entry
    rules</p>

<div className="grid sm:grid-cols-3 grid-cols-1 lg:gap-8 sm:gap-6 gap-8 sm:mt-14 mt-8">

    <div className="text-center">
        <img src="./image/people-1.svg" alt="" className="w-full"/>

        <h5 className="text-black-soft lg:text-2xl sm:text-sm text-lg font-medium mt-6 text-center ">217
            countries are
            open</h5>
        <p
            className="text-gray-dark lg:text-lg sm:text-xs text-sm font-normal text-center sm:mt-4 mt-2 lg:w-96">
            The
            country
            has no formal
            restrictions
            on entry, but it does have other travel policies.</p>

    </div>

    <div className="text-center ">
        <img src="./image/people-2.svg" alt="" className="w-full"/>

        <h5 className="text-black-soft lg:text-2xl sm:text-sm text-lg font-medium mt-6">11 countries are
            partially
            open
        </h5>
        <p className="text-gray-dark lg:text-lg sm:text-xs text-sm font-normal sm:mt-4 mt-2 lg:w-96">Entry to
            the country
            may
            depend on
            nationality or
            other special regulations.</p>

    </div>

    <div className="text-center">
        <img src="./image/people-3.svg" alt="" className="w-full"/>

        <h5 className="text-black-soft lg:text-2xl sm:text-sm text-lg font-medium mt-6">2 closed countries</h5>
        <p className="text-gray-dark lg:text-lg sm:text-xs font-normal sm:mt-4 mt-2 lg:w-96">Only citizens, or
            people
            in other
            special
            circumstances may enter the country.</p>

    </div>

</div>
</section>
        
        
        
        
        </>
    )

}

export default Cardsafe