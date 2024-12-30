def remote=[:]
remote.name = "AWS"
remote.allowAnyHosts = true

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
                    remote.user = "ubuntu"
                    remote.host = env.SSH_IP_TEST_APP
                    remote.password = env.SSH_KEY_TEST_APP
                }
                sshCommand(remote:remote,command:"ls -a")
            }
        }
        post {
            always {
                sleep 5
            }
        }
                           

    }
}
