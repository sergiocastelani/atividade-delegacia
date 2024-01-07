/*
  Warnings:

  - You are about to alter the column `nome` on the `Criminoso` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "Criminoso" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(100);

-- AddForeignKey
ALTER TABLE "Crime" ADD CONSTRAINT "Crime_id_criminoso_fkey" FOREIGN KEY ("id_criminoso") REFERENCES "Criminoso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arma" ADD CONSTRAINT "Arma_id_crime_fkey" FOREIGN KEY ("id_crime") REFERENCES "Crime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
