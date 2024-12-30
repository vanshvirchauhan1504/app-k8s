// def remote=[:]
// remote.name = "AWS"
// remote.allowAnyHosts = true

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
                        ssh -o StrictHostKeyChecking=no ubuntu@${SSH_IP_TEST_APP} 'echo "Hello from Jenkins" && uptime'
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
