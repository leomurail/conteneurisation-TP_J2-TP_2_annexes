# TP 2 - Docker Compose (Frontend + Backend + DB)

Ce projet implémente une architecture multi-services avec Docker Compose, comprenant un backend (Node.js), un frontend (Nginx/HTML), et une base de données (PostgreSQL).

## Prérequis

- Docker
- Docker Compose
- Make (optionnel, pour utiliser le Makefile)

## Démarrage rapide

Pour lancer l'application, exécutez la commande suivante :

```bash
make up
# ou : docker compose up -d
```

L'application sera accessible à l'adresse suivante : [http://localhost:8080](http://localhost:8080)

## Commandes utiles (Makefile)

- `make up` : Démarre les conteneurs en arrière-plan.
- `make down` : Arrête et supprime les conteneurs.
- `make logs` : Affiche les logs des conteneurs en temps réel.
- `make build` : (Re)construit les images Docker.
- `make clean` : Arrête les conteneurs, supprime les volumes et nettoie les ressources Docker inutilisées.

## Architecture

- **Frontend** : Servi par Nginx sur le port 8080. Il interroge le backend via un reverse proxy configuré dans Nginx.
- **Backend** : API Node.js/Express sur le port 3000. Il se connecte à la base de données pour récupérer le message.
- **Base de données** : PostgreSQL. Un script d'initialisation (`init.sql`) insère un message par défaut.
# conteneurisation-TP_J2-TP_2_annexes
