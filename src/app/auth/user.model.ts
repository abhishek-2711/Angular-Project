export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  //   when anyone will try to access this token this method will be called and here we can perform some checks
  get token() {
    // token expire condition
    if (
      !this._tokenExpirationDate ||
      !(new Date() > this._tokenExpirationDate)
    ) {
      return null;
    }
    return this._token;
  }
}
