import {messageRequest} from "./protocol/index";
import {ClientMessage} from "./protocol/index";
import {objectId} from "./objectId";
import {ISerializer} from "./__types__";
import {encodeObjectId} from "./objectId";
import {encodeMessageRequest} from "./protocol/index";
import {IDeserializer} from "./__types__";
import {decodeObjectId} from "./objectId";
import {decodeMessageRequest} from "./protocol/index";
import {defaultObjectId} from "./objectId";
import {defaultMessageRequest} from "./protocol/index";
import {compareObjectId} from "./objectId";
import {compareMessageRequest} from "./protocol/index";
import {compareObjectId as compareObjectId1} from "./objectId";
import {compareMessageRequest as compareMessageRequest2} from "./protocol/index";
export interface messageAuthenticatedInputParams {
  authenticationId: Readonly<objectId>;
  message: Readonly<messageRequest>;
}
export function messageAuthenticated(params: messageAuthenticatedInputParams): messageAuthenticated {
  return {
    _name: 'index.messageAuthenticated',
    authenticationId: params['authenticationId'],
    message: params['message']
  };
}
export function encodeMessageAuthenticated(__s: ISerializer, value: messageAuthenticated) {
  __s.writeInt32(-1459379658);
  /**
   * encoding param: authenticationId
   */
  const __pv0 = value['authenticationId'];
  encodeObjectId(__s,__pv0);
  /**
   * encoding param: message
   */
  const __pv1 = value['message'];
  encodeMessageRequest(__s,__pv1);
}
export function decodeMessageAuthenticated(__d: IDeserializer): messageAuthenticated | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1459379658) return null;
  let authenticationId: objectId;
  let message: messageRequest;
  /**
   * decoding param: authenticationId
   */
  const tmp2 = decodeObjectId(__d);
  if(tmp2 === null) return null;
  authenticationId = tmp2;
  /**
   * decoding param: message
   */
  const tmp4 = decodeMessageRequest(__d);
  if(tmp4 === null) return null;
  message = tmp4;
  return {
    _name: 'index.messageAuthenticated',
    authenticationId,
    message
  };
}
export interface messageAuthenticated  {
  _name: 'index.messageAuthenticated';
  authenticationId: Readonly<objectId>;
  message: Readonly<messageRequest>;
}
export function defaultMessageAuthenticated(params: Partial<messageAuthenticatedInputParams> = {}): messageAuthenticated {
  return messageAuthenticated({
    authenticationId: defaultObjectId(),
    message: defaultMessageRequest(),
    ...params
  });
}
export function compareMessageAuthenticated(__a: messageAuthenticated, __b: messageAuthenticated): boolean {
  return (
    /**
     * compare parameter authenticationId
     */
    compareObjectId(__a['authenticationId'],__b['authenticationId']) &&
    /**
     * compare parameter message
     */
    compareMessageRequest(__a['message'],__b['message'])
  );
}
export function updateMessageAuthenticated(value: messageAuthenticated, changes: Partial<messageAuthenticatedInputParams>) {
  if(typeof changes['authenticationId'] !== 'undefined') {
    if(!(compareObjectId1(changes['authenticationId'],value['authenticationId']))) {
      value = messageAuthenticated({
        ...value,
        authenticationId: changes['authenticationId'],
      });
    }
  }
  if(typeof changes['message'] !== 'undefined') {
    if(!(compareMessageRequest2(changes['message'],value['message']))) {
      value = messageAuthenticated({
        ...value,
        message: changes['message'],
      });
    }
  }
  return value;
}
