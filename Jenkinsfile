pipeline {
    agent any

    stages {
        stage('Build frontend') {            
            steps {
                dir('tasks'){
                    sh 'npm install'
                    sh 'npm run build'
                }
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