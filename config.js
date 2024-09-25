const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
};
{"noiseKey":{"private":{"type":"Buffer","data":"MCn03upNAzExTaxG1/MuRSzGrfIhE8BwVgw6V4xHgnY="},"public":{"type":"Buffer","data":"scFhQ3OLVVaFU5jUEM4NA9MUZEw4CUZXKPIV2x0vDwk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"sD5p885RSrUdCjW9Ou18nXcRTecYTZpyd3mTKw5Tink="},"public":{"type":"Buffer","data":"ZOTM/cWIMHi18qVcPhCg0pJgqz9Cp4tkD26/PqEaExc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"qDsTORWH1Rww0rkQ8Sx5r3ldS4M16mzh5b49zkk5fF4="},"public":{"type":"Buffer","data":"zV+guv8UCAa12XvDLmGFJ/5szO1nBcWPD4cJVJsoAA0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"MDM4bVLL4LWryUVEI28RfVZPNwzJS+LLOyQ8YAF5aU0="},"public":{"type":"Buffer","data":"XEf4VAAZBQYWj8pUSeVO96cFGmnZCBAFJMQDsSOQcTc="}},"signature":{"type":"Buffer","data":"KYT31PIgRRnMn9jenKHc4tAeN2Qat+il/ClIOkzeMteSg5wLAgZTKnMsg5vG43T0Tw4wBQu8xVw+IgjbxxwUDw=="},"keyId":1},"registrationId":109,"advSecretKey":"Mi4nB9O4dP83wn2ViekZ2Y9LBIbTZY01s6OwvlEKm4g=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"tgz7KyKlSoGnoKZG4QcZHg","phoneId":"91257d67-7246-4cc5-9ef9-37c518205d70","identityId":{"type":"Buffer","data":"vlDqBngJkMSrXMrkcluBAWf1SAo="},"registered":true,"backupToken":{"type":"Buffer","data":"n1YS95Og7G4OCJNECtziNB7vEpA="},"registration":{},"pairingCode":"5E925SK8","me":{"id":"923556159234:35@s.whatsapp.net","lid":"32315367546886:35@lid"},"account":{"details":"CN6Nwd0BEN+SxLcGGAEgACgA","accountSignatureKey":"yYD0s06RpIlm7L3Huv5TaDnKDjpNZ9eOfX9uwpD1eFs=","accountSignature":"ymtC6ZLFXHf8HFE4IYzLjkHOKdD+8zRCcF7YhZ/O0L4f6ngDukbGQsXpcsSwyIjd9hR9sA8wEHTN7qg3KmBNAA==","deviceSignature":"MuEcwDBTX5EIqsl7F7ysTWMdluZjmotHuJZtp9cRVHgEcPJSVjvdYqNOscnwd+VykT2RvPXdn4LqlJ0KWYVoCA=="},"signalIdentities":[{"identifier":{"name":"923556159234:35@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcmA9LNOkaSJZuy9x7r+U2g5yg46TWfXjn1/bsKQ9Xhb"}}],"platform":"android","lastAccountSyncTimestamp":1727072626,"myAppStateKeyId":"AAAAAGCb"}
