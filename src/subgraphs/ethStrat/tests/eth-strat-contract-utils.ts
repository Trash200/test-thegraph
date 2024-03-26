import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
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
} from "../generated/EthStratContract/EthStratContract"

export function createChargedFeesEvent(callFees: BigInt): ChargedFees {
  let chargedFeesEvent = changetype<ChargedFees>(newMockEvent())

  chargedFeesEvent.parameters = new Array()

  chargedFeesEvent.parameters.push(
    new ethereum.EventParam(
      "callFees",
      ethereum.Value.fromUnsignedBigInt(callFees)
    )
  )

  return chargedFeesEvent
}

export function createDepositEvent(tvl: BigInt): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("tvl", ethereum.Value.fromUnsignedBigInt(tvl))
  )

  return depositEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createSetFeeConfigEvent(feeConfig: Address): SetFeeConfig {
  let setFeeConfigEvent = changetype<SetFeeConfig>(newMockEvent())

  setFeeConfigEvent.parameters = new Array()

  setFeeConfigEvent.parameters.push(
    new ethereum.EventParam("feeConfig", ethereum.Value.fromAddress(feeConfig))
  )

  return setFeeConfigEvent
}

export function createSetFeeRecipientEvent(
  feeRecipient: Address
): SetFeeRecipient {
  let setFeeRecipientEvent = changetype<SetFeeRecipient>(newMockEvent())

  setFeeRecipientEvent.parameters = new Array()

  setFeeRecipientEvent.parameters.push(
    new ethereum.EventParam(
      "feeRecipient",
      ethereum.Value.fromAddress(feeRecipient)
    )
  )

  return setFeeRecipientEvent
}

export function createSetKeeperEvent(keeper: Address): SetKeeper {
  let setKeeperEvent = changetype<SetKeeper>(newMockEvent())

  setKeeperEvent.parameters = new Array()

  setKeeperEvent.parameters.push(
    new ethereum.EventParam("keeper", ethereum.Value.fromAddress(keeper))
  )

  return setKeeperEvent
}

export function createSetStratFeeIdEvent(feeId: BigInt): SetStratFeeId {
  let setStratFeeIdEvent = changetype<SetStratFeeId>(newMockEvent())

  setStratFeeIdEvent.parameters = new Array()

  setStratFeeIdEvent.parameters.push(
    new ethereum.EventParam("feeId", ethereum.Value.fromUnsignedBigInt(feeId))
  )

  return setStratFeeIdEvent
}

export function createSetStrategistEvent(strategist: Address): SetStrategist {
  let setStrategistEvent = changetype<SetStrategist>(newMockEvent())

  setStrategistEvent.parameters = new Array()

  setStrategistEvent.parameters.push(
    new ethereum.EventParam(
      "strategist",
      ethereum.Value.fromAddress(strategist)
    )
  )

  return setStrategistEvent
}

export function createSetUnirouterEvent(unirouter: Address): SetUnirouter {
  let setUnirouterEvent = changetype<SetUnirouter>(newMockEvent())

  setUnirouterEvent.parameters = new Array()

  setUnirouterEvent.parameters.push(
    new ethereum.EventParam("unirouter", ethereum.Value.fromAddress(unirouter))
  )

  return setUnirouterEvent
}

export function createSetVaultEvent(vault: Address): SetVault {
  let setVaultEvent = changetype<SetVault>(newMockEvent())

  setVaultEvent.parameters = new Array()

  setVaultEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )

  return setVaultEvent
}

export function createSetWithdrawalFeeEvent(
  withdrawalFee: BigInt
): SetWithdrawalFee {
  let setWithdrawalFeeEvent = changetype<SetWithdrawalFee>(newMockEvent())

  setWithdrawalFeeEvent.parameters = new Array()

  setWithdrawalFeeEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawalFee",
      ethereum.Value.fromUnsignedBigInt(withdrawalFee)
    )
  )

  return setWithdrawalFeeEvent
}

export function createSetYellerEvent(yeller: Address): SetYeller {
  let setYellerEvent = changetype<SetYeller>(newMockEvent())

  setYellerEvent.parameters = new Array()

  setYellerEvent.parameters.push(
    new ethereum.EventParam("yeller", ethereum.Value.fromAddress(yeller))
  )

  return setYellerEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createWithdrawEvent(tvl: BigInt): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("tvl", ethereum.Value.fromUnsignedBigInt(tvl))
  )

  return withdrawEvent
}
