<?php

namespace App\Entity;

use App\Repository\TransactionRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Uid\Uuid;
use ApiPlatform\Metadata\ApiProperty;
use DateTimeImmutable;
use App\Bridge\WithdrawalInterface;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Metadata\ApiFilter;
use Symfony\Component\Serializer\Annotation\SerializedName;

#[ORM\Entity(repositoryClass: TransactionRepository::class)]
#[ApiResource(
    paginationEnabled: false,
    normalizationContext: ['groups' => ['transaction_read']],
    denormalizationContext: ['groups' => ['transaction_write']],
    operations: [
        new Get(),
        new GetCollection(),
        new Post()
    ]
)]
#[ApiFilter(OrderFilter::class, properties: ['createdAt' => 'DESC'])]
class Transaction implements WithdrawalInterface
{
    public const WITHDRAW = false;
    public const DEPOSIT = true;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[ApiProperty(identifier: false)]
    #[Groups(['transaction_read'])]
    private ?int $id = null;

    #[ORM\Column(type: "uuid", unique: false)]
    #[Groups(['transaction_read', 'transaction_write'])]
    #[SerializedName("account_id")]
    private ?Uuid $accountId = null;

    #[ORM\Column]
    #[Groups(['transaction_write'])]
    private ?int $amount = null;

    #[Groups(['transaction_read'])]
    #[SerializedName("amount")]
    private ?int $amountTemp = null;

    #[ORM\Column]
    #[Groups(['transaction_read'])]
    private ?bool $type = self::DEPOSIT;

    #[ORM\Column]
    #[Groups(['transaction_read'])]
    #[SerializedName("created_at")]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: "uuid", unique: true)]
    #[Groups(['transaction_read'])]
    #[ApiProperty(identifier: true)]
    #[SerializedName("transaction_id")]
    private ?Uuid $transactionId = null;

    public function __construct()
    {
        $this->transactionId = Uuid::v4();
        $this->createdAt = new DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAccountId(): ?Uuid
    {
        return $this->accountId;
    }

    public function setAccountId(Uuid $accountId): self
    {
        $this->accountId = $accountId;

        return $this;
    }

    public function getAmount(): ?int
    {
        return $this->amount;
    }

    public function setAmount(int $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getAmountTemp(): ?int
    {
        if ($this->type === self::WITHDRAW) {
            return (int) ('-'.$this->amount);
        }
        return $this->amount;
    }

    public function getType(): string
    {
        return $this->type === self::WITHDRAW ? 'WITHDRAW' : 'DEPOSIT' ;
    }

    public function setType(bool $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getTransactionId(): ?Uuid
    {
        return $this->transactionId;
    }

    public function setTransactionId(Uuid $transactionId): self
    {
        $this->transactionId = $transactionId;

        return $this;
    }
}
