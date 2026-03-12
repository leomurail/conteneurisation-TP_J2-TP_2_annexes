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
```

L'application sera accessible à l'adresse suivante : [http://localhost:8080](http://localhost:8080)

## Commandes utiles (Makefile)

### Démarre les conteneurs en arrière-plan.

```bash
make up
```

### Arrête et supprime les conteneurs.

```bash
make down
```

### Affiche les logs des conteneurs en temps réel.

```bash
make logs
```

### (Re)construit les images Docker.

```bash
make build
```

### Clean tout

```bash
make clean
```
