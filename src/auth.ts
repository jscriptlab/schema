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
export interface authorizationInputParams {
  authId: Readonly<objectId>;
}
export function authorization(params: authorizationInputParams): authorization {
  return {
    _name: 'auth.authorization',
    authId: params['authId']
  };
}
export function encodeAuthorization(__s: ISerializer, value: authorization) {
  __s.writeInt32(522219252);
  /**
   * encoding param: authId
   */
  const __pv0 = value['authId'];
  encodeObjectId(__s,__pv0);
}
export function decodeAuthorization(__d: IDeserializer): authorization | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 522219252) return null;
  let authId: objectId;
  /**
   * decoding param: authId
   */
  const tmp2 = decodeObjectId(__d);
  if(tmp2 === null) return null;
  authId = tmp2;
  return {
    _name: 'auth.authorization',
    authId
  };
}
export interface authorization  {
  _name: 'auth.authorization';
  authId: Readonly<objectId>;
}
export function defaultAuthorization(params: Partial<authorizationInputParams> = {}): authorization {
  return authorization({
    authId: defaultObjectId(),
    ...params
  });
}
export function compareAuthorization(__a: authorization, __b: authorization): boolean {
  return (
    /**
     * compare parameter authId
     */
    compareObjectId(__a['authId'],__b['authId'])
  );
}
export function updateAuthorization(value: authorization, changes: Partial<authorizationInputParams>) {
  if(typeof changes['authId'] !== 'undefined') {
    if(!(compareObjectId1(changes['authId'],value['authId']))) {
      value = authorization({
        ...value,
        authId: changes['authId'],
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
export interface AuthorizeTemporaryUser extends IRequest<Readonly<authorization>> {
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
