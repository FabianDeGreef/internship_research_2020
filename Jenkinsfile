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
                sh 'node --version'

            }
        }

        stage ('Deploy develop') {
            when {
                branch 'develop'
            }
            steps {
                sh 'node --version'

            }
        }

        stage ('Deploy release') {
            when {
                branch 'release'
            }
            steps {
                sh 'node --version'
            }
        }
    }
}