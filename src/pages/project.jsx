import React from "react";
import Navbar from "@/components/navbar";

export default function Project() {
  return (
    <>
      <Navbar />
      <div>
        <section className="bg-white dark:bg-zinc-950">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Mes projets
              </h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Découvrez une sélection de mes projets, illustrant mon expertise
                en développement et ma passion pour la création d'applications
                performantes et innovantes.🚀
              </p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <span>

                    Site web avec Wordpress
                    </span>
                    <span>
                      <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
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
                    </span>
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Exploration des cours et exercices de la formation, avec une
                    présentation de notre école.
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Jeu Snake en C
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Modification d'un jeu Snake existant pour développer des
                    compétences d'analyse et de continuation de code.
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Boutique en ligne Shopify
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Création d'une boutique en ligne avec intégration du moyen
                    de paiement PayPal.
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Site de gestion des interventions
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Développement d'un site avec PHP et des langages front-end,
                    interactif avec une base de données.
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-zinc-800 dark:border-gray-700">
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Logiciel de gestion des interventions en Java
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Développement d'un logiciel pour la gestion des
                    interventions en utilisant le langage Java.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
