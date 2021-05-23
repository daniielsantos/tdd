export class SignUpcontroller {
  handle (httpResquest: any): any {
    if (!httpResquest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: namesd')
      }
    }
    if (!httpResquest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: emdsdasdasdasd')
      }
    }
  }
}
