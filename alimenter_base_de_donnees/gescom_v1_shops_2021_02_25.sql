DROP TABLE IF EXISTS `shops`;
CREATE TABLE IF NOT EXISTS `shops` (
  `sho_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `sho_name` varchar(26) NOT NULL,
  `sho_address` varchar(100) NOT NULL,
  `sho_zipcode` varchar(5) NOT NULL,
  `sho_city` varchar(26) NOT NULL,
  PRIMARY KEY (`sho_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO `shops` (`sho_id`, `sho_name`, `sho_address`, `sho_zipcode`, `sho_city`) VALUES
(1, 'Jarditou Siège', '30 rue de Poulainville', '80080', 'Amiens'),
(2, 'JardiAll', '1 rue Marcel Amont', '62000', 'Arras'),
(3, 'Jarditou Compiègne', '789 rue de Picardie', '60200', 'Compiègne');