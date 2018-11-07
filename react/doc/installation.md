# Installation

Pour utiliser correctement cette application il est nécessaire de disposer d'une clef d'[API Google Maps](https://cloud.google.com/maps-platform/). Il faudra ensuite créer un fichier **".env"** de la forme suivante :

```
// .env

REACT_APP_GOOGLE_MAPS_API_KEY='my API Key'
```

Ce fichier sera à placer directement à la racine du projet :

```
react
  ├── doc
  ├── public
  ├── src
  ├── .env                <── ICI
  ├── .gitignore
  ├── README.md
  ├── package-lock.json
  └── package.json
```

## Environnement de test

`npm start` : Permet de lancer l'application dans un environnement de test. Le déploiement n'est pas optimisé mais le projet recompile dynamiquement.

## Deploiement

`npm run build` : Crée un dossier **"build"** dans lequel est créé une version _static_ de l'application. Celle-ci est optimisée et doit être utilisée pour la production.  
⚠ Il est nécessaire de disposer d'un serveur pour utiliser l'application ainsi déployée. Il est possible d'en simuler avec des outils comme [LiveServer](https://github.com/ritwickdey/vscode-live-server) pour "Visual Studio Code".