<?php

namespace App\EventSubscriber;

use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\Book;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\MailerInterface;
use app\Bridge\WithdrawalInterface;
use App\Entity\Transaction;
use App\Service\TransactionService;

class WithdrawalSubscriber implements EventSubscriberInterface
{
    public function __construct(public readonly TransactionService $transactionService)
    {
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['createWithdrawal', EventPriorities::PRE_WRITE],
        ];
    }

    public function createWithdrawal(ViewEvent $event): void
    {
        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($entity instanceof WithdrawalInterface && Request::METHOD_POST === $method && $entity->getAmount() < 0) {
            $entity->setType(Transaction::WITHDRAW);
            $entity->setAmount($entity->getAmount() * -1);
        }
    }
} 