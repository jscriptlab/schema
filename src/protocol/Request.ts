import {SendOffer} from "./../call";
import {SendRTCIceCandidate} from "./../call";
import {SendAnswer} from "./../call";
import {AuthorizeTemporaryUser} from "./../auth";
import {SendContactMessage} from "./../contact-messages/index";
import {RegisterTempUser} from "./../temp-user";
import {ISerializer} from "./../__types__";
import {encodeSendOffer} from "./../call";
import {encodeSendRTCIceCandidate} from "./../call";
import {encodeSendAnswer} from "./../call";
import {encodeAuthorizeTemporaryUser} from "./../auth";
import {encodeSendContactMessage} from "./../contact-messages/index";
import {encodeRegisterTempUser} from "./../temp-user";
import {IDeserializer} from "./../__types__";
import {decodeSendOffer} from "./../call";
import {decodeSendRTCIceCandidate} from "./../call";
import {decodeSendAnswer} from "./../call";
import {decodeAuthorizeTemporaryUser} from "./../auth";
import {decodeSendContactMessage} from "./../contact-messages/index";
import {decodeRegisterTempUser} from "./../temp-user";
import {defaultSendOffer} from "./../call";
import {compareSendOffer} from "./../call";
import {compareSendRTCIceCandidate} from "./../call";
import {compareSendAnswer} from "./../call";
import {compareAuthorizeTemporaryUser} from "./../auth";
import {compareSendContactMessage} from "./../contact-messages/index";
import {compareRegisterTempUser} from "./../temp-user";
export type Request = Readonly<SendOffer> | Readonly<SendRTCIceCandidate> | Readonly<SendAnswer> | Readonly<AuthorizeTemporaryUser> | Readonly<SendContactMessage> | Readonly<RegisterTempUser>;
export function encodeRequestTrait(__s: ISerializer,value: Request) {
  switch(value._name) {
    case 'call.SendOffer':
      encodeSendOffer(__s,value);
      break;
    case 'call.SendRTCIceCandidate':
      encodeSendRTCIceCandidate(__s,value);
      break;
    case 'call.SendAnswer':
      encodeSendAnswer(__s,value);
      break;
    case 'auth.AuthorizeTemporaryUser':
      encodeAuthorizeTemporaryUser(__s,value);
      break;
    case 'contact-messages.index.SendContactMessage':
      encodeSendContactMessage(__s,value);
      break;
    case 'temp-user.RegisterTempUser':
      encodeRegisterTempUser(__s,value);
      break;
  }
}
export function decodeRequestTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: SendOffer | SendRTCIceCandidate | SendAnswer | AuthorizeTemporaryUser | SendContactMessage | RegisterTempUser;
  switch(__id) {
    case 419052098: {
      const tmp = decodeSendOffer(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1968577916: {
      const tmp = decodeSendRTCIceCandidate(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1458394690: {
      const tmp = decodeSendAnswer(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1019201975: {
      const tmp = decodeAuthorizeTemporaryUser(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 675924574: {
      const tmp = decodeSendContactMessage(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1377514302: {
      const tmp = decodeRegisterTempUser(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultRequestTrait() {
  return defaultSendOffer();
}
export function compareRequestTrait(__a: Request, __b: Request) {
  switch(__a._name) {
    case 'call.SendOffer':
      if(__b._name !== "call.SendOffer") return false;
      return compareSendOffer(__a,__b);
    case 'call.SendRTCIceCandidate':
      if(__b._name !== "call.SendRTCIceCandidate") return false;
      return compareSendRTCIceCandidate(__a,__b);
    case 'call.SendAnswer':
      if(__b._name !== "call.SendAnswer") return false;
      return compareSendAnswer(__a,__b);
    case 'auth.AuthorizeTemporaryUser':
      if(__b._name !== "auth.AuthorizeTemporaryUser") return false;
      return compareAuthorizeTemporaryUser(__a,__b);
    case 'contact-messages.index.SendContactMessage':
      if(__b._name !== "contact-messages.index.SendContactMessage") return false;
      return compareSendContactMessage(__a,__b);
    case 'temp-user.RegisterTempUser':
      if(__b._name !== "temp-user.RegisterTempUser") return false;
      return compareRegisterTempUser(__a,__b);
  }
}
