-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2023 at 12:51 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `active_user`
--

CREATE TABLE `active_user` (
  `active_user_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `flight`
--

CREATE TABLE `flight` (
  `id` int(11) NOT NULL,
  `airline` varchar(256) NOT NULL,
  `locationstart` varchar(256) NOT NULL,
  `locationend` varchar(256) NOT NULL,
  `time` varchar(255) NOT NULL,
  `distance` int(11) NOT NULL,
  `classflight` varchar(255) NOT NULL,
  `seats` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `airportstart` varchar(255) NOT NULL,
  `airportend` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(255) NOT NULL,
  `flightstart` bigint(14) NOT NULL,
  `flightend` bigint(14) NOT NULL,
  `timestart` varchar(255) NOT NULL,
  `timeend` varchar(255) NOT NULL,
  `airlinelogo` varchar(255) NOT NULL,
  `oldprice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flight`
--

INSERT INTO `flight` (`id`, `airline`, `locationstart`, `locationend`, `time`, `distance`, `classflight`, `seats`, `price`, `airportstart`, `airportend`, `description`, `image`, `flightstart`, `flightend`, `timestart`, `timeend`, `airlinelogo`, `oldprice`) VALUES
(1, 'Air Serbia', 'Belgrade', 'New York', '10h 30min', 1200, 'Economy', 30, 900, 'Nikola Tesla', 'John F. Kennedy International Airport', 'New York, often called New York City[a] or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States, and is more than twice as populous as second-place Los Angeles. New York City lies at the southern tip of New York State, and constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the world by urban landmass.[8] With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world\'s most populous megacities, and over 58 million people live within 250 mi (400 km) of the city.[9] New York City is a global cultural, financial, entertainment, and media center with a significant influence on commerce, health care and life sciences,[10] research, technology,[11] education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy,[12][13] an established safe haven for global investors,[14] and is sometimes described as the capital of the world.[15]', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/1197px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg', 1674169200000, 1674169200000, '22:30', '9:00', 'https://www.linkpicture.com/q/airserbia.png', 1100),
(2, 'Air Serbia', 'Belgrade', 'New York', '9h 45min', 1200, 'Economy', 50, 800, 'Nikola Tesla', 'John F. Kennedy International Airport', 'New York, often called New York City[a] or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States, and is more than twice as populous as second-place Los Angeles. New York City lies at the southern tip of New York State, and constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the world by urban landmass.[8] With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world\'s most populous megacities, and over 58 million people live within 250 mi (400 km) of the city.[9] New York City is a global cultural, financial, entertainment, and media center with a significant influence on commerce, health care and life sciences,[10] research, technology,[11] education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy,[12][13] an established safe haven for global investors,[14] and is sometimes described as the capital of the world.[15]', 'https://i.natgeofe.com/n/874df281-d3e0-489a-98c0-6b840023b828/newyork_NationalGeographic_2328428_square.jpg', 1674169200000, 1674169200000, '13:00', '21:45', 'https://www.linkpicture.com/q/airserbia.png', 1350),
(3, 'Qatar Airways', 'Dubai', 'Belgrade', '5h 15min', 900, 'Business', 50, 400, 'Hamad International Airport', 'Nikola Tesla', 'Belgrade is one of the oldest continuously inhabited cities in Europe and the world. One of the most important prehistoric cultures of Europe, the Vinca culture, evolved within the Belgrade area in the 6th millennium BC. In antiquity, Thraco-Dacians inhabited the region and, after 279 BC, Celts settled the city, naming it Singidunum. It was conquered by the Romans under the reign of Augustus and was awarded Roman city rights in the mid-2nd century. It was settled by the Slavs in the 520s and changed hands several times between the Byzantine Empire, the Frankish Empire, the Bulgarian Empire, and the Kingdom of Hungary before it became the seat of the Serbian king Stefan Dragutin in 1284. Belgrade served as the capital of the Serbian Despotate during the reign of Stefan Lazarevic, and then his successor Brankovic returned it to the Hungarian king in 1427. Noon bells in support of the Hungarian army against the Ottoman Empire during the siege in 1456 have remained a widespread church tradition to this day. In 1521, Belgrade was conquered by the Ottomans and became the seat of the Sanjak of Smederevo. It frequently passed from Ottoman to Habsburg rule, which saw the destruction of most of the city during the Ottoman–Habsburg wars.', 'https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/1692058-5-Skadarska-area-street.jpg;w=960', 1674860400000, 1677538800000, '06:00', '11:15', 'https://pbs.twimg.com/profile_images/1021012526740279296/ETjp0akc_400x400.jpg', 1400),
(4, 'Qatar Airways', 'Zagreb', 'Berlin', '5h 30min', 500, 'First Class', 10, 1300, 'Zagreb Airport', 'BER Airport', 'Berlin is the capital and largest city of Germany by both area and population. Its 3.7 million inhabitants make it the European Union\'s most populous city, according to population within city limits. One of Germany\'s sixteen constituent states, Berlin is surrounded by the State of Brandenburg and contiguous with Potsdam, Brandenburg\'s capital. Berlin\'s urban area, which has a population of around 4.5 million, is the second most populous urban area in Germany after the Ruhr. The Berlin-Brandenburg capital region has around 6.2 million inhabitants and is Germany\'s third-largest metropolitan region after the Rhine-Ruhr and Rhine-Main regions.', 'https://i.insider.com/6356d5d9390dfe00196daae9?width=700', 1674687600000, 1676847600000, '20:15', '01:45', 'https://pbs.twimg.com/profile_images/1021012526740279296/ETjp0akc_400x400.jpg', 1400),
(5, 'Fly Emirates', 'Vienna', 'Budapest', '02h 45min', 500, 'First class', 20, 350, 'Vienna airport', 'Budapest airport', 'No expense was spared during the construction work, so about 40 kg of 23 carat gold was used. The dimensions of the building are impressive: its maximum width is 123 metres, its length parallel to the Danube is 271 metres and its dome is 96 metres high. The Parliament building features a mix of architectural styles and motifs: it was built based on a Baroque floor plan, the facade evokes the world of Gothic style and the decoration of the ceiling shows the characteristics of Renaissance. On either side of the dome, the lower and upper Chambers of Parliament are identical in design, symbolically indicating that the two houses had equal rights.', 'https://media.cntraveler.com/photos/5b8576320c5e123ef6ed3d55/5:4/w_3335,h_2668,c_limit/Budapest_GettyImages-512278610.jpg', 1674259200000, 1674774000000, '02:00', '04:45', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/850px-Emirates_logo.svg.png', 400),
(6, 'Air Serbia', 'Belgrade', 'New York', '9h 30min', 1100, 'Economy', 20, 500, 'Nikola Tesla', 'Newark Liberty Airport', 'New York, often called New York City or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States, and is more than twice as populous as second-place Los Angeles. New York City lies at the southern tip of New York State, and constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the world by urban landmass.[8] With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world\'s most populous megacities, and over 58 million people live within 250 mi (400 km) of the city. New York City is a global cultural, financial, entertainment, and media center with a significant influence on commerce, health care and life sciences, research, technology,[11] education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy, an established safe haven for global investors, and is sometimes described as the capital of the world.', 'https://media.wired.com/photos/59265bfb7034dc5f91beb238/master/w_2560%2Cc_limit/TS-TA-201001_NY_Times_Square_Sn_hetta_N58.jpg', 1674169200000, 1674169200000, '10:00', '19:30', 'https://www.linkpicture.com/q/airserbia.png', 1250),
(7, 'Turkish Airlines', 'Istanbul', 'Belgrade', '4h 30min', 900, 'Economy', 10, 200, 'Istanbul Airport', 'Nikola Tesla', 'Belgrade is one of the oldest continuously inhabited cities in Europe and the world. One of the most important prehistoric cultures of Europe, the Vinca culture, evolved within the Belgrade area in the 6th millennium BC. In antiquity, Thraco-Dacians inhabited the region and, after 279 BC, Celts settled the city, naming it Singidunum. It was conquered by the Romans under the reign of Augustus and was awarded Roman city rights in the mid-2nd century. It was settled by the Slavs in the 520s and changed hands several times between the Byzantine Empire, the Frankish Empire, the Bulgarian Empire, and the Kingdom of Hungary before it became the seat of the Serbian king Stefan Dragutin in 1284. Belgrade served as the capital of the Serbian Despotate during the reign of Stefan Lazarevic, and then his successor Brankovic returned it to the Hungarian king in 1427. Noon bells in support of the Hungarian army against the Ottoman Empire during the siege in 1456 have remained a widespread church tradition to this day. In 1521, Belgrade was conquered by the Ottomans and became the seat of the Sanjak of Smederevo. It frequently passed from Ottoman to Habsburg rule, which saw the destruction of most of the city during the Ottoman–Habsburg wars.', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/09/14/belgrade-city-centre.jpg?quality=75&width=982&height=726&auto=webp', 1676937600000, 1677538800000, '11:00', '15:30', 'https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png?t=1602914708', 300);

-- --------------------------------------------------------

--
-- Table structure for table `popular`
--

CREATE TABLE `popular` (
  `id` int(11) NOT NULL,
  `mainimage` varchar(255) NOT NULL,
  `secimage` varchar(255) NOT NULL,
  `thirdimage` varchar(255) NOT NULL,
  `cardtext` text NOT NULL,
  `maintext` longtext NOT NULL,
  `sectext` longtext NOT NULL,
  `thirdtext` longtext NOT NULL,
  `city` varchar(255) NOT NULL,
  `cardtitle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `popular`
--

INSERT INTO `popular` (`id`, `mainimage`, `secimage`, `thirdimage`, `cardtext`, `maintext`, `sectext`, `thirdtext`, `city`, `cardtitle`) VALUES
(1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg', 'https://cdn.britannica.com/70/20070-050-C2E2045C/Central-Park-Manhattan-New-York-City-apartment.jpg', 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2018/10/iStock-4946079422-1080x721.jpg?v=293253', 'New York is one of the world\'s most populous megacities', 'New York, often called New York City or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States, and is more than twice as populous as second-place Los Angeles. New York City lies at the southern tip of New York State, and constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the world by urban landmass. With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world\'s most populous megacities, and over 58 million people live within 250 mi (400 km) of the city. New York City is a global cultural, financial, entertainment, and media center with a significant influence on commerce, health care and life sciences, research, technology, education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy, an established safe haven for global investors, and is sometimes described as the capital of the world.', 'Situated on one of the world\'s largest natural harbors and extending into the Atlantic Ocean, New York City comprises five boroughs, each of which is coextensive with a respective county of the state of New York. The five boroughs—Brooklyn (Kings County), Queens (Queens County), Manhattan (New York County), the Bronx (Bronx County), and Staten Island (Richmond County)—were created when local governments were consolidated into a single municipal entity in 1898. Situated on one of the world\'s largest natural harbors and extending into the Atlantic Ocean, New York City comprises five boroughs, each of which is coextensive with a respective county of the state of New York. The five boroughs—Brooklyn (Kings County), Queens (Queens County), Manhattan (New York County), the Bronx (Bronx County), and Staten Island (Richmond County).', 'The city and its metropolitan area constitute the premier gateway for legal immigration to the United States. As many as 800 languages are spoken in New York, making it the most linguistically diverse city in the world. New York City is home to more than 3.2 million residents born outside the United States, the largest foreign-born population of any city in the world as of 2016. As of 2022, the New York metropolitan area is estimated to produce a gross metropolitan product of over $2.1 trillion, ranking it first worldwide. If the New York metropolitan area were a sovereign state, it would have the eighth-largest economy in the world. As of 2022, New York is home to the highest number of billionaires and millionaires of any city and, in 2017, was the wealthiest city in the world.', 'New York', 'Welcome to the Big Apple'),
(2, 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg', 'https://fullsuitcase.com/wp-content/uploads/2022/01/Best-views-and-viewpoints-in-Rome-Italy.jpg.webp', 'https://www.thediaryofanomad.com/wp-content/w3-webp/uploads/2020/11/rome-for-3-days-in-rome-itinerary-vatican-dome-view.jpgw3.webp', 'Roma is the capital city of Italy. It is also the capital of the Lazio region', 'Rome Italian and Latin: Roma is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale. With 2,860,009 residents in 1,285 km2 (496.1 sq mi), Rome is the country\'s most populated comune and the third most populous city in the European Union by population within city limits. The Metropolitan City of Rome, with a population of 4,355,725 residents, is the most populous metropolitan city in Italy. Its metropolitan area is the third-most populous within Italy. Rome is located in the central-western portion of the Italian Peninsula, within Lazio (Latium), along the shores of the Tiber. Vatican City (the smallest country in the world) is an independent country inside the city boundaries of Rome, the only existing example of a country within a city. Rome is often referred to as the City of Seven Hills due to its geographic location, and also as the \'Eternal City\'. Rome is generally considered to be the \'cradle of Western civilization and Christian culture\', and the centre of the Catholic Church.', 'Rome\'s history spans 28 centuries. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it a major human settlement for almost three millennia and one of the oldest continuously occupied cities in Europe. The city\'s early population originated from a mix of Latins, Etruscans, and Sabines. Eventually, the city successively became the capital of the Roman Kingdom, the Roman Republic and the Roman Empire, and is regarded by many as the first-ever Imperial city and metropolis. It was first called The Eternal City (Latin: Urbs Aeterna; Italian: La Città Eterna) by the Roman poet Tibullus in the 1st century BC, and the expression was also taken up by Ovid, Virgil, and Livy. Rome is also called \'Caput Mundi\' (Capital of the World).', 'After the fall of the Empire in the west, which marked the beginning of the Middle Ages, Rome slowly fell under the political control of the Papacy, and in the 8th century, it became the capital of the Papal States, which lasted until 1870. Beginning with the Renaissance, almost all popes since Nicholas V (1447–1455) pursued a coherent architectural and urban programme over four hundred years, aimed at making the city the artistic and cultural centre of the world.[14] In this way, Rome became first one of the major centres of the Renaissance, and then the birthplace of both the Baroque style and Neoclassicism. Famous artists, painters, sculptors, and architects made Rome the centre of their activity, creating masterpieces throughout the city. In 1871, Rome became the capital of the Kingdom of Italy, which, in 1946, became the Italian Republic.', 'Rome', 'A city of Marble'),
(3, 'https://a.cdn-hotels.com/gdcs/production29/d1375/234f7170-c9f4-4cee-a372-1a198e388483.jpg', 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Russia/Moscow/red-square-moscow-guide.jpg?imwidth=680', 'https://www.legalbusiness.co.uk/wp-content/uploads/2022/02/moscow.jpg', 'Moscow is the capital and largest city of Russia, standing on the Moskva River', 'Moscow is the capital and largest city of Russia. The city stands on the Moskva River in Central Russia, with a population estimated at 13.0 million residents within the city limits, over 17 million residents in the urban area, and over 21.5 million residents in the metropolitan area. The city covers an area of 2,511 square kilometers (970 sq mi), while the urban area covers 5,891 square kilometers (2,275 sq mi), and the metropolitan area covers over 26,000 square kilometers (10,000 sq mi). Moscow is among the world\'s largest cities; being the most populous city entirely in Europe, the largest urban and metropolitan area in Europe, and the largest city by land area on the European continent.', 'First documented in 1147, Moscow grew to become a prosperous and powerful city that served as the capital of the Grand Duchy that bears its name. When the Grand Duchy of Moscow evolved into the Tsardom of Russia, Moscow remained the political and economic center for most of the Tsardom\'s history. When the Tsardom was reformed into the Russian Empire, the capital was moved from Moscow to Saint Petersburg diminishing the influence of the city. The capital was then moved back to Moscow following the October Revolution and the city was brought back as the political center of the Russian SFSR and then the Soviet Union. In the aftermath of the dissolution of the Soviet Union, Moscow remained the capital city of the contemporary and newly established Russian Federation.', 'The northernmost and coldest megacity in the world, with a history that spans eight centuries, Moscow is governed as a federal city (since 1993) that serves as the political, economic, cultural, and scientific center of Russia and Eastern Europe. As an alpha world city, Moscow has one of the world\'s largest urban economies. The city is one of the fastest-growing tourist destinations in the world, and is one of Europe\'s most visited cities. Moscow is home to the seventh-highest number of billionaires of any city in the world. The Moscow International Business Center is one of the largest financial centers in Europe and the world, and features the majority of Europe\'s tallest skyscrapers. Moscow was the host city of the 1980 Summer Olympics, and one of the host cities of the 2018 FIFA World Cup.', 'Moscow', 'To Moscow, to Moscow!');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `flight_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `rating` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `flight_id`, `comment`, `rating`, `name`) VALUES
(1, 1, 'The flight was wonderfull!', 5, 'Mark'),
(2, 1, 'The flight was terrible!', 2, 'Steven'),
(35, 1, 'It was great!!!', 5, 'Damjan');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `surname` varchar(256) NOT NULL,
  `address` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `address`, `telephone`, `email`, `password`, `destination`) VALUES
(1, 'Damjan', 'Belojevic', 'Ulica 21', '+3811212121', 'damjan@gmail.com', 'damjan123', 'Belgrade'),
(2, 'Darja', 'Hedic', 'Ulica 44', '+3811777121', 'darja@gmail.com', 'darja123', 'Belgrade');

-- --------------------------------------------------------

--
-- Table structure for table `user_flight`
--

CREATE TABLE `user_flight` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `flight_id` int(10) NOT NULL,
  `seats_booked` int(10) NOT NULL,
  `status` varchar(255) CHARACTER SET utf32 NOT NULL,
  `given_review` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_flight`
--

INSERT INTO `user_flight` (`id`, `user_id`, `flight_id`, `seats_booked`, `status`, `given_review`) VALUES
(2, 1, 2, 3, 'finished', 0),
(11, 1, 1, 4, 'finished', 0),
(12, 1, 1, 1, 'upcoming', 0),
(15, 1, 4, 2, 'finished', 0),
(48, 2, 4, 1, 'upcoming', 0),
(49, 2, 5, 2, 'canceled', 0),
(50, 1, 5, 1, 'canceled', 0),
(51, 1, 6, 2, 'canceled', 0),
(52, 1, 4, 2, 'upcoming', 0),
(54, 2, 4, 2, 'finished', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `active_user`
--
ALTER TABLE `active_user`
  ADD PRIMARY KEY (`active_user_id`);

--
-- Indexes for table `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `popular`
--
ALTER TABLE `popular`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_flight`
--
ALTER TABLE `user_flight`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `active_user`
--
ALTER TABLE `active_user`
  MODIFY `active_user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `flight`
--
ALTER TABLE `flight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `popular`
--
ALTER TABLE `popular`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `user_flight`
--
ALTER TABLE `user_flight`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
