/*
  Warnings:

  - Added the required column `imageUrl` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `brand` ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL;
