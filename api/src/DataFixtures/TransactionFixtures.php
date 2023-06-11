<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Transaction;
use Symfony\Component\Uid\Uuid;

class TransactionFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // Create transaction1
        $transaction1 = new Transaction();
        $transaction1->setAccountId(Uuid::v4());
        $transaction1->setTransactionId(Uuid::v4());
        $transaction1->setAmount(100);
        $transaction1->setType(true);
        $transaction1->setCreatedAt(new \DateTimeImmutable());

        $manager->persist($transaction1);

        // Create transaction2
        $transaction2 = new Transaction();
        $transaction2->setAccountId(Uuid::v4());
        $transaction2->setTransactionId(Uuid::v4());
        $transaction2->setAmount(200);
        $transaction2->setType(false);
        $transaction2->setCreatedAt(new \DateTimeImmutable());

        $manager->persist($transaction2);

        // Save transactions to database
        $manager->flush();
    }
}
