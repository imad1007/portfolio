import React from 'react';
import Navbar from '@/components/navbar';

export default function VeilleTechnologique() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        {/* Introduction */}
        <section>
          <h1 className="text-4xl font-bold mb-4">Qu'est-ce que la veille technologique ?</h1>
          <p className="text-lg">
            La veille technologique, élément de la veille stratégique, consiste à surveiller les évolutions techniques, les innovations dans un secteur d’activité donné. Elle comprend notamment la surveillance, la collecte, le partage et la diffusion d’informations permettant d’anticiper ou de s’informer sur des changements en matière de recherche, développement, brevets, lancement de nouveaux produits, matériaux, processus, concepts, innovation de fabrication, etc. Cela a pour but d’évaluer l’impact sur l’environnement et l’organisation.
          </p>
        </section>

        {/* Subject */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">Mon sujet de veille technologique</h2>
          <p className="text-lg">
            L'IA dans la cybersécurité est un sujet passionnant et risque d'être au cœur des problématiques de demain. Ce sujet allie mes intérêts pour les nouvelles technologies et la protection des données numériques, offrant ainsi une perspective unique sur les défis et les opportunités de notre ère numérique.
          </p>
        </section>

        {/* Methodology */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">Comment j'ai procédé ?</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              En utilisant <strong>Feedly</strong>, j'ai pu créer plusieurs flux d'information en recherchant des mots-clés pertinents.
            </li>
            <li>
              Grâce à <strong>Google Alertes</strong>, j'ai reçu quotidiennement un e-mail contenant les articles les plus pertinents sur l'IA et la cybersécurité.
            </li>
          </ul>
          <div className="mt-4 space-y-4">
            <img
              src="https://cdn.prod.website-files.com/6448e042598f8755ec802489/65ccb98f658dac5cf5448358_Capture.PNG"
              alt="Feedly capture"
              className="rounded shadow-md"
            />
            <img
              src="https://cdn.prod.website-files.com/6448e042598f8755ec802489/65ccbc895b674d5849474550_Capture2.PNG"
              alt="Google Alertes capture"
              className="rounded shadow-md"
            />
          </div>
        </section>

        {/* Visuals */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">À quoi ça ressemble ?</h2>
          <p className="text-lg mb-4">
            Voici Feedly, on voit apparaître tous les articles parus dans la journée.
          </p>
          <img
            src="https://cdn.prod.website-files.com/6448e042598f8755ec802489/65ccbf797b67706ca9dc43b8_Capture3.PNG"
            alt="Feedly articles"
            className="rounded shadow-md mb-4"
          />
          <p className="text-lg mb-4">
            Feedly restitue l'intégralité ou une partie de l’article. Il est possible d'aller directement sur le site en question en cliquant sur le bouton "visit website" en bas de page.
          </p>
          <img
            src="https://cdn.prod.website-files.com/6448e042598f8755ec802489/65ccc16961b0a38a315eff38_Capture4.PNG"
            alt="Feedly article view"
            className="rounded shadow-md mb-4"
          />
          <p className="text-lg mb-4">
            Voici Google Alertes, on voit certains des articles les plus intéressants en rapport avec notre sujet. Libre à nous de les consulter en entier ou de survoler les articles car tout n'est pas forcément pertinent.
          </p>
          <img
            src="https://cdn.prod.website-files.com/6448e042598f8755ec802489/65ccbc895b674d5849474550_Capture2.PNG"
            alt="Google Alertes articles"
            className="rounded shadow-md"
          />
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">À retenir</h2>
          <div className="space-y-8 border-l-2 border-blue-500 pl-6">
            <div>
              <h3 className="text-xl font-bold">Février 2023</h3>
              <p className="text-md">
                Un utilisateur a réussi à berner le système de sécurité de sa banque en utilisant une intelligence artificielle vocale, accessible gratuitement.
                <br />
                <a
                  href="https://www.capital.fr/economie-politique/un-homme-a-reussi-a-berner-le-systeme-de-securite-de-sa-banque-en-utilisant-une-ia-vocale-1465092"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lire
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Juillet 2023</h3>
              <p className="text-md">
                WormGPT, un clone de ChatGPT créé par un hacker, capable de créer des malwares, des messages de phishing ou toutes sortes de cyberattaques.
                <br />
                <a
                  href="https://www.lebigdata.fr/wormgpt-ia-hacker"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lire
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Septembre 2023</h3>
              <p className="text-md">
                Darktrace lance sa technologie Cyber AI Analyst après plus de trois ans de recherche. Une innovation révolutionnaire qui automatise les enquêtes sur les cyber-menaces à grande échelle.
                <br />
                <a
                  href="https://fr.darktrace.com/news/darktrace-announces-cyber-ai-analyst"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lire
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Mai 2024</h3>
              <p className="text-md">
                Defendis : l’intelligence artificielle au service de la Cybersécurité.
                <br />
                <a
                  href="https://maroc-diplomatique.net/defendis-lintelligence-artificielle-au-service-de-la-cybersecurite/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lire
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
