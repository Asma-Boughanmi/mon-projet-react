pipeline {
    agent any

    environment {
        // Dossier local simulant un dossier de déploiement
        DEPLOY_DIR = '/tmp/deploiement-react'
    }

    stages {
        stage('Clone') {
            steps {
                echo '📦 Clonage du projet...'
                git branch: 'main', url: 'https://github.com/Asma-Boughanmi/mon-projet-react.git'
            }
        }

        stage('Install dependencies') {
            steps {
                echo '📦 Installation des dépendances...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo '🏗️ Build du projet...'
                sh 'npm run build'
            }
        }

        stage('Deploy locally') {
            steps {
                echo '🚀 Déploiement local dans $DEPLOY_DIR...'
                sh '''
                    mkdir -p $DEPLOY_DIR
                    rm -rf $DEPLOY_DIR/*
                    cp -r build/* $DEPLOY_DIR/
                    echo "✅ Déploiement local terminé dans $DEPLOY_DIR"
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline terminé avec succès.'
            echo '👉 Tu peux maintenant lancer manuellement :'
            echo '   cd /tmp/deploiement-react && npx serve -p 5000 .'
            echo '   Puis visiter : http://localhost:5000'
        }
        failure {
            echo '❌ Le pipeline a échoué.'
        }
    }
}
