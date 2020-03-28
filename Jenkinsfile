pipeline {
    agent {
        docker { image 'node:7-alpine' }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('pre-build') {
            steps {
                sh 'node --version'
            }
        }

        stage('build') {
            steps {

            }
        }

        stage ('Deploy develop') {
            when {
                branch 'develop'
            }
            steps {

            }
        }

        stage ('Deploy release') {
            when {
                branch 'release'
            }
            steps {
                
            }
        }
    }
}