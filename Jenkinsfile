pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                sshagent(credentials: ['ssh_github_access']) {                
                    sh 'git clone git@github.com:chrisvg-dev/ApacheJenkins-test.git .'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'echo Build'
            }
        }

        stage('Deploy') {
            steps{
                sh 'echo Deploy'
            }
        }
    }
}