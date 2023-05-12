/*
  Warnings:

  - You are about to drop the column `platform` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `platform`,
    ADD COLUMN `provider` VARCHAR(191) NULL;
