pipeline {
    agent any

    environment {
        IMAGE_NAME = "sambhavdocks/coffeestore"
    }

    stages {

        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Trivy Scan') {
    steps {
        sh 'trivy image --severity HIGH,CRITICAL $IMAGE_NAME:latest'
    }
}

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh '''
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    docker push $IMAGE_NAME:latest
                    docker logout
                    '''
                }
            }
        }
    }
}