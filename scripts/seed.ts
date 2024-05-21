const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Fotografia" },
                { name: "Comunicação" },
                { name: "Photoshop" },
                { name: "Teatro" },
                { name: "Musica" },
                { name: "Informátia" },
                { name: "Artesanato" },
            ],
        });

        console.log("Success seeding the database categories");
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally {
        await database.$disconnect();
    }
}

main();