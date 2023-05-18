import {ServerMessage} from "./protocol/index";
import {ClientMessage} from "./protocol/index";
import {objectId} from "./objectId";
import {ISerializer} from "./__types__";
import {encodeObjectId} from "./objectId";
import {IDeserializer} from "./__types__";
import {decodeObjectId} from "./objectId";
import {defaultObjectId} from "./objectId";
import {compareObjectId} from "./objectId";
import {compareObjectId as compareObjectId1} from "./objectId";
export interface messageAuthenticatedInputParams {
  authId: Readonly<objectId>;
  message: Uint8Array;
}
export function messageAuthenticated(params: messageAuthenticatedInputParams): messageAuthenticated {
  return {
    _name: 'index.messageAuthenticated',
    authId: params['authId'],
    message: params['message']
  };
}
export function encodeMessageAuthenticated(__s: ISerializer, value: messageAuthenticated) {
  __s.writeInt32(686061147);
  /**
   * encoding param: authId
   */
  const __pv0 = value['authId'];
  encodeObjectId(__s,__pv0);
  /**
   * encoding param: message
   */
  const __pv1 = value['message'];
  __s.writeUint32(__pv1.byteLength);
  __s.writeBuffer(__pv1);
}
export function decodeMessageAuthenticated(__d: IDeserializer): messageAuthenticated | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 686061147) return null;
  let authId: objectId;
  let message: Uint8Array;
  /**
   * decoding param: authId
   */
  const tmp2 = decodeObjectId(__d);
  if(tmp2 === null) return null;
  authId = tmp2;
  /**
   * decoding param: message
   */
  message = __d.readBuffer(__d.readUint32());
  return {
    _name: 'index.messageAuthenticated',
    authId,
    message
  };
}
export interface messageAuthenticated  {
  _name: 'index.messageAuthenticated';
  authId: Readonly<objectId>;
  message: Uint8Array;
}
export function defaultMessageAuthenticated(params: Partial<messageAuthenticatedInputParams> = {}): messageAuthenticated {
  return messageAuthenticated({
    authId: defaultObjectId(),
    message: new Uint8Array(0),
    ...params
  });
}
export function compareMessageAuthenticated(__a: messageAuthenticated, __b: messageAuthenticated): boolean {
  return (
    /**
     * compare parameter authId
     */
    compareObjectId(__a['authId'],__b['authId']) &&
    /**
     * compare parameter message
     */
    __a['message'].byteLength === __b['message'].byteLength && __a['message'].every((__byte,index) => __b['message'][index] === __byte)
  );
}
export function updateMessageAuthenticated(value: messageAuthenticated, changes: Partial<messageAuthenticatedInputParams>) {
  if(typeof changes['authId'] !== 'undefined') {
    if(!(compareObjectId1(changes['authId'],value['authId']))) {
      value = messageAuthenticated({
        ...value,
        authId: changes['authId'],
      });
    }
  }
  if(typeof changes['message'] !== 'undefined') {
    if(!(changes['message'].byteLength === value['message'].byteLength && changes['message'].every((__byte,index) => value['message'][index] === __byte))) {
      value = messageAuthenticated({
        ...value,
        message: changes['message'],
      });
    }
  }
  return value;
}
