/*
Navicat MySQL Data Transfer

Source Server         : 10.10.10.15
Source Server Version : 50552
Source Host           : 10.10.10.15:7000
Source Database       : db_test

Target Server Type    : MYSQL
Target Server Version : 50552
File Encoding         : 65001

Date: 2020-02-09 21:54:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pname` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('admin', '123456', 'นาย', 'พัสดุ', 'สสจ');

-- ----------------------------
-- Table structure for equipment
-- ----------------------------
DROP TABLE IF EXISTS `equipment`;
CREATE TABLE `equipment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `date_add` date NOT NULL,
  `d_update` datetime NOT NULL,
  `userid` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of equipment
-- ----------------------------
INSERT INTO `equipment` VALUES ('2', '55555555', 'Computer', '2020-01-29', '2020-02-09 14:13:19', 'admin', 'phakdeehos');
INSERT INTO `equipment` VALUES ('5', '4444444', 'Printer', '0000-00-00', '2020-02-09 14:07:56', 'admin', 'น้อย');
INSERT INTO `equipment` VALUES ('6', '555555555', 'Computer', '2020-02-14', '2020-02-09 14:00:34', 'admin', 'manoth');
INSERT INTO `equipment` VALUES ('7', '66666', 'Printer', '2020-02-12', '2020-02-09 14:03:48', 'admin', 'manoth');
INSERT INTO `equipment` VALUES ('8', '0002312', 'Computer', '2020-02-01', '2020-02-09 14:08:56', 'admin', 'ZadminZ');
