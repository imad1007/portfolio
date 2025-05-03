import React from "react";
import Navbar from "@/components/navbar";

export default function Project() {
  return (
    <div className=" bg-cover bg-center bg-[url('https://img.freepik.com/premium-photo/vivid-blurred-colorful-wallpaper-background_759200-9453.jpg?semt=ais_hybrid')]">
      <Navbar />
      <div>
        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-950">
                Mes projets
              </h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-600">
                Découvrez une sélection de mes projets, illustrant mon expertise
                en développement et ma passion pour la création d'applications
                performantes et innovantes.🚀
              </p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-blue-300 dark:border-gray-700 p-2">
                <div>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-56 md:w-92 md:rounded-none md:rounded-s-lg" src="images/wordpressproject.jpeg" alt=""/>
                </div>
                <div className="p-5">
                  <div className="flex">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-950 mr-4">
                        Site web avec Wordpress
                      </h3>
                    </div>
                    <div>
                      <a href="/pdf/presentationwordpress">
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-gray-950"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-600">
                  <a
                        href="/pdf/presentationwordpress"
                        className="text-blue-700"
                      >
                        Voire la présentation
                      </a><br />
                    Exploration des cours et exercices de la formation, avec une
                    présentation de notre école.
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-blue-300 dark:border-gray-700 p-2">
                <div>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-56 md:w-92 md:rounded-none md:rounded-s-lg" src="images/snackGame.jpeg" alt=""/>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-950">
                    Jeu Snake en C
                  </h3>
                  <a
                    href="powerpoint/snack"
                    
                    className="text-blue-700"
                  >
                    Voire la présentation
                  </a>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-600">
                    Modification d'un jeu Snake existant pour développer des
                    compétences d'analyse et de continuation de code.
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-blue-300 dark:border-gray-700 p-2">
                <div>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-56 md:w-92 md:rounded-none md:rounded-s-lg" src="images/shopifyWebsitez.jpeg" alt=""/>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-950">
                    Boutique en ligne Shopify
                  </h3>
                  {/* <a
                    href="powerpoint/power1.pptx"
                    download="shopify.pptx"
                    className="text-blue-700"
                  >
                    télécharger la présentation
                  </a> */}

                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-600">
                    Création d'une boutique en ligne avec intégration du moyen
                    de paiement PayPal.
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-blue-300 dark:border-gray-700 p-2">
                <div>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-56 md:w-92 md:rounded-none md:rounded-s-lg" src="images/shopifyWebsite.jpeg" alt=""/>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-950">
                    Site de gestion des interventions
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-600">
                    <a href="https://urlr.me/4pketz" className="text-blue-700 text-md">Lien github <span></span></a><br />
                    Développement d'un site avec PHP et des langages front-end,
                    interactif avec une base de données.
                  </p>
                </div>
              </div>

              {/* <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-blue-300 dark:border-gray-700 p-2">
                <div>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-56 md:w-92 md:rounded-none md:rounded-s-lg" src="images/wordpressproject.jpeg" alt=""/>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-950">
                    <a href="https://urlr.me/9jxfzT" className="text-blue-700 text-md">Lien github <span></span></a><br />
                    Logiciel de gestion des interventions en Java
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-600">
                    Développement d'un logiciel pour la gestion des
                    interventions en utilisant le langage Java.
                  </p>
                </div>
              </div> */}

              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-blue-300 dark:border-gray-700 p-2">
                {/* <div>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-56 md:w-92 md:rounded-none md:rounded-s-lg" src="images/wordpressproject.jpeg" alt=""/>
                </div> */}
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-950">
                    <a href="pdf/glpi" className="text-blue-700 text-md">Voire la présentation <span></span></a><br />
                    GLPI 
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-600">
                  Ce projet, intitulé GLPI Gestion Tickets, vise à mettre en place une plateforme centralisée pour la création, le suivi et la résolution des tickets d’incidents et de demandes au sein de l’organisation. Il permet d’optimiser la gestion du support informatique grâce à l’automatisation des processus et à la traçabilité des interventions.
                  </p>
                </div>
              </div>

              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-blue-300 dark:border-gray-700 p-2">
                {/* <div>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-56 md:w-92 md:rounded-none md:rounded-s-lg" src="images/wordpressproject.jpeg" alt=""/>
                </div> */}
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-950">
                    <a href="pdf/tableau_synthese_bts_sio_2025.pdf" className="text-blue-700 text-md">Voire la présentation <span></span></a><br />
                    Mon tableau de synthese
                  </h3>
                  {/* <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-600">
                  Ce projet, intitulé GLPI Gestion Tickets, vise à mettre en place une plateforme centralisée pour la création, le suivi et la résolution des tickets d’incidents et de demandes au sein de l’organisation. Il permet d’optimiser la gestion du support informatique grâce à l’automatisation des processus et à la traçabilité des interventions.
                  </p> */}
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
