var request = require('request')

function run(number)
{
    request.post(
        'https://discord.com/api/v9/auth/forgot',
        { json: { login: number, captcha_key: null } },
        function(error, response, body)
        {
            console.log(body)
            if(response.statusCode == 403)
            {
                if(body.code == 70007 || body.message == 'You need to verify your phone number in order to perform this action.')
                {
                    console.log(`[DISCORD] Sent SMS to ${number}.`)
                }
            }
        }
    )
}

exports.run = run;