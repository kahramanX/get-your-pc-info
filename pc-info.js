let fs = require('fs');
let os = require('os');

getPcInfosObj = {
    ram:`Your free RAM: ${os.freemem()}`,
    totalRam: `Your total RAM: ${os.totalmem()}`,
    howManyCpu: `there is "${os.cpus().length}" cpu`,
    arch: `architect : ${os.arch()}`,
    platform: `platform : ${os.platform()}`,
    upTime: `system upTime of seconds : ${os.uptime()}`,
    version: `version : ${os.version()}`,
    osType: `OS Type : ${os.type()}`
}

fs.writeFile("your-PC-infos.txt", JSON.stringify(getPcInfosObj, null, 2), 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }
    //success
    console.log("success")
});