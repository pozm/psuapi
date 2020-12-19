const { exec } = require("child_process");
let fs = require("fs")
let fetch = require("node-fetch")
async function obfuscate(key,script,options){
    let body = {
        "key": key,
        "script": script,
        "options": {
            "DisableSuperOperators": false,
            "MaximumSecurityEnabled": false,
            "ControlFlowObfuscation": true,
            "ConstantEncryption": false,
            "EncryptAllStrings": false,
            "DisableAllMacros": false,
            "EnhancedOutput": false,
            "EnhancedConstantEncryption": false,
            "CompressedOutput": false,
            "PremiumFormat": false,
            "ByteCodeMode": "Default"
        }
    }
    let possibleops = [
        "DisableSuperOperators",
        "MaximumSecurityEnabled",
        "ControlFlowObfuscation",
        "ConstantEncryption",
        "EncryptAllStrings",
        "DisableAllMacros",
        "EnhancedOutput",
        "EnhancedConstantEncryption",
        "CompressedOutput",
        "PremiumFormat",
        "ByteCodeMode"
    ]
    for(let i = 0;i < possibleops.length;i++){
        if(options[possibleops[i]] != undefined || options[possibleops[i]] != "undefined"){
            body.options[possibleops[i]] = options[possibleops[i]]
        }
    }
    let a = await fetch('http://api.psu.dev:8080/obfuscate',{
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await a.text();
}

module.exports.obfuscate = obfuscate;
