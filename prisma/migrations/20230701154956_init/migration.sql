-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "city" VARCHAR(300) NOT NULL,
    "state" TEXT,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "county" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyAdress" TEXT NOT NULL,
    "companyState" TEXT,
    "companyUrl" TEXT,
    "companyType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "contactName" TEXT,
    "contactValue" TEXT NOT NULL,
    "contactType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credit" (
    "id" SERIAL NOT NULL,
    "daysToPay" TEXT NOT NULL,
    "creditScore" TEXT NOT NULL,
    "creditScoreUrl" TEXT,
    "daysToPayUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Credit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatOne" (
    "id" SERIAL NOT NULL,
    "postingId" TEXT NOT NULL,
    "earliestWhen" TEXT NOT NULL,
    "latestWhen" TEXT NOT NULL,
    "brokerDataRemoved" TEXT,
    "combinedOfficeId" INTEGER NOT NULL,
    "officeId" TEXT,
    "comments" TEXT,
    "isBookable" BOOLEAN NOT NULL,
    "isFromPrivateNetwork" BOOLEAN NOT NULL,
    "isNegotiable" BOOLEAN NOT NULL,
    "isQuickPayable" BOOLEAN NOT NULL,
    "hasTiaMembership" BOOLEAN NOT NULL,
    "groupId" TEXT,
    "factoring" TEXT,
    "matchingPostingId" TEXT NOT NULL,
    "maximumLengthFeet" INTEGER NOT NULL,
    "maximumWeightPounds" INTEGER NOT NULL,
    "fullPartial" TEXT NOT NULL,
    "assetType" TEXT,
    "rateUsd" INTEGER NOT NULL,
    "basis" TEXT,
    "bids" TEXT,
    "worklist" TEXT,
    "tripLengthMethod" TEXT,
    "tripLengthMiles" INTEGER NOT NULL,
    "systemStatus" TEXT,
    "status" TEXT,
    "servicedWhen" TEXT,
    "relevanceScore" INTEGER NOT NULL,
    "ranked" BOOLEAN NOT NULL,
    "postersReferenceId" TEXT,
    "postingCancelledWhen" TEXT,
    "postingExpiresWhen" TEXT,
    "privateNetworkRateInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatOne_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatPower" (
    "id" SERIAL NOT NULL,
    "age" TEXT NOT NULL,
    "ageInMilliseconds" TEXT NOT NULL,
    "inExactColumnMap" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "routeUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "isLoad" BOOLEAN NOT NULL,
    "officeLocation" TEXT NOT NULL,
    "referenceState" TEXT NOT NULL,
    "isTiaMember" BOOLEAN NOT NULL,
    "factorableUrl" TEXT NOT NULL,
    "assurableUrl" TEXT NOT NULL,
    "officeId" INTEGER,
    "isPreferredOffice" BOOLEAN NOT NULL,
    "isBlockedOffice" BOOLEAN NOT NULL,
    "postersReferenceId" TEXT NOT NULL,
    "bookItNowType" TEXT,
    "bookItNowTooltip" TEXT,
    "bookItNowFormatted" TEXT,
    "bookItNow" TEXT,
    "isBookItNow" BOOLEAN NOT NULL,
    "isTaken" BOOLEAN NOT NULL,
    "isWorked" BOOLEAN NOT NULL,
    "showActivity" BOOLEAN NOT NULL,
    "takeUserId" INTEGER NOT NULL,
    "workedStatusText" TEXT,
    "workedStatusValue" TEXT,
    "workedNote" TEXT,
    "workedInitials" TEXT,
    "takenInitials" TEXT,
    "searcherDotNumber" INTEGER NOT NULL,
    "searcherMcNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatPower_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrucksEdge" (
    "id" SERIAL NOT NULL,
    "ageInMilliseconds" TEXT NOT NULL,
    "equipmentType" TEXT NOT NULL,
    "isLoad" BOOLEAN NOT NULL,
    "servicedDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "assetType" TEXT NOT NULL,
    "earliest" TEXT NOT NULL,
    "latest" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "isTiaMember" BOOLEAN NOT NULL,
    "officeId" INTEGER NOT NULL,
    "combinedOfficeId" TEXT NOT NULL,
    "referenceState" TEXT NOT NULL,
    "isTripMilesAir" BOOLEAN NOT NULL,
    "isOriginDeadheadMilesAir" BOOLEAN NOT NULL,
    "isP3Member" BOOLEAN NOT NULL,
    "isTriumphPay" BOOLEAN NOT NULL,
    "searcherDotNumber" INTEGER NOT NULL,
    "searcherMcNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrucksEdge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loads" (
    "loadId" SERIAL NOT NULL,
    "matchId" TEXT NOT NULL,
    "registryId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "isPartial" BOOLEAN NOT NULL,
    "isFactorable" BOOLEAN NOT NULL,
    "isAssurable" BOOLEAN NOT NULL,
    "servicedDate" TEXT NOT NULL,
    "deadheadMilesOrigin" TEXT NOT NULL,
    "deadheadMilesDestination" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "tripMiles" TEXT NOT NULL,
    "equipmentClass" TEXT NOT NULL,
    "pickupDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "creditId" INTEGER NOT NULL,
    "contactId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "datOneId" INTEGER,
    "datPowerId" INTEGER,
    "trucksEdgeId" INTEGER,

    CONSTRAINT "Loads_pkey" PRIMARY KEY ("loadId")
);

-- AddForeignKey
ALTER TABLE "Loads" ADD CONSTRAINT "Loads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loads" ADD CONSTRAINT "Loads_creditId_fkey" FOREIGN KEY ("creditId") REFERENCES "Credit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loads" ADD CONSTRAINT "Loads_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loads" ADD CONSTRAINT "Loads_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loads" ADD CONSTRAINT "Loads_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loads" ADD CONSTRAINT "Loads_datOneId_fkey" FOREIGN KEY ("datOneId") REFERENCES "DatOne"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loads" ADD CONSTRAINT "Loads_datPowerId_fkey" FOREIGN KEY ("datPowerId") REFERENCES "DatPower"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loads" ADD CONSTRAINT "Loads_trucksEdgeId_fkey" FOREIGN KEY ("trucksEdgeId") REFERENCES "TrucksEdge"("id") ON DELETE SET NULL ON UPDATE CASCADE;
