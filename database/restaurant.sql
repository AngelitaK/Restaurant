/* CREATE TABLE IF NOT EXISTS `mydb`.`Restaurant` (
  `res_id` INT NOT NULL AUTO_INCREMENT,
  `restname` VARCHAR(60) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `ratings` FLOAT NOT NULL,
  `open_hours` VARCHAR(45) NOT NULL,
  `phone_number` INT(8) NOT NULL,
  `hyperlink` VARCHAR(100) NOT NULL,
  `res_photos` BLOB NULL,
  `res_menu` BLOB NULL,
  `description` TEXT(1000) NOT NULL,
  `thumb` BLOB NULL,
  `filter_res_id` INT NOT NULL,
  PRIMARY KEY (`res_id`),
  UNIQUE INDEX `restname_UNIQUE` (`restname` ASC) ,
  UNIQUE INDEX `address_UNIQUE` (`address` ASC) ,
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC) ,
  UNIQUE INDEX `hyperlink_UNIQUE` (`hyperlink` ASC) ,
  UNIQUE INDEX `filter_id_UNIQUE` (`filter_res_id` ASC) ,
  UNIQUE INDEX `res_id_UNIQUE` (`res_id` ASC) )
ENGINE = InnoDB;
*/
use restaurant;

/*15 datas */
CREATE TABLE IF NOT EXISTS `restaurant`.`Restaurant` (
  `res_id` INT NOT NULL AUTO_INCREMENT,
  `restname` VARCHAR(60) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `ratings` INT,
  `open_hours` VARCHAR(45) NOT NULL,
  `phone_number` INT(8) NOT NULL,
  `hyperlink` VARCHAR(100) NOT NULL,
  `res_photos` VARCHAR(255) NULL,
  `res_menu` VARCHAR(255) NULL,
  `description` TEXT(1000) NOT NULL,
  `thumb` VARCHAR(255) NULL,
  `establishment_type` VARCHAR(45) NOT NULL,
  `cuisine_type` VARCHAR(45) NOT NULL,
  `pricerange` VARCHAR(45) NOT NULL,
  `dietary` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`res_id`),
  UNIQUE INDEX `restname_UNIQUE` (`restname` ASC) ,
  UNIQUE INDEX `address_UNIQUE` (`address` ASC) ,
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC) ,
  UNIQUE INDEX `hyperlink_UNIQUE` (`hyperlink` ASC) ,
  UNIQUE INDEX `res_id_UNIQUE` (`res_id` ASC) )
ENGINE = InnoDB;

INSERT INTO Restaurant (`res_id`, `restname`, `address`, `ratings`, `open_hours`, `phone_number`, `hyperlink`,`res_photos`,`res_menu`, `description`,`thumb`, `establishment_type`,`cuisine_type`,`pricerange`,`dietary`) VALUES (1, 'ChatterBox', 'Level 5, Mandarin Orchard Singapore333 Orchard Road Singapore 238867', 5, '11AM-11PM', 68316288, 'http://www.meritushotels.com/en/mandarin-orchard-singapore/dining/chatterbox.html', 'images/restaurant/chatterbox1.jpg', 'images/restaurant/chatterboxmenu.jpg', 
'Award-winning Chatterbox prides itself on the hugely popular Mandarin Chicken Rice which has evolved into one of Singapore most celebrated local dishes. Other signature favourites include the Chatterbox Lobster Laksa and King Prawn Fried Hokkien Noodles.', 'images/restaurant/chatterboxthumb.jpg',
'Restaurant','Asian','Expensive','None');

INSERT INTO Restaurant (`res_id`, `restname`, `address`, `ratings`, `open_hours`, `phone_number`, `hyperlink`,`res_photos`,`res_menu`, `description`,`thumb`, `establishment_type`,`cuisine_type`,`pricerange`,`dietary`) VALUES (2,'CUT by Wolfgang Puck', '10 Bayfront Avenue #B1-71 The Shoppes at Marina Bay Sand', 5, '5:30PM-11PM',66888517,'http://wolfgangpuck.com/dining/cut-singapore/', 'images/restaurant/wolfgang1.jpg', 'images/restaurant/wolfgangmenu.jpg',
'There are right steakhouses, after which there are terrific ones. CUT through Wolfgang Puck is genuinely one of the latter and we dare admit that it remains one in every of our pinnacle 3 favourite steak restaurants in Singapore to date. Wolfgang Puck’s outpost at Marina Bay Sands is the definition of a current steakhouse—swanky, upscale, and posh from its quality furniture to its fully-stocked bar, however at its heart, steak is still their high focus and that they take unique care in cooking it with soft care every time.', 'images/restaurant/wolfgangthumb.jpg',
'Fine-Dining','Western','Expensive','None');

