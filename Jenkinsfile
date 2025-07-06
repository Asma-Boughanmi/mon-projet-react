pipeline {
    agent {
        docker {
            image 'node:18'  // image officielle avec npm déjà installé
        }
    }

    stages {
        stage('Cloner le dépôt') {
            steps {
                git 'https://github.com/Asma-Boughanmi/mon-projet-react.git'
            }
        }

        stage('Installer les dépendances') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
