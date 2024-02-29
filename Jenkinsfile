pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run-script build:c001'
                sh 'npm run-script build:platform'
                sh 'npm run-script build:c001:deploy'
                sh 'npm run-script serve:platform'
            }
        }
    }
}
