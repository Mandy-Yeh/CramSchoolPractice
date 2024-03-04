pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm -g install @angular/cli@13.3.11'
                sh 'ng --version'
                sh 'npm run-script build:c001'
                sh 'npm run-script build:platform'
                sh 'npm run-script build:c001:deploy'
                sh 'ng serve'
                sh 'npm start'
            }
        }
    }
}
