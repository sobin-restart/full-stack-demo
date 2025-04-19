pipeline {
  agent any

  environment {
    COMPOSE_FILE = 'docker-compose.yml'
  }

  stages {
    stage('Clone Code') {
      steps {
        git branch: 'main', url: 'https://github.com/sobin-restart/full-stack-demo.git'
      }
    }

    stage('Build and Deploy') {
      steps {
        sh 'docker compose down'
        sh 'docker compose build --no-cache'
        sh 'docker compose up -d'
      }
    }
  }
}
