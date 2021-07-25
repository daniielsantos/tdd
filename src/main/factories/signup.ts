import { SignUpcontroller } from './../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../presentation/utils/email-validator-adapter'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): SignUpcontroller => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const bAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  return new SignUpcontroller(emailValidatorAdapter, bAddAccount)
}
