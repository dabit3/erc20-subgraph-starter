import {
	Address,
} from '@graphprotocol/graph-ts'

import {
	Account,
} from '../generated/schema'

import { integer } from '@protofire/subgraph-toolkit'

export function fetchAccount(address: Address): Account {
	let account = new Account(address)
	// account.totalTransactions = integer.ZERO
	account.save()
	return account
}
