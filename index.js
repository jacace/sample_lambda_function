//created by jacace

var zlib = require('zlib');
const Kafka = require('node-rdkafka');

module.exports.handler  = async (input, context) => {
    
    var payload = Buffer.from(input.awslogs.data, 'base64');

    zlib.gunzip(payload, function(e, result) {

        if (e) {
            context.fail(e);
        } else {
            result = JSON.parse(result.toString('ascii'));

            const producer = new Kafka.Producer({
              'bootstrap.servers': 'pkc-ep9mm.us-east-2.aws.confluent.cloud:9092',
              'sasl.username': '3XKZQ2VLHWID6XTN',
              'sasl.password': 'oNJRkAMtmryJk5ZuwysqJx5FDiLnrnKjCxUL2Ueq5CPelydniKKuH9fdx2hXHIcu',
              'security.protocol': 'SASL_SSL',
              'sasl.mechanisms': 'PLAIN',
              'dr_msg_cb': true
          });  
      
          producer.produce('jacace-ecs-app', -1, result);
          producer.disconnect();

          console.log("Data Sent:", JSON.stringify(result, null, 2));
        }
    });
    
    context.succeed();

}
