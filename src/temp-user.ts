import {Request} from "./protocol/Request";
import {Result} from "./protocol/Result";
import {objectId} from "./objectId";
import {ISerializer} from "./__types__";
import {encodeObjectId} from "./objectId";
import {IDeserializer} from "./__types__";
import {decodeObjectId} from "./objectId";
import {defaultObjectId} from "./objectId";
import {compareObjectId} from "./objectId";
import {compareObjectId as compareObjectId1} from "./objectId";
import {IRequest} from "./__types__";
export interface registerTempUserResultInputParams {
  tempUserId: Readonly<objectId>;
}
export function registerTempUserResult(params: registerTempUserResultInputParams): registerTempUserResult {
  return {
    _name: 'temp-user.registerTempUserResult',
    tempUserId: params['tempUserId']
  };
}
export function encodeRegisterTempUserResult(__s: ISerializer, value: registerTempUserResult) {
  __s.writeInt32(-7696314);
  /**
   * encoding param: tempUserId
   */
  const __pv0 = value['tempUserId'];
  encodeObjectId(__s,__pv0);
}
export function decodeRegisterTempUserResult(__d: IDeserializer): registerTempUserResult | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -7696314) return null;
  let tempUserId: objectId;
  /**
   * decoding param: tempUserId
   */
  const tmp2 = decodeObjectId(__d);
  if(tmp2 === null) return null;
  tempUserId = tmp2;
  return {
    _name: 'temp-user.registerTempUserResult',
    tempUserId
  };
}
export interface registerTempUserResult  {
  _name: 'temp-user.registerTempUserResult';
  tempUserId: Readonly<objectId>;
}
export function defaultRegisterTempUserResult(params: Partial<registerTempUserResultInputParams> = {}): registerTempUserResult {
  return registerTempUserResult({
    tempUserId: defaultObjectId(),
    ...params
  });
}
export function compareRegisterTempUserResult(__a: registerTempUserResult, __b: registerTempUserResult): boolean {
  return (
    /**
     * compare parameter tempUserId
     */
    compareObjectId(__a['tempUserId'],__b['tempUserId'])
  );
}
export function updateRegisterTempUserResult(value: registerTempUserResult, changes: Partial<registerTempUserResultInputParams>) {
  if(typeof changes['tempUserId'] !== 'undefined') {
    if(!(compareObjectId1(changes['tempUserId'],value['tempUserId']))) {
      value = registerTempUserResult({
        ...value,
        tempUserId: changes['tempUserId'],
      });
    }
  }
  return value;
}
export interface RegisterTempUserInputParams {
  username: string;
}
export function RegisterTempUser(params: RegisterTempUserInputParams): RegisterTempUser {
  return {
    _name: 'temp-user.RegisterTempUser',
    username: params['username']
  };
}
export function encodeRegisterTempUser(__s: ISerializer, value: RegisterTempUser) {
  __s.writeInt32(-1377514302);
  /**
   * encoding param: username
   */
  const __pv0 = value['username'];
  __s.writeString(__pv0);
}
export function decodeRegisterTempUser(__d: IDeserializer): RegisterTempUser | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1377514302) return null;
  let username: string;
  /**
   * decoding param: username
   */
  username = __d.readString();
  return {
    _name: 'temp-user.RegisterTempUser',
    username
  };
}
export interface RegisterTempUser extends IRequest<Readonly<registerTempUserResult>> {
  _name: 'temp-user.RegisterTempUser';
  username: string;
}
export function defaultRegisterTempUser(params: Partial<RegisterTempUserInputParams> = {}): RegisterTempUser {
  return RegisterTempUser({
    username: "",
    ...params
  });
}
export function compareRegisterTempUser(__a: RegisterTempUser, __b: RegisterTempUser): boolean {
  return (
    /**
     * compare parameter username
     */
    __a['username'] === __b['username']
  );
}
export function updateRegisterTempUser(value: RegisterTempUser, changes: Partial<RegisterTempUserInputParams>) {
  if(typeof changes['username'] !== 'undefined') {
    if(!(changes['username'] === value['username'])) {
      value = RegisterTempUser({
        ...value,
        username: changes['username'],
      });
    }
  }
  return value;
}
