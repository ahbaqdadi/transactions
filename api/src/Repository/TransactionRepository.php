<?php

namespace App\Repository;

use App\Entity\Transaction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\ResultSetMappingBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Transaction>
 *
 * @method Transaction|null find($id, $lockMode = null, $lockVersion = null)
 * @method Transaction|null findOneBy(array $criteria, array $orderBy = null)
 * @method Transaction[]    findAll()
 * @method Transaction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TransactionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Transaction::class);
    }

    public function save(Transaction $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Transaction $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function calculateNetTransactionsForAccount(string $accountId)
    {
        $rsm = new ResultSetMappingBuilder($this->getEntityManager());
        $rsm->addScalarResult('netTotal', 'netTotal');
    
        $sql = "
            SELECT SUM(CASE WHEN t.type = :deposit THEN t.amount ELSE -t.amount END) as netTotal
            FROM transaction t
            WHERE t.account_id = UUID_TO_BIN(:accountId)
        ";
    
        $query = $this->getEntityManager()->createNativeQuery($sql, $rsm);
        $query->setParameter('accountId', $accountId);
        $query->setParameter('deposit', Transaction::DEPOSIT);
    
        return $query->getSingleScalarResult();
    }
}
