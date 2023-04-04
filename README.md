## PROJET

Ce projet est une to-do list réalisée en NodeJS, React et MySql.

-------------------------------------------------------------------------------------------------------------

## BASE DE DONNEES

Avant de lancer le script, pensez à télécharger le dump de la base de données. 
Ce dernier est présent dans le dossier **bdd** à la racine du projet.
Importer le dump dans votre système de gestion de base de données MySQL **local**.
(elle peut être remplie à souhaits, c'est seulement pour avoir une base préremplie)

-------------------------------------------------------------------------------------------------------------

## SERVER

Pour que la base soit correctement connectée au server, pensez à vérifier les logs de votre base
et les importer dans le script du server présent à la racine du projet (ligne 15):

const db = mysql.createConnection({
    host: 'localhost',
    user: '**root**',
    password: **''**,
    database: '**to_do**'
});

-------------------------------------------------------------------------------------------------------------

## LANCEMENT

Afin d'executer le projet, ouvrez **deux** terminaux. 

* DANS UN PREMIER TERMINAL :
Rendez-vous à la racine du projet, executez la commande : `npm install`.
Une fois les dépendances installés (nodes _modules), executez la commande : `npm start` pour lancer le server. 
(veillez à ce que ce dernier soit lancé sur le port 3001).

* DANS LE SECOND TERMINAL :
A partir de la racine du projet, rendez-vous dans le dossier du client en executant la commande `cd client`.
Executez la commande : `npm install`.
Une fois les dépendances installés (nodes _modules), executez ensuite la commande `npm start`.
(veillez à ce que ce dernier soit lancé sur le port 3000).
