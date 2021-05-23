import { SignUpcontroller } from './signUp'

describe('SignUp controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpcontroller()
    const httpResquest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpResquest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
