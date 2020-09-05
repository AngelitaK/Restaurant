/*CREATE TABLE IF NOT EXISTS `restaurant`.`Review` (
  `rev_id` INT NOT NULL AUTO_INCREMENT,
  `rev_stars` INT(5) NOT NULL,
  `rev_title` VARCHAR(100) NOT NULL,
  `rev_comments` TEXT(1000) NOT NULL,
  `reviewdate` VARCHAR(255) NOT NULL,
  `res_rev_id` VARCHAR(255) NOT NULL,
  `acc_rev_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`rev_id`),
  INDEX `rev_res_id_idx` (`res_rev_id` ASC) ,
  INDEX `rev_user_id_idx` (`acc_rev_id` ASC) ,
  UNIQUE INDEX `rev_id_UNIQUE` (`rev_id` ASC) ,
  CONSTRAINT `res_rev_id`
    FOREIGN KEY (`res_rev_id`)
    REFERENCES `restaurant`.`Restaurant` (`res_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `acc_rev_id`
    FOREIGN KEY (`acc_rev_id`)
    REFERENCES `restaurant`.`Account` (`acc_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
*/
use restaurant;

CREATE TABLE IF NOT EXISTS `restaurant`.`Review` (
  `rev_id` INT NOT NULL AUTO_INCREMENT,
  `rev_stars` INT(5) NOT NULL,
  `rev_title` VARCHAR(100) NOT NULL,
  `rev_comments` TEXT(500) NOT NULL,
  `reviewdate` VARCHAR(255) NOT NULL,
  `res_rev_id` VARCHAR(255) NOT NULL,
  `acc_rev_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`rev_id`),
  INDEX `rev_res_id_idx` (`res_rev_id` ASC) ,
  INDEX `rev_user_id_idx` (`acc_rev_id` ASC) ,
  UNIQUE INDEX `rev_id_UNIQUE` (`rev_id` ASC))

ENGINE = InnoDB;

INSERT INTO Review (`rev_id`, `rev_stars`, `rev_title`, `rev_comments`, `reviewdate`, `res_rev_id`, `acc_rev_id`) VALUES ('1', '5', 'WOW', 'This restaurant is very amazing and I would 100 percent recommend my friends.', 'Fri Feb 14 2020 15:50:54 GMT+0800 (Malay Peninsula Standard Time)', 'ChatterBox', 'Kars');
INSERT INTO Review (`rev_id`, `rev_stars`, `rev_title`, `rev_comments`, `reviewdate`, `res_rev_id`, `acc_rev_id`) VALUES ('2', '4', 'Very Delicious', 'Their steaks are nice. I even ordered 2 times just to savour its goodness', 'Fri Feb 14 2020 15:50:54 GMT+0800 (Malay Peninsula Standard Time)', 'CUT by Wolfgang Puck', 'BigChungus');
INSERT INTO Review (`rev_id`, `rev_stars`, `rev_title`, `rev_comments`, `reviewdate`, `res_rev_id`, `acc_rev_id`) VALUES ('3', '4', 'AMAZING', 'Really love the atmosphere and the food. Just fantastic', 'Fri Feb 14 2020 15:50:54 GMT+0800 (Malay Peninsula Standard Time)', 'Muthu’s Curry', 'BigChungus');
