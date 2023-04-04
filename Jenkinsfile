pipeline {
    agent any

    stages {
        stage('Build frontend') {
            steps {
                sh 'cd /var/lib/jenkins/workspace/JenkinsTasksJob/tasks && npm run build'
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps{
                sh 'echo Deploy'
            }
        }
    }
}