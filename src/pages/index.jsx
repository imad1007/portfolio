import React from "react";
import Navbar from "../components/navbar";
export default function Hero() {
  return (
    <div>
      <Navbar />
      <section class="bg-gradient-to-r from-[#19ffbf8f] via-[#ffffcd] to-[#00ff5e8c] h-screen w-full   backdrop-blur-lg border-b border-gray-700">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <p className="text-2xl dark:text-zinc-950 fonr-bold mb-10">
              Bonjour 👋, je m'appelle
            </p>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-zinc-950">
              Youssef baghdadi
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-950">
              étudiant en 2ème année de BTS SIO
            </p>
            <a
              href="/pdf/youssef.pdf"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            > 
             Consultez mon CV
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

          </div>
          <div class=" lg:mt-0 lg:col-span-5 lg:flex h-96 w-96 mt-4">
            <img src="/images/youssef.jpeg" alt="mockup" className="rounded-xl" />
          </div>
        </div>
      </section>
      <section class="  bg-white  bg-cover bg-center bg-no-repeat  h-screen shadow-md shadow-zinc-950 border-b border-gray-700">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            {/* <p className="text-2xl dark:text-zinc-950 fonr-bold mb-10">
            Bonjour 👋, je m'appelle
            </p> */}
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-zinc-950">
              Présentation 👨🏻‍💻
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-950">
              J'ai débuté le développement web en autodidacte vers fin 2017, en
              réalisant de petits projets. Puis, j'ai commencé à explorer le
              back-end il y a 2 ans avec l'apprentissage du langage PHP. Le BTS
              SIO m'a permis de structurer mes apprentissages et à améliorer mon
              organisation.
            </p>

            {/* <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-zinc-950 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a> */}
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex h-96 w-96">
            <img src="https://studyplus.ma/wp-content/uploads/2024/12/VIE-ECOLE-IRIS-PARIS-4_ce0ayx.jpg" alt="mockup" />
          </div>
        </div>
      </section>
      <section class="bg-white    bg-cover bg-center bg-no-repeat  h-screen shadow-md shadow-zinc-950 border-b border-gray-700">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            {/* <p className="text-2xl dark:text-zinc-950 fonr-bold mb-10">
            Bonjour 👋, je m'appelle
            </p> */}
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-zinc-950">
              Qu'est ce que le BTS SIO 🎓 ?
            </h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-950">
              Avant de commencer à parler de moi, je vous propose de présenter
              en premier lieu ma filière dont je suis affecté Le Brevet de
              Technicien Supérieur aux Services Informatiques aux Organisations
              (BTS SIO), s'adresse à ceux qui souhaitent se former en deux ans
              aux métiers d'administrateur réseau ou de développeur. Pour par la
              suite intégré directement le marché du travail ou continuer des
              études, dans le domaine de l'informatique.
            </p>

            {/* <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-zinc-950 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a> */}
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex h-96 w-96">
            {/* <img
              src="/images/heroImage.png"
              alt="mockup"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
