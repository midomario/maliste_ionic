## Etapes pour tester le projet : 
- Ce projet est réalisé avec Ionic/Angular
- Pour voir une expérience optimale, c'est suggéré de mettre le navigateur en mode mobile
## 1 - cloner le repo & installer les packages
 
 ```bash
 git clone https://github.com/midomario/test_ionic_maliste.git
 ```
 
 ```bash
 cd frontend && npm i
 ```
 
 ```bash
 cd ../backend && npm i
  ```
 
 ```bash
 cd ..
 ```
## 2 - Exécuter cette commande pour construire et démarrer les conteneurs :
- ### démarrer
 
 ```bash
 docker-compose up --build
 ```
- ### accès frontend :
> http://localhost (ou bien http://localhost:80) 
- ### accès backend :
> http://localhost:3000/api/items

- ### arrêter
```bash
 docker-compose down
 ```