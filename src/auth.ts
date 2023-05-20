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
  id: Readonly<objectId>;
  key: Uint8Array;
}
export function authorization(params: authorizationInputParams): authorization {
  return {
    _name: 'auth.authorization',
    id: params['id'],
    key: params['key']
  };
}
export function encodeAuthorization(__s: ISerializer, value: authorization) {
  __s.writeInt32(-1526548792);
  /**
   * encoding param: id
   */
  const __pv0 = value['id'];
  encodeObjectId(__s,__pv0);
  /**
   * encoding param: key
   */
  const __pv1 = value['key'];
  __s.writeUint32(__pv1.byteLength);
  __s.writeBuffer(__pv1);
}
export function decodeAuthorization(__d: IDeserializer): authorization | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1526548792) return null;
  let id: objectId;
  let key: Uint8Array;
  /**
   * decoding param: id
   */
  const tmp2 = decodeObjectId(__d);
  if(tmp2 === null) return null;
  id = tmp2;
  /**
   * decoding param: key
   */
  key = __d.readBuffer(__d.readUint32());
  return {
    _name: 'auth.authorization',
    id,
    key
  };
}
export interface authorization  {
  _name: 'auth.authorization';
  id: Readonly<objectId>;
  key: Uint8Array;
}
export function defaultAuthorization(params: Partial<authorizationInputParams> = {}): authorization {
  return authorization({
    id: defaultObjectId(),
    key: new Uint8Array(0),
    ...params
  });
}
export function compareAuthorization(__a: authorization, __b: authorization): boolean {
  return (
    /**
     * compare parameter id
     */
    compareObjectId(__a['id'],__b['id']) &&
    /**
     * compare parameter key
     */
    __a['key'].byteLength === __b['key'].byteLength && __a['key'].every((__byte,index) => __b['key'][index] === __byte)
  );
}
export function updateAuthorization(value: authorization, changes: Partial<authorizationInputParams>) {
  if(typeof changes['id'] !== 'undefined') {
    if(!(compareObjectId1(changes['id'],value['id']))) {
      value = authorization({
        ...value,
        id: changes['id'],
      });
    }
  }
  if(typeof changes['key'] !== 'undefined') {
    if(!(changes['key'].byteLength === value['key'].byteLength && changes['key'].every((__byte,index) => value['key'][index] === __byte))) {
      value = authorization({
        ...value,
        key: changes['key'],
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
