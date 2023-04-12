pipeline {
    agent any

    stages {
        stage('Build frontend') {
            steps {
                sh 'cd /var/lib/jenkins/workspace/ReactSubdomainJob/tasks && npm install'
                sh 'cd /var/lib/jenkins/workspace/ReactSubdomainJob/tasks && npm run build'
                
            }
        }

        stage('Deploy') {
            steps{
                sh 'echo Deploy'
                sh 'rm -rf /var/www/react/*'
                sh 'cp -pr /var/lib/jenkins/workspace/ReactSubdomainJob/tasks/build/* /var/www/react'
            }
        }
    }
}