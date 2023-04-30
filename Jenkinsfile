pipeline {
    agent any

    stages {
        stage('Build frontend') {
            folder('tasks'){
                steps {
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