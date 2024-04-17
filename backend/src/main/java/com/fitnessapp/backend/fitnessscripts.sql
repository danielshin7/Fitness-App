-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema FitnessAppDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema FitnessAppDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `FitnessAppDB` DEFAULT CHARACTER SET utf8 ;
USE `FitnessAppDB` ;

-- -----------------------------------------------------
-- Table `FitnessAppDB`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessAppDB`.`User` (
  `User_ID` INT NOT NULL,
  `Username` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`User_ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FitnessAppDB`.`Macronutrient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessAppDB`.`Macronutrient` (
  `Name` VARCHAR(255) NOT NULL,
  `Macronutrient` VARCHAR(255) NULL,
  PRIMARY KEY (`Name`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FitnessAppDB`.`Meal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessAppDB`.`Meal` (
  `MealID` VARCHAR(45) NOT NULL,
  `UserID` VARCHAR(45) NULL,
  `Date` DATE NULL,
  `Time` TIME NULL,
  PRIMARY KEY (`MealID`),
  INDEX `User_ID_idx` (`UserID` ASC) VISIBLE,
  CONSTRAINT `User_ID`
    FOREIGN KEY (`UserID`)
    REFERENCES `FitnessAppDB`.`User` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FitnessAppDB`.`Goal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessAppDB`.`Goal` (
  `Name` VARCHAR(255) NULL,
  `Description` TEXT NULL,
  `GoalID` INT NOT NULL,
  PRIMARY KEY (`GoalID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FitnessAppDB`.`UserGoal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessAppDB`.`UserGoal` (
  `StartDate` DATE NULL,
  `EndDate` DATE NULL,
  `GoalID` INT NULL,
  `UserID` INT NULL,
  INDEX `User_ID_idx` (`UserID` ASC) VISIBLE,
  INDEX `Goal_ID_idx` (`GoalID` ASC) VISIBLE,
  CONSTRAINT `User_ID`
    FOREIGN KEY (`UserID`)
    REFERENCES `FitnessAppDB`.`User` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Goal_ID`
    FOREIGN KEY (`GoalID`)
    REFERENCES `FitnessAppDB`.`Goal` (`GoalID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FitnessAppDB`.`MealMacronutrient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FitnessAppDB`.`MealMacronutrient` (
  `MealID` INT NULL,
  `MacronutrientID` VARCHAR(255) NULL,
  `Amount` DECIMAL NULL,
  INDEX `MealID_idx` (`MealID` ASC) VISIBLE,
  INDEX `MacronutrientID_idx` (`MacronutrientID` ASC) VISIBLE,
  CONSTRAINT `MealID`
    FOREIGN KEY (`MealID`)
    REFERENCES `FitnessAppDB`.`Meal` (`MealID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `MacronutrientID`
    FOREIGN KEY (`MacronutrientID`)
    REFERENCES `FitnessAppDB`.`Macronutrient` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
