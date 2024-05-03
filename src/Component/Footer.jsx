
function footer(){
    

    return(
<>
<footer className="bg-black-soft mt-14 lg:mt-10">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  py-12 space-y-10 sm:space-y-0 text-center sm:text-start px-2 sm:px-4">
    <div className="mb-0 sm:mb-8  lg:mb-0">
        <ul className="text-xs md:text-base  lg:text-lg font-medium  space-y-4">
            <li className="flex justify-center sm:justify-start"><a href="./index.html" ><img  src="image/yallago.svg" alt="logo-light"/></a></li>
            <li className="text-gray-dark  "><a href="#"  >128 Market St. 20193<br/> Riyadh, KSA</a></li>
            <li className="text-gray-dark "><a href="#" >128 Market St. 20193 <br/>Dubai, UAE</a></li>
            <li ><a href="#" ><span className="text-lg md:text-xl text-white">Get the App</span></a></li>
            <li ><a href="#"><button  className="py-3.5 px-14 lg:px-14 lg:py-2 text-base xl:text-lg bg-white  text-black-soft rounded-3xl" type="button">Download app</button></a></li>
            
        </ul>
    </div>
    <div className="text-gray-dark text-xs md:text-base  lg:text-lg font-medium">
        <ul className=" space-y-4">
            <li ><a href="./packages.html">Packages</a></li>
            <li ><a href="./flight.html">Flight Tickets</a></li>
            <li ><a href="./details.html">Booking Hotels</a></li>
            <li ><a href="#">Transportations</a></li>
            <li ><a href="./flight-visa.html">Apply Visa</a></li>
            <li ><a href="./Insurance.html">Apply Insurance</a></li>
          
        </ul>
    </div>
    <div className="text-gray-dark text-xs md:text-base  lg:text-lg font-medium">
        <ul className=" space-y-4" >
            <li ><a href="./visa.html">Visa Checker</a></li>
            <li ><a href="./policy.html">Privacy Policy</a></li>
            <li ><a href="./terms-condition.html">Terms & Conditions</a></li>
            <li ><a href="./blog-article.html">Articles & Blogs</a></li>
            <li ><a href="./center.html">FAQs</a></li>
            <li ><a href="./about-us.html">About Us</a></li>
            
        </ul>
    </div>
    <div className="text-gray-dark text-xs md:text-base  lg:text-lg font-medium">
        <ul className="space-y-4">
            <li><a href="#"><span className="text-lg md:text-xl text-white">Contact Us</span></a></li>
           <div className="flex justify-center sm:justify-start flex-row sm:flex-col space-y-0 sm:space-y-4 space-x-4 sm:space-x-0">
            <li className="flex items-center space-x-2" >
                <a href="#" ><span><img src="./image/soudi.svg" alt="KSA"/> </span></a>
                <span>00966</span>

            </li>
            <li className="flex items-center space-x-2">
                <a href="#" className="" ><span><img src="./image/uea.svg" alt="UAE"/> </span></a>
                <span>00971</span>
            </li>
           </div>
            <li className="flex space-x-5 justify-center sm:justify-start ">
                <div className="bg-white w-9 h-9 rounded-full flex justify-center items-center">
                <a href="#" ><img src="./image/face.svg" alt="facebook"/></a>
                </div>
                <div className="bg-white w-9 h-9 rounded-full flex justify-center items-center">
                <a href="#" ><img src="./image/linkiden.svg" alt="whatsapp"/></a>
                </div>
                <div className="bg-white w-9 h-9 rounded-full flex justify-center items-center">
                    <a href="#"><img src="./image/whatsup.svg" alt="linkedin"/></a>
                </div>
                <div className="bg-white w-9 h-9 rounded-full flex justify-center items-center">

                <a href="#"><img src="./image/inst.svg"alt="instagram"/></a>
                </div>
            </li>
            
        </ul>
    </div>
</div>
<div className="max-w-screen-xl mx-auto mt-5">
    <hr/>
</div>
<div className="max-w-screen-xl mx-auto text-gray-dark font-medium flex sm:justify-between sm:flex-row flex-col text-center space-y-6 sm:space-y-0 pt-8 pb-14 px-2 xl:px-0"> 
    <span className= "text-xs md:text-base  lg:text-lg">
        <a href="#">© 2022 Yallabook • All rights reserved.</a>
    </span>
    <span className=" text-xs md:text-base  lg:text-lg ">
        <a href="#">Powered by Yalla Travel KSA and Rezbook UAE</a>
    </span>
</div>

</footer>
</>
    )
    
    
    
}

export default footer


