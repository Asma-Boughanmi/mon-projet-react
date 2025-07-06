pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Asma-Boughanmi/mon-projet-react.git'
            }
        }
        stage('Install dependencies') {
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
