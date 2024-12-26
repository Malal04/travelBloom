TravelBloom

Cette application permet aux utilisateurs de rechercher des recommandations de destinations de voyage, en fonction de leur saisie. Les résultats incluent des informations sur des plages, des temples, et des villes dans différents pays. Le projet utilise HTML, CSS et JavaScript pour la construction du site web, avec des données récupérées à partir d'un fichier JSON externe.

Fonctionnalités
Recherche de destinations : Entrez un mot-clé dans la barre de recherche pour filtrer les destinations de voyage en fonction des villes, plages, ou temples.
Affichage des résultats : Les résultats de recherche incluent des informations sur la destination, une image, une description et un lien vers un site web associé.
Réinitialisation de la recherche : Un bouton pour réinitialiser la recherche et vider les résultats.
Adaptabilité : L'interface est responsive et s'adapte aux appareils mobiles.
Technologies utilisées
HTML : Structure de la page web.
CSS : Stylisation du site avec un design moderne et réactif.
JavaScript : Logique de récupération des données, filtrage des résultats, et gestion des événements.
JSON : Fichier contenant les données des destinations (plages, temples, villes).
Installation et utilisation
Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Un éditeur de texte (par exemple, Visual Studio Code)
Un navigateur web moderne (Google Chrome, Mozilla Firefox, etc.)
Étapes d'installation
Clonez le dépôt :

bash
Copier le code
git clone https://github.com/Malal04/travelBloom.git
Accédez au répertoire du projet :

bash
Copier le code
cd travelBloom
Ouvrez le fichier index.html dans votre navigateur pour voir l'application en action.

Structure du projet
graphql
Copier le code
/travelBloom
|-- travel_recommendation.html           # Page d'accueil de l'application
|-- style.css           # Fichier CSS pour la mise en page et le style
|-- about.html
|-- about.css
|-- contact.html
|-- contact.css
|-- script.js            # Logique JavaScript pour la recherche et l'affichage
|-- images/              # Dossier contenant les images utilisées sur le site
|-- travel1.json         # Fichier JSON contenant les données des destinations
Fonctionnalité de la recherche
L'utilisateur peut rechercher des villes, plages, ou temples en entrant un mot-clé dans la barre de recherche. Les résultats sont filtrés en temps réel et affichés sous forme de cartes contenant des informations pertinentes, comme :

Le nom de la destination
Une image
Une description
Un lien vers un site web associé (si disponible)
Exemple de recherche :
Si l'utilisateur recherche "Tokyo", l'application affichera les informations sur Tokyo, ainsi que les détails sur les autres destinations liées à Tokyo, si elles sont présentes dans le fichier de données.

Contribution
Les contributions sont les bienvenues ! Si vous souhaitez contribuer au projet, suivez ces étapes :

Forkez le dépôt
Créez une nouvelle branche (git checkout -b feature-nouvelle-fonctionnalité)
Commitez vos changements (git commit -am 'Ajout d'une nouvelle fonctionnalité')
Poussez vos changements vers la branche principale (git push origin feature-nouvelle-fonctionnalité)
Ouvrez une pull request
