pipeline {
    agent any

    tools{
      NodeJS "NodeJS 16.14.0"
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
