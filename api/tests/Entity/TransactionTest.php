<?php

namespace App\Tests\Entity;

use App\Entity\Transaction;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Uid\Uuid;

class TransactionTest extends TestCase
{
    public function testCreateAndRetrieveTransaction(): void
    {
        $transaction = new Transaction();

        // Generate a UUID for testing
        $uuid = Uuid::v4();

        // Set properties
        $transaction->setAccountId($uuid);
        $transaction->setAmount(1000);
        $transaction->setType(Transaction::DEPOSIT);

        // Retrieve properties
        $this->assertEquals($uuid, $transaction->getAccountId());
        $this->assertEquals(1000, $transaction->getAmount());
        $this->assertEquals('DEPOSIT', $transaction->getType());
    }
}