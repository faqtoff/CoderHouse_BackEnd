CREATE USER 'appusrnode'@'localhost' IDENTIFIED BY 'appusrnode';

SHOW GRANTS FOR 'appusrnode'@'localhost';

CREATE USER 'appusrtest'@'localhost' IDENTIFIED BY 'appusrnode';
GRANT SELECT, update, delete, insert, create, alter, drop ON * . * TO 'appusrtest'@'localhost';

SHOW GRANTS FOR 'appusrtest'@'localhost';