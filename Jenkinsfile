pipeline {
    agent any

    stages {
        stage('Build frontend') {
            steps {
                sh 'cd /var/lib/jenkins/workspace/JenkinsTasksJob/tasks && npm install'
                sh 'cd /var/lib/jenkins/workspace/JenkinsTasksJob/tasks && npm run build'
                
            }
        }

        stage('Deploy') {
            steps{
                sh 'echo Deploy'
                sh 'rm -rf /var/www/html/*'
                sh 'cp -pr /var/lib/jenkins/workspace/JenkinsTasksJob/tasks/build/* /var/www/html'
            }
        }
    }
}