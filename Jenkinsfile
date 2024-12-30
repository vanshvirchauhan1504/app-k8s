pipeline {
    agent any  // Runs on any available agent

    environment {
        MY_VAR = 'Some value'
    }

    stages {
        stage('SSH and List Directory') {
            steps {
                script {
                    sshagent(credentials: ['ssh-test']) {
                        // Using cat to read the deploy.sh file and pipe it into SSH
                        sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@${SSH_IP_TEST_APP} "bash -s" < deploy.sh
                        '''
                    }
                }
                
            }
        }                     
    }
    post {
        always {
            sleep 5
        }
    } 
}
