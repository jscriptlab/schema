import {void_t} from "./void";
import {authorizeTemporaryUserResult} from "./../auth";
import {registerTempUserResult} from "./../temp-user";
import {ISerializer} from "./../__types__";
import {encodeVoid_t} from "./void";
import {encodeAuthorizeTemporaryUserResult} from "./../auth";
import {encodeRegisterTempUserResult} from "./../temp-user";
import {IDeserializer} from "./../__types__";
import {decodeVoid_t} from "./void";
import {decodeAuthorizeTemporaryUserResult} from "./../auth";
import {decodeRegisterTempUserResult} from "./../temp-user";
import {defaultVoid_t} from "./void";
import {compareVoid_t} from "./void";
import {compareAuthorizeTemporaryUserResult} from "./../auth";
import {compareRegisterTempUserResult} from "./../temp-user";
export type Result = Readonly<void_t> | Readonly<authorizeTemporaryUserResult> | Readonly<registerTempUserResult>;
export function encodeResultTrait(__s: ISerializer,value: Result) {
  switch(value._name) {
    case 'protocol.void.void_t':
      encodeVoid_t(__s,value);
      break;
    case 'auth.authorizeTemporaryUserResult':
      encodeAuthorizeTemporaryUserResult(__s,value);
      break;
    case 'temp-user.registerTempUserResult':
      encodeRegisterTempUserResult(__s,value);
      break;
  }
}
export function decodeResultTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: void_t | authorizeTemporaryUserResult | registerTempUserResult;
  switch(__id) {
    case -1641569182: {
      const tmp = decodeVoid_t(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1203554706: {
      const tmp = decodeAuthorizeTemporaryUserResult(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -7696314: {
      const tmp = decodeRegisterTempUserResult(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultResultTrait() {
  return defaultVoid_t();
}
export function compareResultTrait(__a: Result, __b: Result) {
  switch(__a._name) {
    case 'protocol.void.void_t':
      if(__b._name !== "protocol.void.void_t") return false;
      return compareVoid_t(__a,__b);
    case 'auth.authorizeTemporaryUserResult':
      if(__b._name !== "auth.authorizeTemporaryUserResult") return false;
      return compareAuthorizeTemporaryUserResult(__a,__b);
    case 'temp-user.registerTempUserResult':
      if(__b._name !== "temp-user.registerTempUserResult") return false;
      return compareRegisterTempUserResult(__a,__b);
  }
}
