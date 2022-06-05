import {
	Address,
	log
} from '@graphprotocol/graph-ts'

import {
	Account,
} from '../generated/schema'

import { integer } from '@protofire/subgraph-toolkit'

export function fetchAccount(address: Address): Account {
	let account = Account.load(address);
	if(account == null){
		account = new Account(address)
		account.totalTransactions = integer.ONE
		account.save()
	} 
	else {
		// log.debug('Block number: {}, block hash: {}, transaction hash: {}', [
		// 	event.block.number.toString(), // "47596000"
		// 	event.block.hash.toHexString(), // "0x..."
		// 	event.transaction.hash.toHexString(), // "0x..."
		//   ])
		account.totalTransactions = integer.increment(integer.ONE)
		account.save()
	}
	return account
}
