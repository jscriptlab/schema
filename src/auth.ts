import {Result} from "./protocol/Result";
import {objectId} from "./objectId";
import {Request} from "./protocol/Request";
import {ISerializer} from "./__types__";
import {encodeObjectId} from "./objectId";
import {IDeserializer} from "./__types__";
import {decodeObjectId} from "./objectId";
import {defaultObjectId} from "./objectId";
import {compareObjectId} from "./objectId";
import {compareObjectId as compareObjectId1} from "./objectId";
import {IRequest} from "./__types__";
export interface authorizeTemporaryUserResultInputParams {
  tempUserId: Readonly<objectId>;
}
export function authorizeTemporaryUserResult(params: authorizeTemporaryUserResultInputParams): authorizeTemporaryUserResult {
  return {
    _name: 'auth.authorizeTemporaryUserResult',
    tempUserId: params['tempUserId']
  };
}
export function encodeAuthorizeTemporaryUserResult(__s: ISerializer, value: authorizeTemporaryUserResult) {
  __s.writeInt32(1203554706);
  /**
   * encoding param: tempUserId
   */
  const __pv0 = value['tempUserId'];
  encodeObjectId(__s,__pv0);
}
export function decodeAuthorizeTemporaryUserResult(__d: IDeserializer): authorizeTemporaryUserResult | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1203554706) return null;
  let tempUserId: objectId;
  /**
   * decoding param: tempUserId
   */
  const tmp2 = decodeObjectId(__d);
  if(tmp2 === null) return null;
  tempUserId = tmp2;
  return {
    _name: 'auth.authorizeTemporaryUserResult',
    tempUserId
  };
}
export interface authorizeTemporaryUserResult  {
  _name: 'auth.authorizeTemporaryUserResult';
  tempUserId: Readonly<objectId>;
}
export function defaultAuthorizeTemporaryUserResult(params: Partial<authorizeTemporaryUserResultInputParams> = {}): authorizeTemporaryUserResult {
  return authorizeTemporaryUserResult({
    tempUserId: defaultObjectId(),
    ...params
  });
}
export function compareAuthorizeTemporaryUserResult(__a: authorizeTemporaryUserResult, __b: authorizeTemporaryUserResult): boolean {
  return (
    /**
     * compare parameter tempUserId
     */
    compareObjectId(__a['tempUserId'],__b['tempUserId'])
  );
}
export function updateAuthorizeTemporaryUserResult(value: authorizeTemporaryUserResult, changes: Partial<authorizeTemporaryUserResultInputParams>) {
  if(typeof changes['tempUserId'] !== 'undefined') {
    if(!(compareObjectId1(changes['tempUserId'],value['tempUserId']))) {
      value = authorizeTemporaryUserResult({
        ...value,
        tempUserId: changes['tempUserId'],
      });
    }
  }
  return value;
}
export interface AuthorizeTemporaryUserInputParams {
  username: string;
}
export function AuthorizeTemporaryUser(params: AuthorizeTemporaryUserInputParams): AuthorizeTemporaryUser {
  return {
    _name: 'auth.AuthorizeTemporaryUser',
    username: params['username']
  };
}
export function encodeAuthorizeTemporaryUser(__s: ISerializer, value: AuthorizeTemporaryUser) {
  __s.writeInt32(-1019201975);
  /**
   * encoding param: username
   */
  const __pv0 = value['username'];
  __s.writeString(__pv0);
}
export function decodeAuthorizeTemporaryUser(__d: IDeserializer): AuthorizeTemporaryUser | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1019201975) return null;
  let username: string;
  /**
   * decoding param: username
   */
  username = __d.readString();
  return {
    _name: 'auth.AuthorizeTemporaryUser',
    username
  };
}
export interface AuthorizeTemporaryUser extends IRequest<Readonly<authorizeTemporaryUserResult>> {
  _name: 'auth.AuthorizeTemporaryUser';
  username: string;
}
export function defaultAuthorizeTemporaryUser(params: Partial<AuthorizeTemporaryUserInputParams> = {}): AuthorizeTemporaryUser {
  return AuthorizeTemporaryUser({
    username: "",
    ...params
  });
}
export function compareAuthorizeTemporaryUser(__a: AuthorizeTemporaryUser, __b: AuthorizeTemporaryUser): boolean {
  return (
    /**
     * compare parameter username
     */
    __a['username'] === __b['username']
  );
}
export function updateAuthorizeTemporaryUser(value: AuthorizeTemporaryUser, changes: Partial<AuthorizeTemporaryUserInputParams>) {
  if(typeof changes['username'] !== 'undefined') {
    if(!(changes['username'] === value['username'])) {
      value = AuthorizeTemporaryUser({
        ...value,
        username: changes['username'],
      });
    }
  }
  return value;
}
