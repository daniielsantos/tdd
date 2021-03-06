import { AddAccountRepository } from '../../../../data/protocols/add-account-repositoy'
import { AddAccountModel } from '../../../../domain/usecase/add-account'
import { AccountModel } from '../../../../domain/model/account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    return MongoHelper.map(result.ops[0])
  }
}
