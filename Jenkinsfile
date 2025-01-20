pipeline {
    agent any

    environment {
        NODE_VERSION = '18.x' // Specify the Node.js version to use
        APP_NAME = 'react-app'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from Git repository...'
                checkout scm
            }
        }

        stage('Set Up Node.js') {
            steps {
                echo 'Setting up Node.js...'
                script {
                    def nodeTool = tool name: "NodeJS ${NODE_VERSION}", type: 'NodeJSInstallation'
                    env.PATH = "${nodeTool}/bin:${env.PATH}"
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building the React application...'
                sh 'npm run build'
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh '''
                    # Define your deployment steps here
                    # Example: Copy build to /var/www/html
                    sudo cp -r build/* /var/www/news-app/
                '''
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
