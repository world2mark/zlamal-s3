# zlamal-s3
 CRDB to custom s3 server app


This app will let you use the s3 endpoint to send backups to an app, rather than actual cloud-storage


### CRDB Demo script
```
create table demo_table (c0 int, c1 string);
insert into demo_table values (1, 'one'), (2, 'two'), (3, 'many others');

create external connection zlamal_localhost_s3 AS 's3://localhost:4569/zlamal_backup_2024?AWS_ACCESS_KEY_ID=aaaa&AWS_SECRET_ACCESS_KEY=bbbb&AWS_REGION=ottawa';

backup into 's3://zlamal_backup_2024?AWS_ACCESS_KEY_ID=S3RVER&AWS_SECRET_ACCESS_KEY=S3RVER&AWS_ENDPOINT=http://localhost:4569';
```

