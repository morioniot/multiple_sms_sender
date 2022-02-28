# Multiple SMS Sender

Script to send multiple SMSs using the Twilio client for node.

## Usage

Fill in the list of phone numbers you want to send messages (sms) to in the `phoneNumbers` variable. All the numbers must include the country prefix. If they don't, an optional prefix can be specified which will be prepended to all the numbers in the list.