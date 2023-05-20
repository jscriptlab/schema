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
  sessionId: string;
  authId: Readonly<objectId>;
  message: Uint8Array;
  iv: Uint8Array;
}
export function messageAuthenticated(params: messageAuthenticatedInputParams): messageAuthenticated {
  return {
    _name: 'index.messageAuthenticated',
    sessionId: params['sessionId'],
    authId: params['authId'],
    message: params['message'],
    iv: params['iv']
  };
}
export function encodeMessageAuthenticated(__s: ISerializer, value: messageAuthenticated) {
  __s.writeInt32(-351437496);
  /**
   * encoding param: sessionId
   */
  const __pv0 = value['sessionId'];
  __s.writeUnsignedLong(__pv0);
  /**
   * encoding param: authId
   */
  const __pv1 = value['authId'];
  encodeObjectId(__s,__pv1);
  /**
   * encoding param: message
   */
  const __pv2 = value['message'];
  __s.writeUint32(__pv2.byteLength);
  __s.writeBuffer(__pv2);
  /**
   * encoding param: iv
   */
  const __pv3 = value['iv'];
  __s.writeUint32(__pv3.byteLength);
  __s.writeBuffer(__pv3);
}
export function decodeMessageAuthenticated(__d: IDeserializer): messageAuthenticated | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -351437496) return null;
  let sessionId: string;
  let authId: objectId;
  let message: Uint8Array;
  let iv: Uint8Array;
  /**
   * decoding param: sessionId
   */
  sessionId = __d.readUnsignedLong();
  /**
   * decoding param: authId
   */
  const tmp3 = decodeObjectId(__d);
  if(tmp3 === null) return null;
  authId = tmp3;
  /**
   * decoding param: message
   */
  message = __d.readBuffer(__d.readUint32());
  /**
   * decoding param: iv
   */
  iv = __d.readBuffer(__d.readUint32());
  return {
    _name: 'index.messageAuthenticated',
    sessionId,
    authId,
    message,
    iv
  };
}
export interface messageAuthenticated  {
  _name: 'index.messageAuthenticated';
  sessionId: string;
  authId: Readonly<objectId>;
  message: Uint8Array;
  iv: Uint8Array;
}
export function defaultMessageAuthenticated(params: Partial<messageAuthenticatedInputParams> = {}): messageAuthenticated {
  return messageAuthenticated({
    sessionId: "0",
    authId: defaultObjectId(),
    message: new Uint8Array(0),
    iv: new Uint8Array(0),
    ...params
  });
}
export function compareMessageAuthenticated(__a: messageAuthenticated, __b: messageAuthenticated): boolean {
  return (
    /**
     * compare parameter sessionId
     */
    __a['sessionId'] === __b['sessionId'] &&
    /**
     * compare parameter authId
     */
    compareObjectId(__a['authId'],__b['authId']) &&
    /**
     * compare parameter message
     */
    __a['message'].byteLength === __b['message'].byteLength && __a['message'].every((__byte,index) => __b['message'][index] === __byte) &&
    /**
     * compare parameter iv
     */
    __a['iv'].byteLength === __b['iv'].byteLength && __a['iv'].every((__byte,index) => __b['iv'][index] === __byte)
  );
}
export function updateMessageAuthenticated(value: messageAuthenticated, changes: Partial<messageAuthenticatedInputParams>) {
  if(typeof changes['sessionId'] !== 'undefined') {
    if(!(changes['sessionId'] === value['sessionId'])) {
      value = messageAuthenticated({
        ...value,
        sessionId: changes['sessionId'],
      });
    }
  }
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
  if(typeof changes['iv'] !== 'undefined') {
    if(!(changes['iv'].byteLength === value['iv'].byteLength && changes['iv'].every((__byte,index) => value['iv'][index] === __byte))) {
      value = messageAuthenticated({
        ...value,
        iv: changes['iv'],
      });
    }
  }
  return value;
}
