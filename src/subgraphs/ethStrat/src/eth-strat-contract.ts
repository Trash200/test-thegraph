import {
  ChargedFees as ChargedFeesEvent,
  Deposit as DepositEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  SetFeeConfig as SetFeeConfigEvent,
  SetFeeRecipient as SetFeeRecipientEvent,
  SetKeeper as SetKeeperEvent,
  SetStratFeeId as SetStratFeeIdEvent,
  SetStrategist as SetStrategistEvent,
  SetUnirouter as SetUnirouterEvent,
  SetVault as SetVaultEvent,
  SetWithdrawalFee as SetWithdrawalFeeEvent,
  SetYeller as SetYellerEvent,
  Unpaused as UnpausedEvent,
  Withdraw as WithdrawEvent
} from "../generated/EthStratContract/EthStratContract"
import {
  ChargedFees,
  Deposit,
  OwnershipTransferred,
  Paused,
  SetFeeConfig,
  SetFeeRecipient,
  SetKeeper,
  SetStratFeeId,
  SetStrategist,
  SetUnirouter,
  SetVault,
  SetWithdrawalFee,
  SetYeller,
  Unpaused,
  Withdraw
} from "../generated/schema"

export function handleChargedFees(event: ChargedFeesEvent): void {
  let entity = new ChargedFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.callFees = event.params.callFees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tvl = event.params.tvl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFeeConfig(event: SetFeeConfigEvent): void {
  let entity = new SetFeeConfig(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feeConfig = event.params.feeConfig

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFeeRecipient(event: SetFeeRecipientEvent): void {
  let entity = new SetFeeRecipient(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feeRecipient = event.params.feeRecipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetKeeper(event: SetKeeperEvent): void {
  let entity = new SetKeeper(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.keeper = event.params.keeper

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetStratFeeId(event: SetStratFeeIdEvent): void {
  let entity = new SetStratFeeId(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feeId = event.params.feeId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetStrategist(event: SetStrategistEvent): void {
  let entity = new SetStrategist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.strategist = event.params.strategist

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetUnirouter(event: SetUnirouterEvent): void {
  let entity = new SetUnirouter(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.unirouter = event.params.unirouter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetVault(event: SetVaultEvent): void {
  let entity = new SetVault(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vault = event.params.vault

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetWithdrawalFee(event: SetWithdrawalFeeEvent): void {
  let entity = new SetWithdrawalFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.withdrawalFee = event.params.withdrawalFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetYeller(event: SetYellerEvent): void {
  let entity = new SetYeller(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.yeller = event.params.yeller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tvl = event.params.tvl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
