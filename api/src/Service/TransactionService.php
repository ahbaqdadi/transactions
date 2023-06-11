<?php

namespace App\Service;

use App\Entity\Transaction;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Uid\Uuid;
use DateTimeImmutable;

class TransactionService
{
    public function __construct(public readonly EntityManagerInterface $manager)
    {
    }

    public function withdraw(Transaction $transaction): void
    {
        $withdrawTransaction = clone $transaction;

        $withdrawTransaction->setType(Transaction::WITHDRAW);
        $withdrawTransaction->setTransactionId(Uuid::v4());
        $withdrawTransaction->setCreatedAt(new DateTimeImmutable());

        $this->manager->persist($withdrawTransaction);
        $this->manager->flush();
    }
}