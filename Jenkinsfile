@Library('cinehub-shared-lib') _

pipeline {
  agent any

  environment {
    DOCKER_BASE = "${DOCKERHUB_USER:-<DOCKERHUB_USER>}/cinehub"
    EC2_HOST = "${EC2_IP ?: '<EC2_IP>'}"
    EC2_USER = "${EC2_USER ?: 'ubuntu'}"
  }

  stages {
    stage('Run shared pipeline') {
      steps {
        script {
          ciPipeline(env.DOCKER_BASE)
        }
      }
    }
  }

  post {
    success { echo "✅ Build & Deploy done" }
    failure { echo "❌ Failed — check console" }
  }
}

