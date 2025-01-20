pipeline {
    agent any
    tools {
        nodejs "NodeJS_Latest" // Ensure this matches the configured Node.js version
    }
    environment {
        CI = 'true' // React's production build requirement
    }
    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install npm/yarn dependencies
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Deploy the app (customize this based on your deployment method)
                // Example: Copy build files to a web server
                sh 'cp -r build/* /var/www/news-app'
            }
        }
    }
    post {
        always {
            // Archive build artifacts
            archiveArtifacts artifacts: 'build/**', fingerprint: true
        }
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}