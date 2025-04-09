-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: funcionarios
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(99) NOT NULL,
  `cargo` varchar(45) NOT NULL,
  `salario` decimal(10,2) NOT NULL,
  `data_contratacao` date NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `situacao` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionarios`
--

LOCK TABLES `funcionarios` WRITE;
/*!40000 ALTER TABLE `funcionarios` DISABLE KEYS */;
INSERT INTO `funcionarios` VALUES (4,'vinicius pagani','Dono',90000.00,'2022-06-23','13 997261314','vinicius@hotmail.com','42147164852','Masculino','Ativo'),(10,'Amanda Souza','Analista',5500.00,'2021-06-15','11 999990000','amanda.souza@gmail.com','12345678901','Feminino','Ativo'),(11,'Carlos Lima','Supervisor',7200.00,'2020-03-20','11 988887777','carlos.lima@gmail.com','23456789012','Masculino','Ativo'),(12,'Juliana Alves','Assistente',3500.00,'2023-01-10','21 912345678','juliana.alves@gmail.com','34567890123','Feminino','Afastado'),(13,'Pedro Henrique','Estagiário',1800.00,'2024-03-05','11 977776666','pedro.h@gmail.com','45678901234','Masculino','Ativo'),(14,'Larissa Campos','Gerente',9200.00,'2019-09-01','31 966665555','larissa.campos@email.com','56789012345','Feminino','Desligado'),(15,'Tiago Ribeiro','TI',6800.00,'2022-11-25','21 955554444','tiago.r@email.com','67890123456','Masculino','Ativo'),(16,'Fernanda Dias','RH',4600.00,'2023-05-30','11 944443333','fernanda.dias@email.com','78901234567','Feminino','Ativo'),(17,'Lucas Martins','Financeiro',6100.00,'2021-07-18','21 933332222','lucas.m@email.com','89012345678','Masculino','Afastado'),(18,'Mariana Silva','Marketing',5200.00,'2020-12-01','11 922221111','mariana.silva@email.com','90123456789','Feminino','Desligado'),(19,'André Souza','Compras',4800.00,'2023-08-10','21 911110000','andre.souza@email.com','01234567890','Masculino','Ativo');
/*!40000 ALTER TABLE `funcionarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-09 17:51:33