INSERT INTO Restaurant (`res_id`, `restname`, `address`, `ratings`, `open_hours`, `phone_number`, `hyperlink`,`res_photos`,`res_menu`, `description`,`thumb`, `establishment_type`,`cuisine_type`,`pricerange`,`dietary`) VALUES (3,'Muthu’s Curry','138 Race Course Road, #01-01, S218591',4,'10:30AM-10:30PM',63921722,'https://www.muthuscurry.com/', 'images/restaurant/muthu1.jpg', 'images/restaurant/muthumenu.jpg',
'Want to discover an Indian food spot filled with nearby Indian diners proper at Little India? Muthu’s Curry on Race Course Road is the eating place of that kind. Step into this meals paradise, you could see quite a few Indian diners happily taking part in the delicious banana leaf meals.', 'images/restaurant/muthuthumb.jpg',
'Restaurant','Indian','Mid-Range','Halal');

INSERT INTO Restaurant (`res_id`, `restname`, `address`, `ratings`, `open_hours`, `phone_number`, `hyperlink`,`res_photos`,`res_menu`, `description`,`thumb`, `establishment_type`,`cuisine_type`,`pricerange`,`dietary`) VALUES (4,'Yassin Kampung','210 Marsiling Crescent Singapore 730210',5,'11AM-12AM',67171717,'http://yassin.com.sg/', 'images/restaurant/yassin1.jpg', 'images/restaurant/yassinmenu.jpg', 
'A popular family restaurant, Yassin Kampung had humble beginnings earlier than branching out to a few shops in Singapore. The menu has also improved since, and now includes lots of local favourites like hotplate dishes or even Mala, but additionally experimenting a little with exciting dishes like durian chicken.', 'images/restaurant/yassinthumb.jpg',
'Restaurant','Malay','Mid-Range','Halal');

INSERT INTO Restaurant (`res_id`, `restname`, `address`, `ratings`, `open_hours`, `phone_number`, `hyperlink`,`res_photos`,`res_menu`, `description`,`thumb`, `establishment_type`,`cuisine_type`,`pricerange`,`dietary`) VALUES (5, 'SunnyChoice Cafe','125 Bukit Merah Lane 1, Singapore 150125',4,'10AM-3PM',62723138,'http://sunnychoice.com.sg/index.html', 'images/restaurant/sunny1.jpg', 'images/restaurant/sunnymenu.jpg',
'Both a vegetarian cafe and an natural store, the whole thing on the menu at Sunny Choice is priced cost effectively under $10. Here, the point of interest is much less on mock meats and extra on fresh natural produce, so you’ll find dishes which includes Hakka Lei Cha Fan ($7.50) and Vegetable Sushi ($6.50). The latter is full of carrots, alfalfa sprouts, and lettuce, and served with a wasabi soy sauce dressing.', 'images/restaurant/sunnythumb.jpg',
'Restaurant','Asian','Cheapest','Vegetarian');

INSERT INTO Restaurant (`res_id`, `restname`, `address`, `ratings`, `open_hours`, `phone_number`, `hyperlink`,`res_photos`,`res_menu`, `description`,`thumb`, `establishment_type`,`cuisine_type`,`pricerange`,`dietary`) VALUES (6,'Yes Natural','57 Lor 27 Geylang, Singapore 388184',3,'11AM-9:30PM', 67411580,'https://www.yesnatural.sg/', 'images/restaurant/yes1.jpg', 'images/restaurant/yesmenu.jpg',
'Yes Natural has a range of healthy, vegetarian mains on the menu, all priced cheaply under $10. Nut enthusiasts can tuck right into a heart-healthful bowl of Fresh Veggie Noodles in Almond Sauce ($6). Their Sambal Petai Brown Rice Set ($7) and Three Mushrooms Brown Rice Set ($7) also are comforting options that can truly fill you up.', 'images/restaurant/yesthumb.jpg',
'Restaurant','Asian','Cheapest','Vegetarian');

