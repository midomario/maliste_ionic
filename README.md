## Etapes pour tester le projet :

- Ce projet est réalisé avec Ionic/Angular
- Pour voir une expérience optimale, c'est suggéré de mettre le navigateur en mode mobile

## cloner le repo

```bash
git clone https://github.com/midomario/maliste_ionic.git
```

```bash
cd maliste_ionic
```

## 1 - installer les packages et démarrer les services (Local)

```bash
cd frontend && npm i
```

```bash
ionic serve --open
```

```bash
cd ../backend && npm i
```

```bash
node server.js
```

## 2 - Exécuter cette commande pour construire et démarrer les conteneurs (DOCKER) :

- ### démarrer

```bash
docker-compose up --build
```

- ### accès frontend :
  > http://localhost:4200
- ### accès backend :

  > http://localhost:3000/api/items

- ### arrêter

```bash
 docker-compose down
```
