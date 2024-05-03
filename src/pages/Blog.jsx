import Nav from "../Component/Nav"

function Blog(){

    const BlogCard=[
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


const MouscCard=[
    {
        id:4,
        img:"image/card-1.png",
        date:"Nov 13, 2022",
        title:" How to Travel FOR FREE: No Money, No Problems!",
        text:"The ultimate backpacker thesis on how to travel the world with no cash. Yap, you read that right…",
    },


    {
        id:5,
        img:"image/card-2.png",
        date:"Nov 13, 2022",
        title:" How to Travel FOR FREE: No Money, No Problems!",
        text:"The ultimate backpacker thesis on how to travel the world with no cash. Yap, you read that right…",
    },

    {
        id:6,
        img:"image/card-3.png",
        date:"Nov 13, 2022",
        title:" How to Travel FOR FREE: No Money, No Problems!",
        text:"The ultimate backpacker thesis on how to travel the world with no cash. Yap, you read that right…",
    },

    {
        id:7,
        img:"image/card-4.png",
        date:"Nov 13, 2022",
        title:" How to Travel FOR FREE: No Money, No Problems!",
        text:"The ultimate backpacker thesis on how to travel the world with no cash. Yap, you read that right…",
    },


    {
        id:8,
        img:"image/card-5.png",
        date:"Nov 13, 2022",
        title:" How to Travel FOR FREE: No Money, No Problems!",
        text:"The ultimate backpacker thesis on how to travel the world with no cash. Yap, you read that right…",
    },


    {
        id:9,
        img:"image/card-6.png",
        date:"Nov 13, 2022",
        title:" How to Travel FOR FREE: No Money, No Problems!",
        text:"The ultimate backpacker thesis on how to travel the world with no cash. Yap, you read that right…",
    },
]






    return(
        <>

        <Nav/>


        <artical className="font-inter">








<section className="max-w-screen-xl mx-auto">

    <div className=" flex flex-col items-center sm:mt-16 mt-20 ">

        <h1 className="lg:text-6xl sm:text-5xl text-3xl text-black-soft text-center font-semibold">Blog
            and Article
        </h1>

        <p className="sm:text-lg text-base mt-6 text-center font-normal text-gray-dark lg:mt-16 sm:mt-12">Find
            the
            latest articles
            related to travel</p>

        <div
            className=" lg:w-1/2 sm:w-3/4 sm:h-14 h-9 shadow flex items-center justify-between lg:mt-14  mt-12 rounded-full">

            <div className="flex items-center pl-6">

                <img src="./image/serachinput.svg" alt="" />
                <input type="email" placeholder="Search and read artical"
                    className="font-normal sm:text-base text-xs text-gray-dark ml-3"/>

            </div>


            <button
                className="bg-red-soft font-inter text-white text-sm rounded-full sm:px-8 sm:py-2 py-1 px-4 mr-2">Search</button>





        </div>
    </div>



    <div className="lg:px-0 sm:px-4 rounded-full ">
        <div className="bg-no-repeat bg-auto  w-auto h-auto flex sm:justify-end justify-center sm:mt-20 mt-14 rounded-lg"
           style={{backgroundImage:"url(./image/blog-1.png)"}}>


            <div
                className="bg-white lg:w-1/2 sm:w-2/3 w-5/6 h-auto rounded-lg lg:p-8 sm:p-4 shadow flex flex-col sm:my-12 mt-48 p-5">

                <p className=" font-normal text-lg text-gray-dark sm:px-3">Nov 14, 2022</p>

                <h3 className="sm:text-3xl text-2xl font-medium  sm:mt-7 mt-5 sm:px-3 text-black-soft">Best Digital
                    Nomad
                    Hostels in
                    the
                    World: Top 8 for
                    Working Travellers
                </h3>

                <p className=" text-slate-500 font-normal text-lg sm:mt-6 mt-4 sm:px-5">Yeah, yeah, we all know the
                    reputation
                    hostels have as party meccas for rowdy, broke
                    wayfarers on a world tour. You know, people FAR from the reality of having a full-time
                    job...</p>

                <div className="sm:px-3">

                    <button
                        className="bg-red-soft text-white font-inter rounded-full text-base sm:py-3.5 sm:px-6 py-4 px-14 sm:mt-11 mt-10">Read
                        Artical</button>

                </div>


            </div>

        </div>
    </div>

</section>

<section className=" max-w-screen-xl mx-auto sm:mt-20 mt-14">



    <div
        className=" grid sm:grid-cols-3  grid-cols-1 lg:gap-x-8 lg:gap-y-8 sm:gap-x-5 sm:gap-y-5 gap-6 lg:px-0 px-5">

{MouscCard.map((item)=>{
    return( 
        <div key={item.id} className="card w-full rounded-2xl">
        <a href="privacy.html"> <img src={item.img} alt="" className="w-full"/></a>
        <div className="shadow rounded-b-2xl lg:p-8 sm:p-6 p-4">
            <p className=" text-base font-normal text-gray-dark">{item.date}</p>
            <h3
                className=" lg:text-2xl sm:text-lg text-2xl sm:w-auto w-72 font-medium mt-4 sm:mb-6 mb-1.5 text-black-soft">
               {item.title}
            </h3>
            <span className="lg:text-base sm:text-xs text-base  font-normal text-gray-dark">{item.text}
                </span>
        </div>
    </div>
    )
})}

        {/* <div key={item.id} className="card w-full rounded-2xl">
            <a href="privacy.html"> <img src={item.img} alt="" className="w-full"/></a>
            <div className="shadow rounded-b-2xl lg:p-8 sm:p-6 p-4">
                <p className=" text-base font-normal text-gray-dark">Nov 13, 2022</p>
                <h3
                    className=" lg:text-2xl sm:text-lg text-2xl sm:w-auto w-72 font-medium mt-4 sm:mb-6 mb-1.5 text-black-soft">
                    How
                    to
                    Travel
                    FOR
                    FREE: No
                    Money, No
                    Problems!
                </h3>
                <span className="lg:text-base sm:text-xs text-base  font-normal text-gray-dark">The
                    ultimate
                    backpacker
                    thesis on how
                    to
                    travel the world with no cash. Yap, you read
                    that right…</span>
            </div>
        </div> */}

        {/* <div className="card w-full rounded-2xl">
            <a href="article.html"><img src="image/card-2.png" alt="" className="w-full"/></a>
            <div className="shadow rounded-b-2xl lg:p-8 sm:p-6 p-4">
                <p className=" text-base font-normal text-gray-dark">Nov 13, 2022</p>
                <h3
                    className=" lg:text-2xl sm:text-lg text-2xl sm:w-auto w-72 font-medium mt-4 sm:mb-6 mb-1.5 text-black-soft">
                    How
                    to
                    Travel
                    FOR
                    FREE: No
                    Money, No
                    Problems!
                </h3>
                <span className="lg:text-base sm:text-xs text-base  font-normal text-gray-dark">The
                    ultimate
                    backpacker
                    thesis on how
                    to
                    travel the world with no cash. Yap, you read
                    that right…</span>
            </div>
        </div>


        <div className="card w-full rounded-2xl">
            <img src="image/card-3.png" alt="" className="w-full"/>
            <div className="shadow rounded-b-2xl lg:p-8 sm:p-6 p-4">
                <p className=" text-base font-normal text-gray-dark">Nov 13, 2022</p>
                <h3
                    className=" lg:text-2xl sm:text-lg text-2xl sm:w-auto w-72 font-medium mt-4 sm:mb-6 mb-1.5 text-black-soft">
                    How
                    to
                    Travel
                    FOR
                    FREE: No
                    Money, No
                    Problems!
                </h3>
                <span className="lg:text-base sm:text-xs text-base  font-normal text-gray-dark">The
                    ultimate
                    backpacker
                    thesis on how
                    to
                    travel the world with no cash. Yap, you read
                    that right…</span>
            </div>
        </div>


        <div className="card w-full rounded-2xl">
            <img src="image/card-4.png" alt="" className="w-full"/>
            <div className="shadow rounded-b-2xl lg:p-8 sm:p-6 p-4">
                <p className=" text-base font-normal text-gray-dark">Nov 13, 2022</p>
                <h3
                    className=" lg:text-2xl sm:text-lg text-2xl sm:w-auto w-72 font-medium mt-4 sm:mb-6 mb-1.5 text-black-soft">
                    How
                    to
                    Travel
                    FOR
                    FREE: No
                    Money, No
                    Problems!
                </h3>
                <span className="lg:text-base sm:text-xs text-base  font-normal text-gray-dark">The
                    ultimate
                    backpacker
                    thesis on how
                    to
                    travel the world with no cash. Yap, you read
                    that right…</span>
            </div>
        </div>

        <div className="card w-full rounded-2xl">
            <img src="image/mousc-5.png" alt="" className="w-full"/>
            <div className="shadow rounded-b-2xl lg:p-8 sm:p-6 p-4">
                <p className=" text-base font-normal text-gray-dark">Nov 13, 2022</p>
                <h3
                    className=" lg:text-2xl sm:text-lg text-2xl sm:w-auto w-72 font-medium mt-4 sm:mb-6 mb-1.5 text-black-soft">
                    How
                    to
                    Travel
                    FOR
                    FREE: No
                    Money, No
                    Problems!
                </h3>
                <span className="lg:text-base sm:text-xs text-base  font-normal text-gray-dark">The
                    ultimate
                    backpacker
                    thesis on how
                    to
                    travel the world with no cash. Yap, you read
                    that right…</span>
            </div>
        </div>


        <div className="card w-full rounded-2xl">
            <img src="image/card-6.png" alt="" className="w-full"/>
            <div className="shadow rounded-b-2xl lg:p-8 sm:p-6 p-4">
                <p className=" text-base font-normal text-gray-dark">Nov 13, 2022</p>
                <h3
                    className=" lg:text-2xl sm:text-lg text-2xl sm:w-auto w-72 font-medium mt-4 sm:mb-6 mb-1.5 text-black-soft">
                    How
                    to
                    Travel
                    FOR
                    FREE: No
                    Money, No
                    Problems!
                </h3>
                <span className="lg:text-base sm:text-xs text-base  font-normal text-gray-dark">The
                    ultimate
                    backpacker
                    thesis on how
                    to
                    travel the world with no cash. Yap, you read
                    that right…</span>
            </div>
        </div> */}











    </div>

    <div className="flex justify-center">
        <button
            className="bg-red-500 text-white font-inter rounded-full text-base sm:py-3.5 sm:px-10 py-4 px-14 sm:mt-14 mt-8">Load
            more</button>
    </div>


</section>

<section className="mx-auto max-w-screen-xl lg:mt-28 mt-14">

    <div>
        <h2 className="text-center lg:text-4xl text-3xl font-semibold sm:mb-12 mb-8 text-black-soft">
            Traveller gear
            needs</h2>

    </div>

    <div className="grid sm:grid-cols-3  grid-cols-1 lg:gap-8 sm:gap-6 gap-4 lg:px-0 px-5">

      {BlogCard.map((item)=>{
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
</artical>
        </>
    )
}


export default Blog