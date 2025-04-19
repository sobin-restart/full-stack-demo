pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/sobin-restart/full-stack-demo.git'
      }
    }

    stage('Docker Compose Build & Run') {
      steps {
        sh 'docker compose down'
        sh 'docker compose build --no-cache'
        sh 'docker compose up -d'
      }
    }
  }
}
