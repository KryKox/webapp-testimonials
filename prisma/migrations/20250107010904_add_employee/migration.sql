/*
  Warnings:

  - Added the required column `employeeid` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "employeeid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_employeeid_fkey" FOREIGN KEY ("employeeid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
