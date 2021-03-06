DROP TABLE IF EXISTS CM_USER;
CREATE TABLE CM_USER (
  ID                INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  WECHAT_ID         VARCHAR(200) NOT NULL,
  NAME              VARCHAR(200) NOT NULL,
  GENDER            VARCHAR(200) NOT NULL,
  HOME              VARCHAR(200) NOT NULL,
  COMPANY           VARCHAR(200) NOT NULL,
  BIRTHDAY          VARCHAR(200) NOT NULL,
  RUTUAN            VARCHAR(200) NOT NULL,
  PHOTO_URL         VARCHAR(200) NOT NULL,
  STATUS            CHAR(1),
  CURR_LOGIN_AT     DATETIME,
  CURR_LOGIN_FROM   VARCHAR(15),
  LAST_LOGIN_AT     DATETIME,
  LAST_LOGIN_FROM   VARCHAR(15),
  CREATED_AT        DATETIME NOT NULL,
  CREATED_BY        INT UNSIGNED NOT NULL,
  UPDATED_AT        DATETIME,
  UPDATED_BY        INT UNSIGNED
) ENGINE = INNODB;