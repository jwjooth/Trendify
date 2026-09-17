pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        BUN_PATH = '/home/jwjooth/.bun/bin/bun'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out code from Github...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies with Bun...'
                sh "${env.BUN_PATH} install"
            }
        }

        stage('Lint & Test') {
            steps {
                echo '🧪 Running linter and tests...'
                sh "${env.BUN_PATH} run lint"
                sh "${env.BUN_PATH} test"
            }
        }

        stage('Build Production') {
            steps {
                echo '🏗️ Building Production App...'
                sh "${env.BUN_PATH} run build"
            }
            post {
                always {
                    archiveArtifacts artifacts: 'dist/**', fingerprint: true
                }
            }
        }
    }

    post {
        failure {
            echo '💥 Pipeline failed! Check console output for details.'
        }
        success {
            echo '✨ Pipeline completed successfully!'
        }
    }
}