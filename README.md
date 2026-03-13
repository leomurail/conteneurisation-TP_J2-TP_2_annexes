# TP 2 - Docker Compose (Frontend + Backend + DB)

## Prérequis

- Docker
- Docker Compose
- Make

## Architecture

```bash
.
├── Makefile : makefile pour automatiser les tâches
├── README.md : ce fichier
├── TP_2_docker-compose_annexes.pdf : instructions du TP
├── backend
│   ├── Dockerfile : instructions pour construire l'image docker
│   ├── index.js : code source du backend
│   └── package.json : dépendances du backend
├── docker-compose.yml : docker compose file pour orchestrer les conteneurs
├── frontend
│   ├── Dockerfile : instructions pour construire l'image docker
│   ├── index.html : code source du frontend
│   └── nginx.conf : configuration nginx
└── init.sql : script sql pour initialiser la base de données
```

## Démarrage rapide

Pour lancer l'application, exécutez la commande suivante :

```bash
make up
```

L'application sera accessible à l'adresse suivante : [http://localhost:9000](http://localhost:9000)

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
