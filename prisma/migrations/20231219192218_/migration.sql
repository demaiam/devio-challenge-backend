/*
  Warnings:

  - Added the required column `observation` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "observation" VARCHAR(255) NOT NULL;
