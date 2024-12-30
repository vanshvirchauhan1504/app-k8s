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
                        sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@${SSH_IP_TEST_APP} << EOF
                            echo "Hello from Jenkins"
                            uptime
                            ls -a
                            cd app
                            git pull origin main
                            # Add more commands here
                        EOF
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
