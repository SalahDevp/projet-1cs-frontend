import React,{useState} from "react";
import pic from "./pic/pic8.png"
import back from "./pic/Back.png"
import Swiper from "./Swiper";


function InfoPage() {
  const [infos,setInfos] = useState({
    description:'Monumental, pillared prayer hall & a lofty minaret, lit up at night & topped by an observation deck.',
    wilaya:'Alger',
    adress:'Q3M7+W76, Rue EL Mourabitoune, Casbah',
    categorie:'mosque',
    theme:'jamal',
    timing:'24/24H',
    transport:'Metro,Bus,Train'
  })
  const [comments,setComments] = useState([
    {
      user:{
        name:'7med',
        pic:'url'
      },
      comment:'oidjd zjfnzg'
    },
    {
      user:{
        name:'7med',
        pic:'url'
      },
      comment:'oidjd zjfnzg'
    },
    {
      user:{
        name:'7med',
        pic:'url'
      },
      comment:'oidjd zjfnzg'
    },
    {
      user:{
        name:'7med',
        pic:'url'
      },
      comment:'oidjd zjfnzg'
    },
  ])
  const [comment,setComment] = useState('')
  const photos =[pic,pic,pic,pic,pic,pic,pic,pic,pic,pic,pic,pic,pic,pic,pic]
  const events =[
    {
      titre:'fesdbsdv',
      description:'To commemorate the arrival of spring, Tafsit - meaning spring - is a grand and unique occasion for colorful celebration that lasts three days.',
      start:'From Janvier 24',
      end:'To June 21'
    },
    {
      titre:'fesdbsdv',
      description:'To commemorate the arrival of spring, Tafsit - meaning spring - is a grand and unique occasion for colorful celebration that lasts three days.',
      start:'From Janvier 24',
      end:'To June 21'
    },
    {
      titre:'fesdbsdv',
      description:'To commemorate the arrival of spring, Tafsit - meaning spring - is a grand and unique occasion for colorful celebration that lasts three days.',
      start:'From Janvier 24',
      end:'To June 21'
    },
    
    
  ]
  return (
    <div class='bg-[#F5F3C1] h-full w-full'>
      <div class='bg-[#F5F3C1] h-full w-full max-w-6xl mx-auto'>
        <div class="w-full h-28 flex items-center justify-between py-10 px-20">
          
          <button class='h-20 w-20 flex items-center'>
            <img src={back} alt="Image" class="w-12 h-12"/>
          </button>
          <div class='h-20 w-20 rounded-full overflow-hidden'>
            <img class='object-center object-cover h-20' src={pic} alt="profile picture" />
          </div>
        </div>
        <div className="w-11/12 m-auto border border-[#0A4D68] mb-10"></div>
        <div class="h-full w-full">
            <h2 class="text-center font-fredoka font-bold text-black text-5xl mb-10">
              Great Mosque of Algiers
            </h2>
            <Swiper images={photos}></Swiper>
            <div class="bg-[#F7EFE5] w-[1197px] mx-auto px-10 py-5 rounded-3xl shadow-lg overflow-ellipsis overflow-hidden line-clamp-3 text-vertical text-[#252525] leading-[22px] font-fredoka font-bold text-lg mb-10 mt-10">
              <h2 class="font-fredoka font-bold text-black text-xl underline decoration-2">
                Description
              </h2>
              <p class="font-fredoka font-thin text-black text-base">
                {infos.description}
              </p>
            </div>
            <div class="bg-[#F7EFE5] w-[1197px] mx-auto px-10 py-5 rounded-3xl shadow-lg text-[#252525] leading-[22px] font-fredoka font-bold text-lg mb-10 mt-10">
              <h2 class="font-fredoka font-bold text-black text-xl underline decoration-2 mb-7">
                Informations
              </h2>
              <div class='w-full flex items-start justify-between mb-5'>
                <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                  Wilaya
                </p>
                <p class="w-2/3 font-fredoka font-bold text-black text-lg">
                  {infos.wilaya}
                </p>
              </div>
              <div class='w-full flex items-start justify-between mb-5'>
                <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                  Adress
                </p>
                <p class="w-2/3 font-fredoka font-bold text-black text-lg">
                  {infos.adress}
                </p>
              </div>
              <div class='w-full flex items-start justify-between mb-5'>
                <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                  Categorie
                </p>
                <p class="w-2/3 font-fredoka font-bold text-black text-lg">
                  {infos.categorie}
                </p>
              </div>
              <div class='w-full flex items-start justify-between mb-5'>
                <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                  Theme
                </p>
                <p class="w-2/3 font-fredoka font-bold text-black text-lg">
                  {infos.theme}
                </p>
              </div>
              <div class='w-full flex items-start justify-between mb-5'>
                <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                  Timing
                </p>
                <p class="w-2/3 font-fredoka font-bold text-green-500 text-lg">
                  {infos.timing}
                </p>
              </div>
              <div class='w-full flex items-start justify-between mb-5'>
                <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                  Transport
                </p>
                <p class="w-2/3 font-fredoka font-bold text-black text-lg">
                  {infos.transport}
                </p>
              </div>
            </div>
            <h2 class="font-fredoka font-bold text-[#0A4D68] text-xl underline decoration-2 mb-7">
              Events and activities
            </h2>
            <div class="w-[1197px] mx-auto px-10 flex">
              {events.map((evenement)=>(
                <div
                  key={evenement}
                  class='w-[340px] h-[180px] bg-[#F7EFE5] shadow-lg rounded-xl mx-5 p-5'
                >
                  <h2 class="text-start font-fredoka font-bold text-[#0A4D68] text-lg">
                    {evenement.titre}
                  </h2>
                  <p class="font-fredoka font-thin text-black text-sm overflow-hidden line-clamp-3 text-vertical">
                    {evenement.description}
                  </p>
                  <h2 class="text-start font-fredoka font-bold text-green-500 text-lg">
                    {evenement.start}
                  </h2>
                  <h2 class="text-start font-fredoka font-bold text-green-500 text-lg mb-2">
                    {evenement.end}
                  </h2>
                </div>
              ))}
            </div>
            <h2 class="font-fredoka font-bold text-[#0A4D68] text-xl underline decoration-2 my-7">
              Comments
            </h2>
            <div class="h-12 flex items-center gap-5 pb-5">
              <textarea
                className="w-2/3 bg-[#F7EFE5] caret-[#0A4D68] shadow-lg font-fredoka font-normal text-lg text-black px-4 py-2 rounded-lg focus:outline-none resize-none h-12 placeholder:font-fredoka placeholder:font-normal placeholder:text-xl"
                placeholder="Add comment ..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button
                type="button"
                class="h-12 focus:outline-none font-fredoka font-semibold text-base text-black bg-[#05BFDB] hover:bg-[#0A4D68] focus:ring-4 focus:ring-[#217799] rounded-lg px-2 py-1"
              >
                Add
              </button>
            </div>
            <div class="bg-[#F7EFE5] w-[1197px] mx-auto px-10 py-5 rounded-3xl shadow-lg text-[#252525] leading-[22px] font-fredoka font-bold text-lg mb-20 mt-10">
                {comments.map((comment)=>(
                  <div
                    key={comment}
                    class=''
                  >
                    <div class='flex h-16 items-center'>
                      <div class='h-12 w-1/12'>
                        <img class='object-center object-cover h-12 w-12 rounded-full overflow-hidden' src={pic/*comment.user.pic*/} alt="user picture" />
                      </div>
                      <p class="w-10/12 font-fredoka font-thin text-black text-lg underline decoration-2 overflow-hidden line-clamp-3 text-vertical">
                        {comment.user.name}
                      </p>
                    </div>
                    <p class="font-fredoka font-thin text-gray-700 text-sm px-10 overflow-hidden line-clamp-3 text-vertical mb-7 mt-2">
                      {comment.comment}
                    </p>

                  </div>
                ))}
            </div>
            <div class='pb-20'></div>
          </div>
      </div>
    </div>
    
  )
}

export default InfoPage