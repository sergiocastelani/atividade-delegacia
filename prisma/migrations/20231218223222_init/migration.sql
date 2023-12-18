-- CreateTable
CREATE TABLE "Criminoso" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Criminoso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crime" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "id_criminoso" INTEGER NOT NULL,

    CONSTRAINT "Crime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Arma" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "id_crime" INTEGER NOT NULL,

    CONSTRAINT "Arma_pkey" PRIMARY KEY ("id")
);
