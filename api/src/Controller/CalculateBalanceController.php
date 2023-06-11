<?php

namespace App\Controller;

use App\Entity\Account;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Transaction;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints\Uuid;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[AsController]
class CalculateBalanceController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $manager,
        private ValidatorInterface $validator
    ) {}

    public function __invoke(Request $request, string $accountId)
    {
        $uuidConstraint = new Uuid();
        $errors = $this->validator->validate($accountId, $uuidConstraint);

        if (count($errors) > 0) {
            return $errors;
        }

        $account = new Account();
        $account->amount = (int) $this->manager->getRepository(Transaction::class)->calculateNetTransactionsForAccount($accountId);
        $account->accountId = $accountId;
        return $account;
    }
}