import React, { useEffect, useState } from "react";
import pic from "./pic/pic8.png";
import back from "./pic/Back.png";
import Swiper from "./Swiper";
import { getPIById } from "./utils/axios/pointInteret";
import { useSearchParams } from "react-router-dom";
import { createCommentaire } from "./utils/axios/commentaire";

function InfoPage() {
  const [infos, setInfos] = useState({
    categorie: {
      nom: "",
    },
    theme: [
      {
        nom: "",
      },
    ],
    transport: [],
    nom: "",
    description: "",
    wilaya: {
      nom: "",
    },
    adresse: "",
    latitude: 0.0,
    longitude: 0.0,
    heur_ouverture: "",
    heur_fermeture: "",
  });
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [photos, setPhotos] = useState([]);
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getPIById(searchParams.get("id")).then((lieu) => {
      setInfos(lieu);
      setComments(lieu.commentaires);
      setEvents(lieu.evenements);
      setPhotos(lieu.photos);
    });
  }, []);
  return (
    <div class="bg-[#F5F3C1] h-full w-full">
      <div class="bg-[#F5F3C1] h-full w-full max-w-6xl mx-auto">
        <div class="w-full h-28 flex items-center justify-between py-10 px-20">
          <button class="h-20 w-20 flex items-center">
            <img src={back} alt="Image" class="w-12 h-12" />
          </button>
          <div class="h-20 w-20 rounded-full overflow-hidden">
            <img
              class="object-center object-cover h-20"
              src={pic}
              alt="profile picture"
            />
          </div>
        </div>
        <div className="w-11/12 m-auto border border-[#0A4D68] mb-10"></div>
        <div class="h-full w-full">
          <h2 class="text-center font-fredoka font-bold text-black text-5xl mb-10">
            {infos.nom}
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
            <div class="w-full flex items-start justify-between mb-5">
              <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                Wilaya
              </p>
              <p class="w-2/3 font-fredoka font-bold text-black text-lg">
                {infos.wilaya.nom}
              </p>
            </div>
            <div class="w-full flex items-start justify-between mb-5">
              <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                Adress
              </p>
              <p class="w-2/3 font-fredoka font-bold text-black text-lg">
                {infos.adresse}
              </p>
            </div>
            <div class="w-full flex items-start justify-between mb-5">
              <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                Categorie
              </p>
              <p class="w-2/3 font-fredoka font-bold text-black text-lg">
                {infos.categorie.nom}
              </p>
            </div>
            <div class="w-full flex items-start justify-between mb-5">
              <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                Theme
              </p>
              <p class="w-2/3 font-fredoka font-bold text-black text-lg">
                {infos.theme.nom}
              </p>
            </div>
            <div class="w-full flex items-start justify-between mb-5">
              <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                Timing
              </p>
              <p class="w-2/3 font-fredoka font-bold text-green-500 text-lg">
                {"de " + infos.heur_ouverture + " a " + infos.heur_fermeture}
              </p>
            </div>
            <div class="w-full flex items-start justify-between mb-5">
              <p class="w-1/3 font-fredoka font-bold text-[#0A4D68] text-lg">
                Transport
              </p>
              {infos.transport.map(({ nom }) => (
                <p class="w-2/3 font-fredoka font-bold text-black text-lg">
                  {nom}
                </p>
              ))}
            </div>
          </div>
          <h2 class="font-fredoka font-bold text-[#0A4D68] text-xl underline decoration-2 mb-7">
            Events and activities
          </h2>
          <div class="w-[1197px] mx-auto px-10 flex">
            {events.map((evenement) => (
              <div
                key={evenement}
                class="w-[340px] h-[180px] bg-[#F7EFE5] shadow-lg rounded-xl mx-5 p-5"
              >
                <h2 class="text-start font-fredoka font-bold text-[#0A4D68] text-lg">
                  {evenement.nom}
                </h2>
                <p class="font-fredoka font-thin text-black text-sm overflow-hidden line-clamp-3 text-vertical">
                  {evenement.description}
                </p>
                <h2 class="text-start font-fredoka font-bold text-green-500 text-lg">
                  {evenement.date_debut}
                </h2>
                <h2 class="text-start font-fredoka font-bold text-green-500 text-lg mb-2">
                  {evenement.date_fin}
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
              onClick={async () => {
                const cmm = await createCommentaire(
                  comment,
                  searchParams.get("id")
                );
                console.log(cmm);
                setComments((prv) => [...prv, cmm]);
                setComment("");
              }}
            >
              Add
            </button>
          </div>
          <div class="bg-[#F7EFE5] w-[1197px] mx-auto px-10 py-5 rounded-3xl shadow-lg text-[#252525] leading-[22px] font-fredoka font-bold text-lg mb-20 mt-10">
            {comments.map((comment) => (
              <div key={comment} class="">
                <div class="flex h-16 items-center">
                  <div class="h-12 w-1/12">
                    <img
                      class="object-center object-cover h-12 w-12 rounded-full overflow-hidden"
                      src={comment.user.picture}
                      alt="user "
                    />
                  </div>
                  <p class="w-10/12 font-fredoka font-thin text-black text-lg underline decoration-2 overflow-hidden line-clamp-3 text-vertical">
                    {comment.user.nom}
                  </p>
                </div>
                <p class="font-fredoka font-thin text-gray-700 text-sm px-10 overflow-hidden line-clamp-3 text-vertical mb-7 mt-2">
                  {comment.commentaire}
                </p>
              </div>
            ))}
          </div>
          <div class="pb-20"></div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