INSERT INTO Restaurant (`res_id`, `restname`, `address`, `ratings`, `open_hours`, `phone_number`, `hyperlink`,`res_photos`,`res_menu`, `description`,`thumb`, `establishment_type`,`cuisine_type`,`pricerange`,`dietary`) VALUES (7, 'Sushi Jiro','#04-600 PARKROYAL COLLECTION Marina Bay, Singapore 039594', 5,'11:30AM-10:30PM',64453055,'https://www.sushijiro.sg/home', 'images/restaurant/sushi1.jpg', 'images/restaurant/sushimenu.jpg',
'Sushi Jiro is home to the greatest Japanese cuisine in Singapore, serving seasonal fish immediately imported from Japan two times a week. Backed by means of 40 years of experience, Chef Kenji-San pampers your flavor buds with fresh seasonal sashimi, nigiri sushi, grilled and deep fried dishes, paired flawlessly with a whole lot of Sake and Shochu.','images/restaurant/sushithumb.jpg',
'Fine Dining','Asian','Expensive','None');

INSERT INTO Restaurant (`res_id`, `restname`, `address`, `ratings`, `open_hours`, `phone_number`, `hyperlink`,`res_photos`,`res_menu`, `description`,`thumb`, `establishment_type`,`cuisine_type`,`pricerange`,`dietary`) VALUES (8,'D.Bespoke','2 Bukit Pasoh Rd, Singapore 089816',4,'6PM-2AM',81415741,'http://dbespoke.sg/', 'images/restaurant/bespoke1.jpg', 'images/restaurant/bespokemenu.jpg',
'The Kyushu-born bartender from Miyazaki Prefecture, a large shochu-producing place in Japan, is usually keen to proportion his expertise. Unlike sake, which made by means of fermenting rice, shochu is distilled from rice, barley, sweet potatoes and different starchy ingredients. Try different types of by means of ordering a tasting flight ($35), includes a sampler of Ikenotsuyu candy potato shochu from Kumamoto,
Dabada chestnut shochu from Kochi and incredibly smooth Asagiri No Hana rice shochu from Kumamoto. Most of the cocktails at the menu, from the lighter lemon sour ($23) and darkish and stormy ($23) to the greater spirit forward negroni ($23) and barrelaged taimatsu ($25).', 'images/restaurant/bespokethumb.jpg','Bars & Pubs','Asian','Expensive','None');

INSERT INTO Restaurant (`res_id`, `restname`, `address`, `ratings`, `open_hours`, `phone_number`, `hyperlink`,`res_photos`,`res_menu`, `description`,`thumb`, `establishment_type`,`cuisine_type`,`pricerange`,`dietary`) VALUES (9,'McGettigan’s','#01-01 Clarke Quay 3A River Valley Rd Singapore 179020',4,'10PM-3AM',68370577,'https://www.facebook.com/mcgettigansclarkequay', 'images/restaurant/mcgettigan1.jpg', 'images/restaurant/mcgettiganmenu.jpg',
'Hot on the heels of the closure of Mulligan’s, Irish import McGettigan’s units up keep just in time to ensure that Clarke Quay still keeps to get its deliver of Guinness, Gaelic soccer and live music. First opened in Dublin in 1960, the bar grew to include locations in Dubai and Abu Dhabi, and now enters the Asian market with a Singapore outlet, imparting beer on draft and Magners by using the bottle, 
as well as widespread pub grub like fish and chips.','images/restaurant/mcgettiganthumb.jpg','Bars & Pubs','Western','Expensive','None');

INSERT INTO Restaurant (`res_id`, `restname`, `address`, `ratings`, `open_hours`, `phone_number`, `hyperlink`,`res_photos`,`res_menu`, `description`,`thumb`, `establishment_type`,`cuisine_type`,`pricerange`,`dietary`) VALUES (10,'Hjh Maimunah','20 Joo Chiat Rd, Singapore 427357',4,'9AM-5PM',62913132,'http://www.hjmaimunah.com/', 'images/restaurant/hjh1.jpg', 'images/restaurant/hjhmenu.jpg',
'The queue at this nasi padang eating place stretches out the door even before lunchtime hits. Stellar red meat rendang and sambal goreng. There are most effective restrained quantities of every item, so hot favourites just like the tauhu telor promote out fast. Aside from necessary Malay dishes, there are also rarer ones like lemak siput sedut, or sea snails swimming in a coconut-wealthy broth.', 'images/restaurant/hjhthumb.jpg',
'Restaurant','Malay','Mid-Range','Halal');