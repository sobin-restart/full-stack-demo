pipeline {
  agent any

  environment {
    // Database credentials from Jenkins
    MYSQL_PASSWORD      = credentials('MYSQL_PASSWORD')

    // Non-sensitive config
    MYSQL_DATABASE = 'express-db'
    MYSQL_USER     = 'myapp_user'
    DB_HOST        = 'db'
    DB_NAME        = 'express-db'
    PORT           = '3000'
    API_BASE_URL   = 'http://express-api:3000/api'
  }

  stages {
    stage('Clone Repository') {
      steps {
        git branch: 'main', url: 'https://github.com/sobin-restart/full-stack-demo.git'
      }
    }

    stage('Generate .env files') {
      steps {
        script {
          // Root .env
          writeFile file: '.env', text: """
MYSQL_DATABASE=${MYSQL_DATABASE}
MYSQL_USER=${MYSQL_USER}
MYSQL_PASSWORD=${MYSQL_PASSWORD}
"""

          // express-api/.env
          writeFile file: 'express-api/.env', text: """
PORT=${PORT}
DB_HOST=${DB_HOST}
DB_USER=${MYSQL_USER}
DB_PASSWORD=${MYSQL_PASSWORD}
DB_NAME=${DB_NAME}
"""

          // nuxt-app/.env
          writeFile file: 'nuxt-app/.env', text: """
API_BASE_URL=${API_BASE_URL}
"""
        }
      }
    }

    stage('Build and Deploy with Docker Compose') {
      steps {
        sh 'docker compose down'
        sh 'docker compose build --no-cache'
        sh 'docker compose up -d'
      }
    }
  }
}
