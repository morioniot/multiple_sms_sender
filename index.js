const twilio = require('twilio')

const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN

const client =  new twilio(ACCOUNT_SID, AUTH_TOKEN);


/**
 * Send SMS using the Twilio client. Print if the SMS was successfully sent or not
 * @param {string} phoneNumber - phone number to send sms
 * @param {string} prefix - (optional) prefix prepended to the number
 */
const sendSMS = async (phoneNumber, prefix) => {

    try {
        let fullPhoneNumber = phoneNumber
        if (!!prefix)
            fullPhoneNumber = prefix + fullPhoneNumber

        const result = await client.messages.create({
            body: messageToSend,
            from: '+14159930244',
            to: fullPhoneNumber
        })

        if (result.errorMessage === null)
            console.log(fullPhoneNumber + ': OK')
        else
            console.log(fullPhoneNumber + ': ' + result.errorMessage)
    }
    catch (e) {
        console.log(phoneNumber + ': ' + e.message)
    }
}


/**
 * Send SMS using the Twilio client. Print if the SMS was successfully sent or not
 * @param {[string]} phoneNumbers - numbers of phones to send sms
 * @param {string} prefix - (optional) prefix prepended to all the numbers
 */
const sendMultipleSMSs = async (phoneNumbers, prefix) => {

    if(phoneNumbers.length === 0)
        return

    for(let i = 0, size = phoneNumbers.length; i < size; i++)
        await sendSMS(phoneNumbers[i], prefix)
}

const ARGENTINA_PREFIX = '+54'
const BOLIVIA_PREFIX = '+591'
const CHILE_PREFIX = '+56'
const COLOMBIA_PREFIX = '+57'
const ECUADOR_PREFIX = '+593'
const SPAIN_PREFIX = '+34'
const MEXICO_PREFIX = '+521'
const PERU_PREFIX = '+51'
const PARAGUAY_PREFIX = '+595'

// set the message to send
const messageToSend = 'Perdiste tu mascota? Somos Clabki y queremos ayudarte a encontrarla. Escribe a https://wa.me/573002740255'

// fill in the numbers you want to send messages to
const phoneNumbers = [
    /* Example 
    '+573108529139',
    '+573196855528'*/
]

// add prefix only if list of phones do not have prefix and are all of the same country
sendMultipleSMSs(phoneNumbers)

