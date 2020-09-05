-- MySQL dump 10.13  Distrib 5.7.29, for Win32 (AMD64)
--
-- Host: 127.0.0.1    Database: restaurant
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.36-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `acc_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `firstname` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `lastname` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `password` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `phonenumber` int(8) NOT NULL,
  `email` varchar(60) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `address` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `profile_pic` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`acc_id`),
  UNIQUE KEY `acc_id_UNIQUE` (`acc_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'peepee','Carl','Smith','password',92431311,'Angenage@gmail.com','Sentosa St 69','male','images/carl.png'),(2,'BigChungus','Karen','Chungus','chunguslord',85890132,'karenchungus@gmail.com','blk 69 tampines ave 1','female',NULL),(3,'Captain46','Yuuka','Sugai','kickmepls',94604646,'yuukas@gmail.com','20 Sentosa Ave','others',NULL),(4,'Baby Yoda','Yoda','Mando','babyyoda',80405402,'yoda@yahoo.com','405 Oxley Rd','others',NULL),(5,'Pleaseletmepass','ange','ange','ange',90832478,'letmepass@gmail.com','Hougang St 91 Blk 990 530990','Female',NULL);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `booking` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `res_booking_id` int(11) NOT NULL,
  `acc_booking_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `no_people` int(20) NOT NULL,
  `comments` text COLLATE utf8mb4_unicode_520_ci,
  PRIMARY KEY (`booking_id`),
  KEY `res_id_idx` (`res_booking_id`),
  KEY `acc_id_idx` (`acc_booking_id`),
  CONSTRAINT `acc_booking_id` FOREIGN KEY (`acc_booking_id`) REFERENCES `account` (`acc_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `res_booking_id` FOREIGN KEY (`res_booking_id`) REFERENCES `restaurant` (`res_id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,1,1,'2019-12-20','16:00:00',3,'High chair please');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurant` (
  `res_id` int(11) NOT NULL AUTO_INCREMENT,
  `restname` varchar(60) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `address` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `ratings` int(11) DEFAULT NULL,
  `open_hours` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `phone_number` int(8) NOT NULL,
  `hyperlink` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `res_photos` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `res_menu` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `thumb` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `establishment_type` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `cuisine_type` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `pricerange` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `dietary` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`res_id`),
  UNIQUE KEY `restname_UNIQUE` (`restname`),
  UNIQUE KEY `address_UNIQUE` (`address`),
  UNIQUE KEY `phone_number_UNIQUE` (`phone_number`),
  UNIQUE KEY `hyperlink_UNIQUE` (`hyperlink`),
  UNIQUE KEY `res_id_UNIQUE` (`res_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'ChatterBox','Level 5, Mandarin Orchard Singapore333 Orchard Road Singapore 238867',5,'11AM-11PM',68316288,'http://www.meritushotels.com/en/mandarin-orchard-singapore/dining/chatterbox.html','images/restaurant/chatterbox1.jpg','images/restaurant/chatterboxmenu.jpg','Award-winning Chatterbox prides itself on the hugely popular Mandarin Chicken Rice which has evolved into one of Singapore most celebrated local dishes. Other signature favourites include the Chatterbox Lobster Laksa and King Prawn Fried Hokkien Noodles.','images/restaurant/chatterboxthumb.jpg','Restaurant','Asian','Expensive','None'),(2,'CUT by Wolfgang Puck','10 Bayfront Avenue #B1-71 The Shoppes at Marina Bay Sand',5,'5:30PM-11PM',66888517,'http://wolfgangpuck.com/dining/cut-singapore/','images/restaurant/wolfgang1.jpg','images/restaurant/wolfgangmenu.jpg','There are right steakhouses, after which there are terrific ones. CUT through Wolfgang Puck is genuinely one of the latter and we dare admit that it remains one in every of our pinnacle 3 favourite steak restaurants in Singapore to date. Wolfgang Puck’s outpost at Marina Bay Sands is the definition of a current steakhouse—swanky, upscale, and posh from its quality furniture to its fully-stocked bar, however at its heart, steak is still their high focus and that they take unique care in cooking it with soft care every time.','images/restaurant/wolfgangthumb.jpg','Fine-Dining','Western','Expensive','None'),(3,'Muthu’s Curry','138 Race Course Road, #01-01, S218591',4,'10:30AM-10:30PM',63921722,'https://www.muthuscurry.com/','images/restaurant/muthu1.jpg','images/restaurant/muthumenu.jpg','Want to discover an Indian food spot filled with nearby Indian diners proper at Little India? Muthu’s Curry on Race Course Road is the eating place of that kind. Step into this meals paradise, you could see quite a few Indian diners happily taking part in the delicious banana leaf meals.','images/restaurant/muthuthumb.jpg','Restaurant','Indian','Mid-Range','Halal'),(4,'Yassin Kampung','210 Marsiling Crescent Singapore 730210',5,'11AM-12AM',67171717,'http://yassin.com.sg/','images/restaurant/yassin1.jpg','images/restaurant/yassinmenu.jpg','A popular family restaurant, Yassin Kampung had humble beginnings earlier than branching out to a few shops in Singapore. The menu has also improved since, and now includes lots of local favourites like hotplate dishes or even Mala, but additionally experimenting a little with exciting dishes like durian chicken.','images/restaurant/yassinthumb.jpg','Restaurant','Malay','Mid-Range','Halal'),(5,'SunnyChoice Cafe','125 Bukit Merah Lane 1, Singapore 150125',4,'10AM-3PM',62723138,'http://sunnychoice.com.sg/index.html','images/restaurant/sunny1.jpg','images/restaurant/sunnymenu.jpg','Both a vegetarian cafe and an natural store, the whole thing on the menu at Sunny Choice is priced cost effectively under $10. Here, the point of interest is much less on mock meats and extra on fresh natural produce, so you’ll find dishes which includes Hakka Lei Cha Fan ($7.50) and Vegetable Sushi ($6.50). The latter is full of carrots, alfalfa sprouts, and lettuce, and served with a wasabi soy sauce dressing.','images/restaurant/sunnythumb.jpg','Restaurant','Asian','Cheapest','Vegetarian'),(6,'Yes Natural','57 Lor 27 Geylang, Singapore 388184',3,'11AM-9:30PM',67411580,'https://www.yesnatural.sg/','images/restaurant/yes1.jpg','images/restaurant/yesmenu.jpg','Yes Natural has a range of healthy, vegetarian mains on the menu, all priced cheaply under $10. Nut enthusiasts can tuck right into a heart-healthful bowl of Fresh Veggie Noodles in Almond Sauce ($6). Their Sambal Petai Brown Rice Set ($7) and Three Mushrooms Brown Rice Set ($7) also are comforting options that can truly fill you up.','images/restaurant/yesthumb.jpg','Restaurant','Asian','Cheapest','Vegetarian'),(7,'Sushi Jiro','#04-600 PARKROYAL COLLECTION Marina Bay, Singapore 039594',5,'11:30AM-10:30PM',64453055,'https://www.sushijiro.sg/home','images/restaurant/sushi1.jpg','images/restaurant/sushimenu.jpg','Sushi Jiro is home to the greatest Japanese cuisine in Singapore, serving seasonal fish immediately imported from Japan two times a week. Backed by means of 40 years of experience, Chef Kenji-San pampers your flavor buds with fresh seasonal sashimi, nigiri sushi, grilled and deep fried dishes, paired flawlessly with a whole lot of Sake and Shochu.','images/restaurant/sushithumb.jpg','Fine Dining','Asian','Expensive','None'),(8,'D.Bespoke','2 Bukit Pasoh Rd, Singapore 089816',4,'6PM-2AM',81415741,'http://dbespoke.sg/','images/restaurant/bespoke1.jpg','images/restaurant/bespokemenu.jpg','The Kyushu-born bartender from Miyazaki Prefecture, a large shochu-producing place in Japan, is usually keen to proportion his expertise. Unlike sake, which made by means of fermenting rice, shochu is distilled from rice, barley, sweet potatoes and different starchy ingredients. Try different types of by means of ordering a tasting flight ($35), includes a sampler of Ikenotsuyu candy potato shochu from Kumamoto,\nDabada chestnut shochu from Kochi and incredibly smooth Asagiri No Hana rice shochu from Kumamoto. Most of the cocktails at the menu, from the lighter lemon sour ($23) and darkish and stormy ($23) to the greater spirit forward negroni ($23) and barrelaged taimatsu ($25).','images/restaurant/bespokethumb.jpg','Bars & Pubs','Asian','Expensive','None'),(9,'McGettigan’s','#01-01 Clarke Quay 3A River Valley Rd Singapore 179020',4,'10PM-3AM',68370577,'https://www.facebook.com/mcgettigansclarkequay','images/restaurant/mcgettigan1.jpg','images/restaurant/mcgettiganmenu.jpg','Hot on the heels of the closure of Mulligan’s, Irish import McGettigan’s units up keep just in time to ensure that Clarke Quay still keeps to get its deliver of Guinness, Gaelic soccer and live music. First opened in Dublin in 1960, the bar grew to include locations in Dubai and Abu Dhabi, and now enters the Asian market with a Singapore outlet, imparting beer on draft and Magners by using the bottle, \nas well as widespread pub grub like fish and chips.','images/restaurant/mcgettiganthumb.jpg','Bars & Pubs','Western','Expensive','None'),(10,'Hjh Maimunah','20 Joo Chiat Rd, Singapore 427357',4,'9AM-5PM',62913132,'http://www.hjmaimunah.com/','images/restaurant/hjh1.jpg','images/restaurant/hjhmenu.jpg','The queue at this nasi padang eating place stretches out the door even before lunchtime hits. Stellar red meat rendang and sambal goreng. There are most effective restrained quantities of every item, so hot favourites just like the tauhu telor promote out fast. Aside from necessary Malay dishes, there are also rarer ones like lemak siput sedut, or sea snails swimming in a coconut-wealthy broth.','images/restaurant/hjhthumb.jpg','Restaurant','Malay','Mid-Range','Halal');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review` (
  `rev_id` int(11) NOT NULL AUTO_INCREMENT,
  `rev_stars` int(5) NOT NULL,
  `rev_title` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `rev_comments` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `reviewdate` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `res_rev_id` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `acc_rev_id` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`rev_id`),
  UNIQUE KEY `rev_id_UNIQUE` (`rev_id`),
  KEY `rev_res_id_idx` (`res_rev_id`(191)),
  KEY `rev_user_id_idx` (`acc_rev_id`(191))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,5,'WOW','This restaurant is very amazing and I would 100 percent recommend my friends.','Fri Feb 14 2020 15:50:54 GMT+0800 (Malay Peninsula Standard Time)','ChatterBox','Kars'),(2,4,'Very Delicious','Their steaks are nice. I even ordered 2 times just to savour its goodness','Fri Feb 14 2020 15:50:54 GMT+0800 (Malay Peninsula Standard Time)','CUT by Wolfgang Puck','BigChungus'),(3,4,'AMAZING','Really love the atmosphere and the food. Just fantastic','Fri Feb 14 2020 15:50:54 GMT+0800 (Malay Peninsula Standard Time)','Muthu’s Curry','BigChungus'),(4,5,'Wow','Yeet 美味しい','Fri Feb 14 2020 18:41:10 GMT+0800 (Malay Peninsula Standard Time)','ChatterBox','Pleaseletmepass'),(5,1,'i love title','I love this place so much!','Fri Feb 14 2020 18:59:19 GMT+0800 (Malay Peninsula Standard Time)','McGettigan’s','peepee');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-14 19:06:08
