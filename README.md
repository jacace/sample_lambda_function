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