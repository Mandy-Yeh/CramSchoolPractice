pipeline {
    agent any

    tools{
      nodejs "NodeJS 16.14.0"
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
