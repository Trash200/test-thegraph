import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ChargedFees } from "../generated/schema"
import { ChargedFees as ChargedFeesEvent } from "../generated/EthStratContract/EthStratContract"
import { handleChargedFees } from "../src/eth-strat-contract"
import { createChargedFeesEvent } from "./eth-strat-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let callFees = BigInt.fromI32(234)
    let newChargedFeesEvent = createChargedFeesEvent(callFees)
    handleChargedFees(newChargedFeesEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ChargedFees created and stored", () => {
    assert.entityCount("ChargedFees", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ChargedFees",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "callFees",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
