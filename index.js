'use strict';


console.log('Zlamal S3 App');


/*

create table demo_table (c0 int, c1 string);
insert into demo_table values (1, 'one'), (2, 'two'), (3, 'many others');

create external connection zlamal_localhost_s3 AS 's3://localhost:4569/zlamal_backup_2024?AWS_ACCESS_KEY_ID=aaaa&AWS_SECRET_ACCESS_KEY=bbbb&AWS_REGION=ottawa';

backup into 's3://zlamal_backup_2024?AWS_ACCESS_KEY_ID=S3RVER&AWS_SECRET_ACCESS_KEY=S3RVER&AWS_ENDPOINT=http://localhost:4569';

*/



// https://github.com/jamhall/s3rver/tree/main


const S3rver = require('s3rver');

async function RunServer() {

    const buckets = [{
        name: 'zlamal_backup_2024'
    }, {
        name: 'bucket2'
    }];

    const S3Instance = new S3rver({
        port: 4569,
        address: 'localhost',
        silent: false,
        directory: '/Users/markzlamal/Documents/world2mark/zlamal-s3/MY_DATA',
        configureBuckets: buckets,
    });

    const runResult = await S3Instance.run();


    const { fromEvent } = require('rxjs');
    const s3Events = fromEvent(S3Instance, 'event');

    s3Events.subscribe((event) => console.log(event));

    console.log(runResult);
};


RunServer().catch(err => {
    console.error(err);
});
