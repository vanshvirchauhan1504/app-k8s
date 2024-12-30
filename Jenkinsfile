pipeline {
    agent any  // Runs on any available agent

    environment {
        // Define environment variables if
        MY_VAR = 'Some value'
    }

    stages {
        stage('DIRECTORY CONTENTS') {
            steps {
                // Runs a shell command and echoes
                sh 'ls -a'
                sh 'echo $SSH_KEY_TEST_APP'
                sh 'echo $SSH_IP_TEST_APP'
            }
        }
        stage('BUILDING') {
            steps {
                // Runs a shell command and echoes
                sh 'echo "HI BUILD PIPELINE"'
            }
        }
        
    }
}
