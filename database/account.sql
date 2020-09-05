/*CREATE TABLE IF NOT EXISTS `restaurant`.`Account` (
  `acc_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(30) NOT NULL,
  `firstname` VARCHAR(20) NOT NULL,
  `lastname` VARCHAR(20) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `phonenumber` INT(8) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(10) NULL,
  `profile_pic` BLOB NULL,
  PRIMARY KEY (`acc_id`),
  UNIQUE INDEX `acc_id_UNIQUE` (`acc_id` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;
*/
use restaurant;

CREATE TABLE IF NOT EXISTS `restaurant`.`Account` (
  `acc_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(30) NOT NULL,
  `firstname` VARCHAR(20) NOT NULL,
  `lastname` VARCHAR(20) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `phonenumber` INT(8) NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(10) NULL,
  `profile_pic` VARCHAR(255) NULL,
  PRIMARY KEY (`acc_id`),
  UNIQUE INDEX `acc_id_UNIQUE` (`acc_id` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;

INSERT INTO Account (`acc_id`, `username`, `firstname`, `lastname`, `password`, `phonenumber`, `email`, `address`, `gender`,`profile_pic`) VALUES (1,'Kars','Carl','Smith','imsad',98201435,'smith@gmail.com','Blk 96 Spring Ave','male','images/carl.png');
INSERT INTO Account (`acc_id`, `username`, `firstname`, `lastname`, `password`, `phonenumber`, `email`, `address`, `gender`,`profile_pic`) VALUES (2,'BigChungus','Karen','Chungus','chunguslord',85890132,'karenchungus@gmail.com','blk 69 tampines ave 1','female',NULL);
INSERT INTO Account (`acc_id`, `username`, `firstname`, `lastname`, `password`, `phonenumber`, `email`, `address`, `gender`,`profile_pic`) VALUES (3,'Captain46','Yuuka','Sugai','kickmepls',94604646,'yuukas@gmail.com','20 Sentosa Ave','others',NULL);
INSERT INTO Account (`acc_id`, `username`, `firstname`, `lastname`, `password`, `phonenumber`, `email`, `address`, `gender`,`profile_pic`) VALUES (4,'Baby Yoda','Yoda','Mando','babyyoda',80405402,'yoda@yahoo.com','405 Oxley Rd','others',NULL);