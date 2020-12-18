const { exec } = require("child_process");
let fs = require("fs")
let fetch = require("node-fetch")

async function obfuscate(key,script,options){
    try{
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
        for(let i = 0;i <= ops.length;i++){
            if(options.includes(ops[i])){
                body.options[i] = JSON.parse(options)[ops[i]]
            }
        }
        let a = await fetch('http://207.244.227.9:8080/obfuscate',{
            method: 'GET',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const bdy = a.body
        if(bdy.includes("res")){
            return json.res
        }else{
            let info = {
                "script": bdy,
                "reqsleft": a.headers.get('KeyUsed'),
                "keyused": a.headers.get('ReqsLeft'),
            }
            return info
        }
    }catch(e){
        throw e;
    }
}

module.exports.obfuscate = obfuscate;