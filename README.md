# Continuous Deployment with GitHub Webhooks, Jenkins, and AWS EC2

This project demonstrates continuous deployment using **GitHub Webhooks**, **Jenkins Pipeline**, and **AWS EC2**. It automates the deployment process by triggering Jenkins jobs through GitHub webhooks, which SSH into an EC2 instance and deploy the latest code updates.

## Features
- **GitHub Webhook** triggers Jenkins Pipeline on code changes.
- **Jenkinsfile** in the repository defines the pipeline.
- Jenkins SSHs into the AWS EC2 instance.
- A process manager detects updates from `git pull` and restarts services.
(The initial clone should be done manually on the instance)

## Prerequisites
- GitHub repository with code.
- Jenkins setup with the **GitHub plugin**.
- AWS EC2 instance with SSH access configured.
- Process manager (e.g., PM2) running on the EC2 instance.

## Setup

### 1. **GitHub Webhook Configuration**
   - Go to your GitHub repository **Settings** > **Webhooks**.
   - Add a webhook with the Jenkins URL: `http://<Jenkins_URL>/github-webhook/`.
   - Select **application/json** as the content type.
   - Choose **Just the push event**.

### 2. **Jenkins Pipeline**
   - In Jenkins, create a **Pipeline** job.
   - Point Jenkins to the repository containing the `Jenkinsfile`.
   - Set up GitHub webhook trigger in Jenkins under **Build Triggers**.

### 3. **EC2 Instance Setup**
   - SSH access must be enabled on the EC2 instance.
   - Ensure a process manager (e.g., PM2) is configured to restart the application after a `git pull`.

### 4. **Testing**
   - Push changes to GitHub.
   - The webhook triggers Jenkins to SSH into the EC2 instance and deploy updates.

