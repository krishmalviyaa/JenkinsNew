pipeline {
    agent any

    stages {
        stage('Check Files') {
            steps {
                script {
                    for (name in ['index.html', 'style.css', 'script.js']) {
                        if (!fileExists(name)) {
                            error("Required file missing: ${name}")
                        }
                    }
                }
                echo 'All required files are present.'
            }
        }

        stage('Build') {
            steps {
                bat '''
                    @echo off
                    if exist dist rmdir /s /q dist
                    mkdir dist
                    if errorlevel 1 exit /b 1

                    copy /Y index.html dist
                    if errorlevel 1 exit /b 1

                    copy /Y style.css dist
                    if errorlevel 1 exit /b 1

                    copy /Y script.js dist
                    if errorlevel 1 exit /b 1
                '''
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'dist/*',
                                 fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Daily Tasks build completed successfully!'
        }
        failure {
            echo 'Build failed. Check Console Output.'
        }
    }
}