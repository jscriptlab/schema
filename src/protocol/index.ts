import {Request} from "./Request";
import {Result} from "./Result";
import {Error} from "./Error";
import {ISerializer} from "./../__types__";
import {IDeserializer} from "./../__types__";
import {messageAuthenticated} from "./../index";
import {encodeMessageAuthenticated} from "./../index";
import {decodeMessageAuthenticated} from "./../index";
import {defaultMessageAuthenticated} from "./../index";
import {compareMessageAuthenticated} from "./../index";
import {messageAuthenticated as messageAuthenticated1} from "./../index";
import {encodeMessageAuthenticated as encodeMessageAuthenticated2} from "./../index";
import {decodeMessageAuthenticated as decodeMessageAuthenticated3} from "./../index";
import {defaultMessageAuthenticated as defaultMessageAuthenticated4} from "./../index";
import {compareMessageAuthenticated as compareMessageAuthenticated5} from "./../index";
import {encodeRequestTrait} from "./Request";
import {decodeRequestTrait} from "./Request";
import {defaultRequestTrait} from "./Request";
import {compareRequestTrait} from "./Request";
import {compareRequestTrait as compareRequestTrait6} from "./Request";
import {encodeResultTrait} from "./Result";
import {decodeResultTrait} from "./Result";
import {defaultResultTrait} from "./Result";
import {compareResultTrait} from "./Result";
import {compareResultTrait as compareResultTrait7} from "./Result";
import {encodeErrorTrait} from "./Error";
import {decodeErrorTrait} from "./Error";
import {defaultErrorTrait} from "./Error";
import {compareErrorTrait} from "./Error";
import {compareErrorTrait as compareErrorTrait8} from "./Error";
export type Message = Readonly<messageRequest> | Readonly<messageResultSuccess> | Readonly<messageResultError> | Readonly<messageProtocolError>;
export function encodeMessageTrait(__s: ISerializer,value: Message) {
  switch(value._name) {
    case 'protocol.index.messageRequest':
      encodeMessageRequest(__s,value);
      break;
    case 'protocol.index.messageResultSuccess':
      encodeMessageResultSuccess(__s,value);
      break;
    case 'protocol.index.messageResultError':
      encodeMessageResultError(__s,value);
      break;
    case 'protocol.index.messageProtocolError':
      encodeMessageProtocolError(__s,value);
      break;
  }
}
export function decodeMessageTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: messageRequest | messageResultSuccess | messageResultError | messageProtocolError;
  switch(__id) {
    case 211099086: {
      const tmp = decodeMessageRequest(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1815282765: {
      const tmp = decodeMessageResultSuccess(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1847483811: {
      const tmp = decodeMessageResultError(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1131066298: {
      const tmp = decodeMessageProtocolError(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultMessageTrait() {
  return defaultMessageRequest();
}
export function compareMessageTrait(__a: Message, __b: Message) {
  switch(__a._name) {
    case 'protocol.index.messageRequest':
      if(__b._name !== "protocol.index.messageRequest") return false;
      return compareMessageRequest(__a,__b);
    case 'protocol.index.messageResultSuccess':
      if(__b._name !== "protocol.index.messageResultSuccess") return false;
      return compareMessageResultSuccess(__a,__b);
    case 'protocol.index.messageResultError':
      if(__b._name !== "protocol.index.messageResultError") return false;
      return compareMessageResultError(__a,__b);
    case 'protocol.index.messageProtocolError':
      if(__b._name !== "protocol.index.messageProtocolError") return false;
      return compareMessageProtocolError(__a,__b);
  }
}
export type ClientMessage = Readonly<messageAuthenticated> | Readonly<messageRequest> | Readonly<acknowledgeMessage>;
export function encodeClientMessageTrait(__s: ISerializer,value: ClientMessage) {
  switch(value._name) {
    case 'index.messageAuthenticated':
      encodeMessageAuthenticated(__s,value);
      break;
    case 'protocol.index.messageRequest':
      encodeMessageRequest(__s,value);
      break;
    case 'protocol.index.acknowledgeMessage':
      encodeAcknowledgeMessage(__s,value);
      break;
  }
}
export function decodeClientMessageTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: messageAuthenticated | messageRequest | acknowledgeMessage;
  switch(__id) {
    case 686061147: {
      const tmp = decodeMessageAuthenticated(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 211099086: {
      const tmp = decodeMessageRequest(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 576660059: {
      const tmp = decodeAcknowledgeMessage(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultClientMessageTrait() {
  return defaultMessageAuthenticated();
}
export function compareClientMessageTrait(__a: ClientMessage, __b: ClientMessage) {
  switch(__a._name) {
    case 'index.messageAuthenticated':
      if(__b._name !== "index.messageAuthenticated") return false;
      return compareMessageAuthenticated(__a,__b);
    case 'protocol.index.messageRequest':
      if(__b._name !== "protocol.index.messageRequest") return false;
      return compareMessageRequest(__a,__b);
    case 'protocol.index.acknowledgeMessage':
      if(__b._name !== "protocol.index.acknowledgeMessage") return false;
      return compareAcknowledgeMessage(__a,__b);
  }
}
export type ServerMessage = Readonly<messageAuthenticated> | Readonly<newSessionCreated> | Readonly<messageResultSuccess> | Readonly<messageResultError> | Readonly<messageProtocolError> | Readonly<acknowledgeMessage>;
export function encodeServerMessageTrait(__s: ISerializer,value: ServerMessage) {
  switch(value._name) {
    case 'index.messageAuthenticated':
      encodeMessageAuthenticated(__s,value);
      break;
    case 'protocol.index.newSessionCreated':
      encodeNewSessionCreated(__s,value);
      break;
    case 'protocol.index.messageResultSuccess':
      encodeMessageResultSuccess(__s,value);
      break;
    case 'protocol.index.messageResultError':
      encodeMessageResultError(__s,value);
      break;
    case 'protocol.index.messageProtocolError':
      encodeMessageProtocolError(__s,value);
      break;
    case 'protocol.index.acknowledgeMessage':
      encodeAcknowledgeMessage(__s,value);
      break;
  }
}
export function decodeServerMessageTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: messageAuthenticated | newSessionCreated | messageResultSuccess | messageResultError | messageProtocolError | acknowledgeMessage;
  switch(__id) {
    case 686061147: {
      const tmp = decodeMessageAuthenticated(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 907759432: {
      const tmp = decodeNewSessionCreated(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1815282765: {
      const tmp = decodeMessageResultSuccess(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1847483811: {
      const tmp = decodeMessageResultError(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1131066298: {
      const tmp = decodeMessageProtocolError(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 576660059: {
      const tmp = decodeAcknowledgeMessage(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultServerMessageTrait() {
  return defaultMessageAuthenticated();
}
export function compareServerMessageTrait(__a: ServerMessage, __b: ServerMessage) {
  switch(__a._name) {
    case 'index.messageAuthenticated':
      if(__b._name !== "index.messageAuthenticated") return false;
      return compareMessageAuthenticated5(__a,__b);
    case 'protocol.index.newSessionCreated':
      if(__b._name !== "protocol.index.newSessionCreated") return false;
      return compareNewSessionCreated(__a,__b);
    case 'protocol.index.messageResultSuccess':
      if(__b._name !== "protocol.index.messageResultSuccess") return false;
      return compareMessageResultSuccess(__a,__b);
    case 'protocol.index.messageResultError':
      if(__b._name !== "protocol.index.messageResultError") return false;
      return compareMessageResultError(__a,__b);
    case 'protocol.index.messageProtocolError':
      if(__b._name !== "protocol.index.messageProtocolError") return false;
      return compareMessageProtocolError(__a,__b);
    case 'protocol.index.acknowledgeMessage':
      if(__b._name !== "protocol.index.acknowledgeMessage") return false;
      return compareAcknowledgeMessage(__a,__b);
  }
}
export interface newSessionCreatedInputParams {
  id: string;
}
export function newSessionCreated(params: newSessionCreatedInputParams): newSessionCreated {
  return {
    _name: 'protocol.index.newSessionCreated',
    id: params['id']
  };
}
export function encodeNewSessionCreated(__s: ISerializer, value: newSessionCreated) {
  __s.writeInt32(907759432);
  /**
   * encoding param: id
   */
  const __pv0 = value['id'];
  __s.writeUnsignedLong(__pv0);
}
export function decodeNewSessionCreated(__d: IDeserializer): newSessionCreated | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 907759432) return null;
  let id: string;
  /**
   * decoding param: id
   */
  id = __d.readUnsignedLong();
  return {
    _name: 'protocol.index.newSessionCreated',
    id
  };
}
export interface newSessionCreated  {
  _name: 'protocol.index.newSessionCreated';
  id: string;
}
export function defaultNewSessionCreated(params: Partial<newSessionCreatedInputParams> = {}): newSessionCreated {
  return newSessionCreated({
    id: "0",
    ...params
  });
}
export function compareNewSessionCreated(__a: newSessionCreated, __b: newSessionCreated): boolean {
  return (
    /**
     * compare parameter id
     */
    __a['id'] === __b['id']
  );
}
export function updateNewSessionCreated(value: newSessionCreated, changes: Partial<newSessionCreatedInputParams>) {
  if(typeof changes['id'] !== 'undefined') {
    if(!(changes['id'] === value['id'])) {
      value = newSessionCreated({
        ...value,
        id: changes['id'],
      });
    }
  }
  return value;
}
export interface messageRequestInputParams {
  requestId: string;
  sessionId: string;
  request: Readonly<Request>;
}
export function messageRequest(params: messageRequestInputParams): messageRequest {
  return {
    _name: 'protocol.index.messageRequest',
    requestId: params['requestId'],
    sessionId: params['sessionId'],
    request: params['request']
  };
}
export function encodeMessageRequest(__s: ISerializer, value: messageRequest) {
  __s.writeInt32(211099086);
  /**
   * encoding param: requestId
   */
  const __pv0 = value['requestId'];
  __s.writeUnsignedLong(__pv0);
  /**
   * encoding param: sessionId
   */
  const __pv1 = value['sessionId'];
  __s.writeUnsignedLong(__pv1);
  /**
   * encoding param: request
   */
  const __pv2 = value['request'];
  encodeRequestTrait(__s,__pv2);
}
export function decodeMessageRequest(__d: IDeserializer): messageRequest | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 211099086) return null;
  let requestId: string;
  let sessionId: string;
  let request: Request;
  /**
   * decoding param: requestId
   */
  requestId = __d.readUnsignedLong();
  /**
   * decoding param: sessionId
   */
  sessionId = __d.readUnsignedLong();
  /**
   * decoding param: request
   */
  const tmp4 = decodeRequestTrait(__d);
  if(tmp4 === null) return null;
  request = tmp4;
  return {
    _name: 'protocol.index.messageRequest',
    requestId,
    sessionId,
    request
  };
}
export interface messageRequest  {
  _name: 'protocol.index.messageRequest';
  requestId: string;
  sessionId: string;
  request: Readonly<Request>;
}
export function defaultMessageRequest(params: Partial<messageRequestInputParams> = {}): messageRequest {
  return messageRequest({
    requestId: "0",
    sessionId: "0",
    request: defaultRequestTrait(),
    ...params
  });
}
export function compareMessageRequest(__a: messageRequest, __b: messageRequest): boolean {
  return (
    /**
     * compare parameter requestId
     */
    __a['requestId'] === __b['requestId'] &&
    /**
     * compare parameter sessionId
     */
    __a['sessionId'] === __b['sessionId'] &&
    /**
     * compare parameter request
     */
    compareRequestTrait(__a['request'],__b['request'])
  );
}
export function updateMessageRequest(value: messageRequest, changes: Partial<messageRequestInputParams>) {
  if(typeof changes['requestId'] !== 'undefined') {
    if(!(changes['requestId'] === value['requestId'])) {
      value = messageRequest({
        ...value,
        requestId: changes['requestId'],
      });
    }
  }
  if(typeof changes['sessionId'] !== 'undefined') {
    if(!(changes['sessionId'] === value['sessionId'])) {
      value = messageRequest({
        ...value,
        sessionId: changes['sessionId'],
      });
    }
  }
  if(typeof changes['request'] !== 'undefined') {
    if(!(compareRequestTrait6(changes['request'],value['request']))) {
      value = messageRequest({
        ...value,
        request: changes['request'],
      });
    }
  }
  return value;
}
export interface messageResultSuccessInputParams {
  requestId: string;
  result: Readonly<Result>;
}
export function messageResultSuccess(params: messageResultSuccessInputParams): messageResultSuccess {
  return {
    _name: 'protocol.index.messageResultSuccess',
    requestId: params['requestId'],
    result: params['result']
  };
}
export function encodeMessageResultSuccess(__s: ISerializer, value: messageResultSuccess) {
  __s.writeInt32(1815282765);
  /**
   * encoding param: requestId
   */
  const __pv0 = value['requestId'];
  __s.writeUnsignedLong(__pv0);
  /**
   * encoding param: result
   */
  const __pv1 = value['result'];
  encodeResultTrait(__s,__pv1);
}
export function decodeMessageResultSuccess(__d: IDeserializer): messageResultSuccess | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1815282765) return null;
  let requestId: string;
  let result: Result;
  /**
   * decoding param: requestId
   */
  requestId = __d.readUnsignedLong();
  /**
   * decoding param: result
   */
  const tmp3 = decodeResultTrait(__d);
  if(tmp3 === null) return null;
  result = tmp3;
  return {
    _name: 'protocol.index.messageResultSuccess',
    requestId,
    result
  };
}
export interface messageResultSuccess  {
  _name: 'protocol.index.messageResultSuccess';
  requestId: string;
  result: Readonly<Result>;
}
export function defaultMessageResultSuccess(params: Partial<messageResultSuccessInputParams> = {}): messageResultSuccess {
  return messageResultSuccess({
    requestId: "0",
    result: defaultResultTrait(),
    ...params
  });
}
export function compareMessageResultSuccess(__a: messageResultSuccess, __b: messageResultSuccess): boolean {
  return (
    /**
     * compare parameter requestId
     */
    __a['requestId'] === __b['requestId'] &&
    /**
     * compare parameter result
     */
    compareResultTrait(__a['result'],__b['result'])
  );
}
export function updateMessageResultSuccess(value: messageResultSuccess, changes: Partial<messageResultSuccessInputParams>) {
  if(typeof changes['requestId'] !== 'undefined') {
    if(!(changes['requestId'] === value['requestId'])) {
      value = messageResultSuccess({
        ...value,
        requestId: changes['requestId'],
      });
    }
  }
  if(typeof changes['result'] !== 'undefined') {
    if(!(compareResultTrait7(changes['result'],value['result']))) {
      value = messageResultSuccess({
        ...value,
        result: changes['result'],
      });
    }
  }
  return value;
}
export interface messageResultErrorInputParams {
  requestId: string;
  error: Readonly<Error>;
}
export function messageResultError(params: messageResultErrorInputParams): messageResultError {
  return {
    _name: 'protocol.index.messageResultError',
    requestId: params['requestId'],
    error: params['error']
  };
}
export function encodeMessageResultError(__s: ISerializer, value: messageResultError) {
  __s.writeInt32(1847483811);
  /**
   * encoding param: requestId
   */
  const __pv0 = value['requestId'];
  __s.writeUnsignedLong(__pv0);
  /**
   * encoding param: error
   */
  const __pv1 = value['error'];
  encodeErrorTrait(__s,__pv1);
}
export function decodeMessageResultError(__d: IDeserializer): messageResultError | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1847483811) return null;
  let requestId: string;
  let error: Error;
  /**
   * decoding param: requestId
   */
  requestId = __d.readUnsignedLong();
  /**
   * decoding param: error
   */
  const tmp3 = decodeErrorTrait(__d);
  if(tmp3 === null) return null;
  error = tmp3;
  return {
    _name: 'protocol.index.messageResultError',
    requestId,
    error
  };
}
export interface messageResultError  {
  _name: 'protocol.index.messageResultError';
  requestId: string;
  error: Readonly<Error>;
}
export function defaultMessageResultError(params: Partial<messageResultErrorInputParams> = {}): messageResultError {
  return messageResultError({
    requestId: "0",
    error: defaultErrorTrait(),
    ...params
  });
}
export function compareMessageResultError(__a: messageResultError, __b: messageResultError): boolean {
  return (
    /**
     * compare parameter requestId
     */
    __a['requestId'] === __b['requestId'] &&
    /**
     * compare parameter error
     */
    compareErrorTrait(__a['error'],__b['error'])
  );
}
export function updateMessageResultError(value: messageResultError, changes: Partial<messageResultErrorInputParams>) {
  if(typeof changes['requestId'] !== 'undefined') {
    if(!(changes['requestId'] === value['requestId'])) {
      value = messageResultError({
        ...value,
        requestId: changes['requestId'],
      });
    }
  }
  if(typeof changes['error'] !== 'undefined') {
    if(!(compareErrorTrait8(changes['error'],value['error']))) {
      value = messageResultError({
        ...value,
        error: changes['error'],
      });
    }
  }
  return value;
}
export type ProtocolError = Readonly<protocolErrorExpectingBinaryMessage> | Readonly<protocolErrorDecodeMessageError>;
export function encodeProtocolErrorTrait(__s: ISerializer,value: ProtocolError) {
  switch(value._name) {
    case 'protocol.index.protocolErrorExpectingBinaryMessage':
      encodeProtocolErrorExpectingBinaryMessage(__s,value);
      break;
    case 'protocol.index.protocolErrorDecodeMessageError':
      encodeProtocolErrorDecodeMessageError(__s,value);
      break;
  }
}
export function decodeProtocolErrorTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: protocolErrorExpectingBinaryMessage | protocolErrorDecodeMessageError;
  switch(__id) {
    case 110694639: {
      const tmp = decodeProtocolErrorExpectingBinaryMessage(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1246371329: {
      const tmp = decodeProtocolErrorDecodeMessageError(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultProtocolErrorTrait() {
  return defaultProtocolErrorExpectingBinaryMessage();
}
export function compareProtocolErrorTrait(__a: ProtocolError, __b: ProtocolError) {
  switch(__a._name) {
    case 'protocol.index.protocolErrorExpectingBinaryMessage':
      if(__b._name !== "protocol.index.protocolErrorExpectingBinaryMessage") return false;
      return compareProtocolErrorExpectingBinaryMessage(__a,__b);
    case 'protocol.index.protocolErrorDecodeMessageError':
      if(__b._name !== "protocol.index.protocolErrorDecodeMessageError") return false;
      return compareProtocolErrorDecodeMessageError(__a,__b);
  }
}
export interface protocolErrorExpectingBinaryMessageInputParams {
}
export function protocolErrorExpectingBinaryMessage(_: protocolErrorExpectingBinaryMessageInputParams = {}): protocolErrorExpectingBinaryMessage {
  return {
    _name: 'protocol.index.protocolErrorExpectingBinaryMessage'
  };
}
export function encodeProtocolErrorExpectingBinaryMessage(__s: ISerializer, _: protocolErrorExpectingBinaryMessage) {
  __s.writeInt32(110694639);
}
export function decodeProtocolErrorExpectingBinaryMessage(__d: IDeserializer): protocolErrorExpectingBinaryMessage | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 110694639) return null;
  return {
    _name: 'protocol.index.protocolErrorExpectingBinaryMessage',
  };
}
export interface protocolErrorExpectingBinaryMessage  {
  _name: 'protocol.index.protocolErrorExpectingBinaryMessage';
}
export function defaultProtocolErrorExpectingBinaryMessage(params: Partial<protocolErrorExpectingBinaryMessageInputParams> = {}): protocolErrorExpectingBinaryMessage {
  return protocolErrorExpectingBinaryMessage({
    ...params
  });
}
export function compareProtocolErrorExpectingBinaryMessage(__a: protocolErrorExpectingBinaryMessage, __b: protocolErrorExpectingBinaryMessage): boolean {
  return true;
}
export function updateProtocolErrorExpectingBinaryMessage(value: protocolErrorExpectingBinaryMessage, _: Partial<protocolErrorExpectingBinaryMessageInputParams>) {
  return value;
}
export interface protocolErrorDecodeMessageErrorInputParams {
}
export function protocolErrorDecodeMessageError(_: protocolErrorDecodeMessageErrorInputParams = {}): protocolErrorDecodeMessageError {
  return {
    _name: 'protocol.index.protocolErrorDecodeMessageError'
  };
}
export function encodeProtocolErrorDecodeMessageError(__s: ISerializer, _: protocolErrorDecodeMessageError) {
  __s.writeInt32(-1246371329);
}
export function decodeProtocolErrorDecodeMessageError(__d: IDeserializer): protocolErrorDecodeMessageError | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1246371329) return null;
  return {
    _name: 'protocol.index.protocolErrorDecodeMessageError',
  };
}
export interface protocolErrorDecodeMessageError  {
  _name: 'protocol.index.protocolErrorDecodeMessageError';
}
export function defaultProtocolErrorDecodeMessageError(params: Partial<protocolErrorDecodeMessageErrorInputParams> = {}): protocolErrorDecodeMessageError {
  return protocolErrorDecodeMessageError({
    ...params
  });
}
export function compareProtocolErrorDecodeMessageError(__a: protocolErrorDecodeMessageError, __b: protocolErrorDecodeMessageError): boolean {
  return true;
}
export function updateProtocolErrorDecodeMessageError(value: protocolErrorDecodeMessageError, _: Partial<protocolErrorDecodeMessageErrorInputParams>) {
  return value;
}
export interface messageProtocolErrorInputParams {
  error: Readonly<ProtocolError>;
}
export function messageProtocolError(params: messageProtocolErrorInputParams): messageProtocolError {
  return {
    _name: 'protocol.index.messageProtocolError',
    error: params['error']
  };
}
export function encodeMessageProtocolError(__s: ISerializer, value: messageProtocolError) {
  __s.writeInt32(1131066298);
  /**
   * encoding param: error
   */
  const __pv0 = value['error'];
  encodeProtocolErrorTrait(__s,__pv0);
}
export function decodeMessageProtocolError(__d: IDeserializer): messageProtocolError | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1131066298) return null;
  let error: ProtocolError;
  /**
   * decoding param: error
   */
  const __tmp1 = decodeProtocolErrorTrait(__d);
  if(__tmp1 === null) return null;
  error = __tmp1;
  return {
    _name: 'protocol.index.messageProtocolError',
    error
  };
}
export interface messageProtocolError  {
  _name: 'protocol.index.messageProtocolError';
  error: Readonly<ProtocolError>;
}
export function defaultMessageProtocolError(params: Partial<messageProtocolErrorInputParams> = {}): messageProtocolError {
  return messageProtocolError({
    error: defaultProtocolErrorTrait(),
    ...params
  });
}
export function compareMessageProtocolError(__a: messageProtocolError, __b: messageProtocolError): boolean {
  return (
    /**
     * compare parameter error
     */
    compareProtocolErrorTrait(__a['error'],__b['error'])
  );
}
export function updateMessageProtocolError(value: messageProtocolError, changes: Partial<messageProtocolErrorInputParams>) {
  if(typeof changes['error'] !== 'undefined') {
    if(!(compareProtocolErrorTrait(changes['error'],value['error']))) {
      value = messageProtocolError({
        ...value,
        error: changes['error'],
      });
    }
  }
  return value;
}
export interface acknowledgeMessageInputParams {
  sessionId: string;
  messageId: string;
}
export function acknowledgeMessage(params: acknowledgeMessageInputParams): acknowledgeMessage {
  return {
    _name: 'protocol.index.acknowledgeMessage',
    sessionId: params['sessionId'],
    messageId: params['messageId']
  };
}
export function encodeAcknowledgeMessage(__s: ISerializer, value: acknowledgeMessage) {
  __s.writeInt32(576660059);
  /**
   * encoding param: sessionId
   */
  const __pv0 = value['sessionId'];
  __s.writeUnsignedLong(__pv0);
  /**
   * encoding param: messageId
   */
  const __pv1 = value['messageId'];
  __s.writeUnsignedLong(__pv1);
}
export function decodeAcknowledgeMessage(__d: IDeserializer): acknowledgeMessage | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 576660059) return null;
  let sessionId: string;
  let messageId: string;
  /**
   * decoding param: sessionId
   */
  sessionId = __d.readUnsignedLong();
  /**
   * decoding param: messageId
   */
  messageId = __d.readUnsignedLong();
  return {
    _name: 'protocol.index.acknowledgeMessage',
    sessionId,
    messageId
  };
}
export interface acknowledgeMessage  {
  _name: 'protocol.index.acknowledgeMessage';
  sessionId: string;
  messageId: string;
}
export function defaultAcknowledgeMessage(params: Partial<acknowledgeMessageInputParams> = {}): acknowledgeMessage {
  return acknowledgeMessage({
    sessionId: "0",
    messageId: "0",
    ...params
  });
}
export function compareAcknowledgeMessage(__a: acknowledgeMessage, __b: acknowledgeMessage): boolean {
  return (
    /**
     * compare parameter sessionId
     */
    __a['sessionId'] === __b['sessionId'] &&
    /**
     * compare parameter messageId
     */
    __a['messageId'] === __b['messageId']
  );
}
export function updateAcknowledgeMessage(value: acknowledgeMessage, changes: Partial<acknowledgeMessageInputParams>) {
  if(typeof changes['sessionId'] !== 'undefined') {
    if(!(changes['sessionId'] === value['sessionId'])) {
      value = acknowledgeMessage({
        ...value,
        sessionId: changes['sessionId'],
      });
    }
  }
  if(typeof changes['messageId'] !== 'undefined') {
    if(!(changes['messageId'] === value['messageId'])) {
      value = acknowledgeMessage({
        ...value,
        messageId: changes['messageId'],
      });
    }
  }
  return value;
}
