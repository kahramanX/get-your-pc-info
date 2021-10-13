let fs = require('fs');
let os = require('os');

function getPcInfos() {
    let ram = `Your free RAM: ${os.freemem()}`;
    let totalRam = `Your total RAM: ${os.totalmem()}`;

    let currentRam = os.totalmem() - os.freemem();
    

    return {
        ram,
        totalRam,
        currentRam
    };

}

fs.writeFile("your-PC-infos.txt", JSON.stringify(getPcInfos(),null, 2), 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }
});
