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
    '+573014521351',
    '+573102238983',
    '+573223156288',
    '+5213331924484',
    '+593995012762',
    '+5219991192268',
    '+5219994415535',
    '+5215537759484',
    '+5216181256367',
    '+5216181597740',
    '+5216183369562',
    '+5215542918470',
    '+5215610941858',
    '+5216677470931',
    '+5216672169296',
    '+5215531162361',
    '+573169229297',
    '+573178158664',
    '+593981926826',
    '+51918061725',
    '+593963012869',
    '+573028309697',
    '+573154228515',
    '+5214448482449',
    '+51958706315',
    '+51959723968',
    '+51982940808',
    '+5213314736886',
    '+5213339700764',
    '+5217775564101',
    '+59171925607',
    '+573197679856',
    '+573117977912',
    '+593939357104',
    '+593983707957',
    '+573184376236',
    '+5216671559775',
    '+593987873466',
    '+573135321005',
    '+56987232319',
    '+593997387292',
    '+5214445706540',
    '+5213312823305',
    '+573104421103',
    '+573157531340',
    '+573175943360',
    '+573113101904',
    '+50254181865',
    '+59179150152',
    '+59173041861',
    '+573025409942',
    '+593992200720',
    '+5219996443857',
    '+573156949543',
    '+573116149980',
    '+5219512831124',
    '+593993919621',
    '+593983950078',
    '+573007373846',
    '+5214445511692',
    '+5214422747956',
    '+5213315701059',
    '+5213330169712',
    '+5212211869351',
    '+573045729494',
    '+59173038757',
    '+59177214069',
    '+5216862509250',
    '+5219999454580',
    '+51923139817',
    '+51963711451',
    '+5213112025593',
    '+5219613287044',
    '+5216671040087',
    '+5214432181272',
    '+573007444604',
    '+593961919053',
    '+5212294168049',
    '+573215393985',
    '+573183423408',
    '+573233944357',
    '+593988102769',
    '+593984907212',
    '+5219991031898',
    '+5219994344116',
    '+5219999651601',
    '+573127108761',
    '+573214960507',
    '+573013132943',
    '+5215281148197',
    '+5218125427518',
    '+59176302465',
    '+593993056260',
    '+5214495808004',
    '+51917330131',
    '+51954742532',
    '+56973746500',
    '+56982851882',
    '+593995300106',
    '+51957112910',
    '+51984398321',
    '+51930839767',
    '+51959501545',
    '+573184305588',
    '+5212292648186',
    '+5213314171487',
    '+573122964426',
    '+573054383089',
    '+59167101823',
    '+5216621017487',
    '+5214434310747',
    '+5217224989673',
    '+59165875490',
    '+593984261050',
    '+5214495523254',
    '+51910416615',
    '+573014286188',
    '+5216641720516',
    '+573103059120',
    '+573134120757',
    '+573137588807',
    '+573102778307',
    '+573175789432',
    '+5218125058524',
    '+51920668019',
    '+5217774511890',
    '+5218442458992',
    '+573146437872',
    '+573153715976',
    '+5216181361887',
    '+5216182743275',
    '+5216183131056',
    '+5218115834772',
    '+5214431015673',
    '+573166686862',
    '+5215569008904',
    '+573166212956',
    '+573126961758',
    '+5214443863873',
    '+51942281131',
    '+573024309287',
    '+5214424325451',
    '+5212291596197',
    '+573233332760',
    '+5216861877249'
]

// add prefix only if list of phones do not have prefix and are all of the same country
sendMultipleSMSs(phoneNumbers)

