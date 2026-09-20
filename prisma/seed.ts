import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const wedding = await prisma.wedding.upsert({
    where: { slug: 'marie-jean' },
    update: {},
    create: {
      slug: 'marie-jean',
      name: 'Marie & Jean',
      description: 'Mariage premium',
      locationName: 'Salle des Fêtes',
      locationAddress: 'Brazzaville',
      coverImage: '/images/cover.jpg',
      status: 'published',
    },
  });

  for (let i = 1; i <= 50; i += 1) {
    await prisma.guest.upsert({
      where: { photoPass: `WED-2026-${String(i).padStart(4, '0')}` },
      update: {},
      create: {
        weddingId: wedding.id,
        firstName: `Guest${i}`,
        lastName: 'Test',
        email: `guest${i}@example.com`,
        phone: `06000000${String(i).padStart(2, '0')}`,
        invitationCode: `WED-2026-${String(i).padStart(4, '0')}`,
        photoPass: `WED-2026-${String(i).padStart(4, '0')}`,
        status: i % 3 === 0 ? 'ATTENDING' : i % 3 === 1 ? 'UNKNOWN' : 'DECLINED',
      },
    });
  }

  const groups = ['Famille Marie', 'Famille Jean', 'Amis', 'Collègues'];
  for (const name of groups) {
    await prisma.guestGroup.upsert({
      where: { id: `${wedding.id}-${name}` },
      update: {},
      create: {
        id: `${wedding.id}-${name}`,
        weddingId: wedding.id,
        name,
      },
    });
  }

  const albums = ['Cérémonie', 'Famille', 'Réception', 'Soirée'];
  for (const name of albums) {
    await prisma.album.upsert({
      where: { id: `${wedding.id}-${name}` },
      update: {},
      create: {
        id: `${wedding.id}-${name}`,
        weddingId: wedding.id,
        name,
      },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
