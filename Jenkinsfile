pipeline {
    agent any  // Runs on any available agent

    environment {
        MY_VAR = 'Some value'
    }

    stages {
        stage('SSH and List Directory') {
            steps {
                script {
                    // Using the SSH credentials to SSH into the remote server
                    sshagent([SSH_KEY_TEST_APP]) {
                        // Run the commands inside the SSH agent environment
                        sh """
                            echo 'Connecting to the remote server and listing directory contents...'
                            ssh -o StrictHostKeyChecking=no ubuntu@$SSH_IP_TEST_APP 'ls -a'
                        """
                    }
                }
            }
        }
        stage('DIRECTORY CONTENTS') {
            steps {
                sh 'echo "SSH Key Test App: $SSH_KEY_TEST_APP"'  // Print the environment variable value for debugging (avoid printing keys in production)
                sh 'echo "SSH IP Test App: $SSH_IP_TEST_APP"'    // Print the SSH IP address
                sh 'echo "My Var: $MY_VAR"'  // Test environment variable
            }
        }
        stage('BUILDING') {
            steps {
                sh 'echo "HI BUILD nknj PIPELINE"'
            }
        }
    }
}
