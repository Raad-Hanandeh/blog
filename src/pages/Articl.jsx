
import Nav from "../Component/Nav"


function Articl() {

  

 

  const articalCard=[
{
  id:1,
  icon:"./image/guide-1.png",
  text:" Choosing a Travel Backpack: A Comprehensive Guide!",
},

{
  id:2,
  icon:"./image/card-7.png",
  text:"Choosing a Travel Backpack: A Comprehensive Guide!",

},

{
  id:3,
  icon:"./image/card-8.png",
  text:"Choosing a Travel Backpack: A Comprehensive Guide!",
  
},


  ]









  return (
    <>
  
<Nav/>
  

   <article className='font-inter'>



<section className="max-w-screen-xl mx-auto ">

  
    
      


  




    <div className="flex flex-col place-items-center lg:mt-28 mt-20">

        <h1 className="font-semibold lg:text-5xl sm:text-3xl sm:w-2/3 text-center text-lg w-4/5 text-black-soft">
            Best Digital
            Nomad
            Hostels
            in
            the
            World: Top 8 for Working Travellers</h1>

        <div className="flex items-center sm:my-8 my-4">
            <p className="text-gray-dark sm:text-lg text-sm font-normal mr-2">By</p>
            <span className="sm:text-lg font-normal text-sm mr-4 text-black-soft">Andrew Paul</span>
            <span className="sm:text-lg font-normal text-sm text-gray-dark">Published 14 Nov 2022</span>
        </div>


        <img src="image/hero-artical.png" alt="" className="rounded-xl lg:px-0 px-5 "/>



    </div>

</section>


<section className="max-auto mt-10 items-center">

    <div className="flex flex-col items-center">

        <div className="flex justify-center items-center">

            <p className="lg:text-3xl sm:text-xl text-lg font-light sm:w-4/6  w-5/6 border-b-2 pb-6"><span
                    className="lg:text-5xl text-3xl font-light text-black-soft">W</span>e
                all
                know
                the
                reputation
                hostels have as party
                meccas for rowdy, broke
                wayfarers on
                a world tour. You know, people FAR from the reality of having a full-time job...</p>


        </div>



        <div className="flex flex-col  mt-10 sm:w-4/6 w-5/6 text-gray-dark items-center">

            <p className="sm:text-lg text-sm  font-normal">In the beginning of Israel’s devastating
                war on
                Gaza,
                China appeared to be on the same page with its regional partners, Saudi Arabia and Iran, when it
                came to the big questions. All three condemned the Israeli aggression, called for a negotiated
                settlement addressing Palestinian grievances and held conferences and summits together to
                express their collective opposition to the conflict.</p>

            <p className="sm:text-lg text-sm font-normal my-8">But the Houthi attacks on shipping
                routes in the
                Red Sea have upset this consensus. As Iran officially denies any direct involvement despite its
                unquestionably close relationship with the Houthis and Saudi Arabia remains strategically quiet
                after the end of its protracted and costly conflict with the armed group, Beijing finds itself
                in an awkward position.
            </p>


            <p className="sm:text-lg text-sm font-normal">The Houthis, who control large parts of
                Yemen
                including the capital Sanaa, have launched more than 100 drone and missile attacks, targeting 10
                merchant vessels in the Red Sea, according to the Pentagon. The group has described the attacks
                as a show of support for Palestinians facing Israeli bombardment in Gaza.</p>

            <p className="sm:text-lg text-sm font-normal my-8 ">Yemeni rebel group includes both
                weapons and
                tactical intelligence, the White House said on Friday as it presented newly declassified
                intelligence purporting to show Iranian involvement in the attacks.</p>

            <p className="sm:text-lg text-sm font-normal ">“The resistance [Houthis] has its own
                tools… and acts
                in accordance with its own decisions and capabilities,” Iran’s deputy foreign minister Ali
                Bagheri told Mehr news agency.</p>

            <p className="sm:text-lg text-sm font-normal my-8">“The fact that certain powers, such as
                the
                Americans and the Israelis, suffer strikes from the resistance movement… should in no way call
                into question the reality of the strength of the resistance in the region,” he added.</p>

            <p className="sm:text-lg text-sm font-normal">Tehran has said it supports the Houthis
                politically
                but denies sending the group weapons.</p>

        </div>

    </div>




</section>


<section className="mx-auto max-w-screen-xl lg:mt-28 mt-14">

    <div>
        <h2 className="text-center lg:text-4xl text-3xl font-semibold sm:mb-12 mb-8 text-black-soft">
            Traveller gear
            needs</h2>

    </div>

    <div className="grid sm:grid-cols-3  grid-cols-1 lg:gap-8 sm:gap-6 gap-4 lg:px-0 px-5">

      {articalCard.map((item)=>{
        return( 
  <div key={item.id} className="bg-cover bg-no-repeat bg-center w-auto h-96 flex justify-end flex-col rounded-lg" style={{backgroundImage:`url(${item.icon})`}}>

        <p className="font-medium  text-start lg:text-2xl sm:text-sm text-lg  text-white lg:mx-6 sm:mx-2  mx-6 mb-8">{item.text}</p>
    </div>)
      })
      }

       

    </div>

    <div className=" flex justify-center">
        <button className="bg-red-soft text-white font-inter rounded-full text-base py-3.5 px-10 mt-14">Load
            more</button>
    </div>
</section>

<section className="mx-auto max-w-screen-xl lg:mt-28 mt-14">


    <div className="sm:bg-cover bg-auto bg-no-repeat sm:bg-center  w-full h-auto rounded-lg"
         style={{backgroundImage:"url(./image/desert.png)"}}>

        <div className="flex flex-col rounded-lg lg:place-items-end py-16 sm:px-20 px-5">

            <h3 className="font-semibold text-white sm:text-5xl text-3xl ">Want to Stay
                Up to
                Date?
            </h3>

            <p className="text-white sm:text-lg text-base font-medium mt-4 lg:w-1/2">From our
                epic
                backpacking
                guides to in-depth gear reviews and our team is always on assignment, out in the world, writing
                new
                and exciting content for you guys.</p>

            <div
                className="flex items-center justify-between bg-white lg:w-1/2 sm:w-3/4 h-12 rounded-full sm:mt-6 mt-8">

                <input type="email" placeholder="Search and read artical"
                    className="font-normal sm:text-base text-sm text-gray-dark sm:ml-6 ml-3 w-40"/>

                <button
                    className="bg-red-soft font-inter text-white text-sm rounded-full sm:px-6 sm:py-2.5 py-2 px-4 mr-2">Subsucrib</button>

            </div>

        </div>



    </div>

</section>


















</article>
    
 


  
   </>



  
  )
 
}

export default Articl