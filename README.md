This repo has a sample lambda function
<br>#Command to grant cloudwatch permission to stream logs to lambda
<br>aws lambda add-permission --function-name "sendLogs" --statement-id "sendLogs" --principal "logs.us-east-1.amazonaws.com" --action "lambda:InvokeFunction" --source-arn "arn:aws:logs:us-east-1:ABC:log-group:/log-group:*" --source-account "XYZ"
<br>
<br>For more information see: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#LambdaFunctionExample
<br>
npm init
<br>
npm install node-rdkafka
<br>
Note: node-rdkafka compiles native code which is platform specific so make sure you compile in an EC2 AWS AMI and install the dev tools below.
<br>
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
<br>
. ~/.nvm/nvm.sh
<br>
sudo yum groupinstall "Development Tools"
<br>
Then zip and upload your function
<br>
zip -r sample_lambda_func_nodejs .
