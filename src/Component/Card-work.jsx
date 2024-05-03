

function Cardwork(){
    return(
        <>
        
        <section className="mx-auto max-w-screen-xl sm:mt-28 mt-20 px-2 lg:px-0">

    <h2 className="font-semibold lg:text-5xl text-3xl text-black-soft text-center">How it works</h2>

    <div className="grid sm:grid-cols-3 grid-cols-1 lg:gap-32 sm:gap-16 gap-8 sm:mt-14 mt-8 sm:px-0 px-10">



        <div className="flex flex-col items-center text-center">
            <img src="./image/card-visa.svg" alt="" className="sm:w-auto sm:h-auto  h-20"/>
            <h5 className="text-black-soft lg:text-2xl sm:text-base text-lg font-medium mt-6">Apply Online</h5>
            <p className="text-gray-dark lg:text-lg text-sm font-normal sm:mt-4 mt-2">Secure online
                application
                saves time and
                checks
                for errors</p>

        </div>

        <div className="flex flex-col items-center text-center">
            <img src="./image/card-visa-2.svg" alt="" className="sm:w-auto sm:h-auto  h-20"/>
            <h5 className=" lg:text-2xl sm:text-base text-lg font-medium text-black-soft mt-6">Mail Documents</h5>
            <p className="text-gray-dark lg:text-lg text-sm font-normal sm:mt-4 mt-2">No need to stand in line at
                the
                consulate, we
                will do it for you</p>

        </div>


        <div className="flex flex-col items-center text-center">
            <img src="./image/card-visa-3.svg" alt="" className="sm:w-auto sm:h-auto  h-20"/>
            <h5 className=" lg:text-2xl sm:text-base text-lg font-medium text-black-soft mt-6">Receive Passport,
                Visa
            </h5>
            <p className="text-gray-dark lg:text-lg text-sm font-normal sm:mt-4 mt-2">Real time status
                updates
                will keep you
                informed
            </p>

        </div>




    </div>

</section>
        
        
        </>
    )
}

export default Cardwork