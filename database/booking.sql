/*CREATE TABLE IF NOT EXISTS `restaurant`.`Booking` (
  `booking_id` INT NOT NULL AUTO_INCREMENT,
  `res_booking_id` INT NOT NULL,
  `acc_booking_id` INT NOT NULL,
  `date` DATE NOT NULL,
  `time` TIMESTAMP(6) NOT NULL,
  `no_people` INT(20) NOT NULL,
  `comments` TEXT(1000) NULL,
  PRIMARY KEY (`booking_id`),
  INDEX `res_id_idx` (`res_booking_id` ASC) ,
  INDEX `acc_id_idx` (`acc_booking_id` ASC) ,
  CONSTRAINT `res_booking_id`
    FOREIGN KEY (`res_booking_id`)
    REFERENCES `restaurant`.`Restaurant` (`res_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `acc_booking_id`
    FOREIGN KEY (`acc_booking_id`)
    REFERENCES `restaurant`.`Account` (`acc_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
*/
use restaurant;

CREATE TABLE IF NOT EXISTS `restaurant`.`Booking` (
  `booking_id` INT NOT NULL AUTO_INCREMENT,
  `res_booking_id` INT NOT NULL,
  `acc_booking_id` INT NOT NULL,
  `date` DATE NOT NULL,
  `time` TIME NOT NULL,
  `no_people` INT(20) NOT NULL,
  `comments` TEXT(1000) NULL,
  PRIMARY KEY (`booking_id`),
  INDEX `res_id_idx` (`res_booking_id` ASC) ,
  INDEX `acc_id_idx` (`acc_booking_id` ASC) ,
  CONSTRAINT `res_booking_id`
    FOREIGN KEY (`res_booking_id`)
    REFERENCES `restaurant`.`Restaurant` (`res_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `acc_booking_id`
    FOREIGN KEY (`acc_booking_id`)
    REFERENCES `restaurant`.`Account` (`acc_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO Booking (`booking_id`, `res_booking_id`, `acc_booking_id`, `date`,`time`, `no_people`,`comments`) VALUES (1, 1,1, '2019-12-20','16:00:00',3,'High chair please');
