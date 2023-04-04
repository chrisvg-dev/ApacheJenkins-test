pipeline {
    agent any

    stages {
        stage('Build frontend') {
            steps {
                sh 'cd tasks'
                sh 'npm run build'
                sh 'echo something'
            }
        }

        stage('Deploy') {
            steps{
                sh 'echo Deploy'
            }
        }
    }
}