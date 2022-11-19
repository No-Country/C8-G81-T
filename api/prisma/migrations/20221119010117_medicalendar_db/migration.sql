/*
  Warnings:

  - You are about to drop the column `doc_id` on the `doctors` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Doctors_doc_id_key` ON `doctors`;

-- AlterTable
ALTER TABLE `doctors` DROP COLUMN `doc_id`;
