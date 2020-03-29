pipeline {
  agent { docker { image 'node:12.16.1' } }
  stages {
    stage('pre-build') {
      steps {
        echo 'Pre-building'
        sh 'node --version'
        sh 'npm install'
      }
    }
    stage('build') {
      steps {
        echo 'Building project'
        sh 'npm run-script build'
      }
    }
    stage('testing') {
      steps {
        echo 'Running all tests'
      }
    }
    stage('deployment develop') {
      when {
        branch 'develop'
      }
      steps {
        echo "Preparing $BRANCH_NAME for deployment"
        sh 'git push -f https://heroku:$HEROKU_KEY@git.heroku.com/ion-research-dev-2020.git HEAD:master'
      }
    }
    stage('deployment release') {
      when {
        branch 'release'
      }
      steps {
        echo "Preparing $BRANCH_NAME for deployment"
        sh 'git push -f https://heroku:$HEROKU_KEY@git.heroku.com/ion-research-release-2020.git HEAD:master'
      }
    }
  }
  environment {
    CI = 'true'
  }
}