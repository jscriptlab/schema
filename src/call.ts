import {Void} from "./protocol/void";
import {Request} from "./protocol/Request";
import {Result} from "./protocol/Result";
import {objectId} from "./objectId";
import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
import {encodeObjectId} from "./objectId";
import {decodeObjectId} from "./objectId";
import {defaultObjectId} from "./objectId";
import {compareObjectId} from "./objectId";
import {compareObjectId as compareObjectId1} from "./objectId";
import {IRequest} from "./__types__";
import {encodeObjectId as encodeObjectId2} from "./objectId";
import {decodeObjectId as decodeObjectId3} from "./objectId";
import {defaultObjectId as defaultObjectId4} from "./objectId";
import {compareObjectId as compareObjectId5} from "./objectId";
import {compareObjectId as compareObjectId6} from "./objectId";
import {encodeObjectId as encodeObjectId7} from "./objectId";
import {decodeObjectId as decodeObjectId8} from "./objectId";
import {defaultObjectId as defaultObjectId9} from "./objectId";
import {compareObjectId as compareObjectId10} from "./objectId";
import {compareObjectId as compareObjectId11} from "./objectId";
import {encodeObjectId as encodeObjectId12} from "./objectId";
import {decodeObjectId as decodeObjectId13} from "./objectId";
import {defaultObjectId as defaultObjectId14} from "./objectId";
import {compareObjectId as compareObjectId15} from "./objectId";
import {compareObjectId as compareObjectId16} from "./objectId";
export type RTCSessionDescription = Readonly<rtcSessionDescriptionOffer> | Readonly<rtcSessionDescriptionAnswer> | Readonly<rtcSessionDescriptionPreAnswer>;
export function encodeRTCSessionDescriptionTrait(__s: ISerializer,value: RTCSessionDescription) {
  switch(value._name) {
    case 'call.rtcSessionDescriptionOffer':
      encodeRtcSessionDescriptionOffer(__s,value);
      break;
    case 'call.rtcSessionDescriptionAnswer':
      encodeRtcSessionDescriptionAnswer(__s,value);
      break;
    case 'call.rtcSessionDescriptionPreAnswer':
      encodeRtcSessionDescriptionPreAnswer(__s,value);
      break;
  }
}
export function decodeRTCSessionDescriptionTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: rtcSessionDescriptionOffer | rtcSessionDescriptionAnswer | rtcSessionDescriptionPreAnswer;
  switch(__id) {
    case -102040911: {
      const tmp = decodeRtcSessionDescriptionOffer(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -839038639: {
      const tmp = decodeRtcSessionDescriptionAnswer(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1963179334: {
      const tmp = decodeRtcSessionDescriptionPreAnswer(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultRTCSessionDescriptionTrait() {
  return defaultRtcSessionDescriptionOffer();
}
export function compareRTCSessionDescriptionTrait(__a: RTCSessionDescription, __b: RTCSessionDescription) {
  switch(__a._name) {
    case 'call.rtcSessionDescriptionOffer':
      if(__b._name !== "call.rtcSessionDescriptionOffer") return false;
      return compareRtcSessionDescriptionOffer(__a,__b);
    case 'call.rtcSessionDescriptionAnswer':
      if(__b._name !== "call.rtcSessionDescriptionAnswer") return false;
      return compareRtcSessionDescriptionAnswer(__a,__b);
    case 'call.rtcSessionDescriptionPreAnswer':
      if(__b._name !== "call.rtcSessionDescriptionPreAnswer") return false;
      return compareRtcSessionDescriptionPreAnswer(__a,__b);
  }
}
export interface rtcSessionDescriptionOfferInputParams {
  sdp: string | null;
}
export function rtcSessionDescriptionOffer(params: rtcSessionDescriptionOfferInputParams): rtcSessionDescriptionOffer {
  return {
    _name: 'call.rtcSessionDescriptionOffer',
    sdp: params['sdp']
  };
}
export function encodeRtcSessionDescriptionOffer(__s: ISerializer, value: rtcSessionDescriptionOffer) {
  __s.writeInt32(-102040911);
  /**
   * encoding param: sdp
   */
  const __pv0 = value['sdp'];
  if(__pv0 === null) {
    __s.writeUint8(0);
  } else {
    __s.writeUint8(1);
    __s.writeString(__pv0);
  }
}
export function decodeRtcSessionDescriptionOffer(__d: IDeserializer): rtcSessionDescriptionOffer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -102040911) return null;
  let sdp: string | null;
  /**
   * decoding param: sdp
   */
  if(__d.readUint8() === 1) {
    sdp = __d.readString();
  } else {
    sdp = null;
  }
  return {
    _name: 'call.rtcSessionDescriptionOffer',
    sdp
  };
}
export interface rtcSessionDescriptionOffer  {
  _name: 'call.rtcSessionDescriptionOffer';
  sdp: string | null;
}
export function defaultRtcSessionDescriptionOffer(params: Partial<rtcSessionDescriptionOfferInputParams> = {}): rtcSessionDescriptionOffer {
  return rtcSessionDescriptionOffer({
    sdp: null,
    ...params
  });
}
export function compareRtcSessionDescriptionOffer(__a: rtcSessionDescriptionOffer, __b: rtcSessionDescriptionOffer): boolean {
  return (
    /**
     * compare parameter sdp
     */
    ((__dp01, __dp02) => __dp01 !== null && __dp02 !== null ? __dp01 === __dp02 : __dp01 === __dp02)(__a['sdp'],__b['sdp'])
  );
}
export function updateRtcSessionDescriptionOffer(value: rtcSessionDescriptionOffer, changes: Partial<rtcSessionDescriptionOfferInputParams>) {
  if(typeof changes['sdp'] !== 'undefined') {
    if(!(((__dp11, __dp12) => __dp11 !== null && __dp12 !== null ? __dp11 === __dp12 : __dp11 === __dp12)(changes['sdp'],value['sdp']))) {
      value = rtcSessionDescriptionOffer({
        ...value,
        sdp: changes['sdp'],
      });
    }
  }
  return value;
}
export interface rtcSessionDescriptionAnswerInputParams {
  sdp: string | null;
}
export function rtcSessionDescriptionAnswer(params: rtcSessionDescriptionAnswerInputParams): rtcSessionDescriptionAnswer {
  return {
    _name: 'call.rtcSessionDescriptionAnswer',
    sdp: params['sdp']
  };
}
export function encodeRtcSessionDescriptionAnswer(__s: ISerializer, value: rtcSessionDescriptionAnswer) {
  __s.writeInt32(-839038639);
  /**
   * encoding param: sdp
   */
  const __pv0 = value['sdp'];
  if(__pv0 === null) {
    __s.writeUint8(0);
  } else {
    __s.writeUint8(1);
    __s.writeString(__pv0);
  }
}
export function decodeRtcSessionDescriptionAnswer(__d: IDeserializer): rtcSessionDescriptionAnswer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -839038639) return null;
  let sdp: string | null;
  /**
   * decoding param: sdp
   */
  if(__d.readUint8() === 1) {
    sdp = __d.readString();
  } else {
    sdp = null;
  }
  return {
    _name: 'call.rtcSessionDescriptionAnswer',
    sdp
  };
}
export interface rtcSessionDescriptionAnswer  {
  _name: 'call.rtcSessionDescriptionAnswer';
  sdp: string | null;
}
export function defaultRtcSessionDescriptionAnswer(params: Partial<rtcSessionDescriptionAnswerInputParams> = {}): rtcSessionDescriptionAnswer {
  return rtcSessionDescriptionAnswer({
    sdp: null,
    ...params
  });
}
export function compareRtcSessionDescriptionAnswer(__a: rtcSessionDescriptionAnswer, __b: rtcSessionDescriptionAnswer): boolean {
  return (
    /**
     * compare parameter sdp
     */
    ((__dp01, __dp02) => __dp01 !== null && __dp02 !== null ? __dp01 === __dp02 : __dp01 === __dp02)(__a['sdp'],__b['sdp'])
  );
}
export function updateRtcSessionDescriptionAnswer(value: rtcSessionDescriptionAnswer, changes: Partial<rtcSessionDescriptionAnswerInputParams>) {
  if(typeof changes['sdp'] !== 'undefined') {
    if(!(((__dp11, __dp12) => __dp11 !== null && __dp12 !== null ? __dp11 === __dp12 : __dp11 === __dp12)(changes['sdp'],value['sdp']))) {
      value = rtcSessionDescriptionAnswer({
        ...value,
        sdp: changes['sdp'],
      });
    }
  }
  return value;
}
export interface rtcSessionDescriptionPreAnswerInputParams {
  sdp: string | null;
}
export function rtcSessionDescriptionPreAnswer(params: rtcSessionDescriptionPreAnswerInputParams): rtcSessionDescriptionPreAnswer {
  return {
    _name: 'call.rtcSessionDescriptionPreAnswer',
    sdp: params['sdp']
  };
}
export function encodeRtcSessionDescriptionPreAnswer(__s: ISerializer, value: rtcSessionDescriptionPreAnswer) {
  __s.writeInt32(-1963179334);
  /**
   * encoding param: sdp
   */
  const __pv0 = value['sdp'];
  if(__pv0 === null) {
    __s.writeUint8(0);
  } else {
    __s.writeUint8(1);
    __s.writeString(__pv0);
  }
}
export function decodeRtcSessionDescriptionPreAnswer(__d: IDeserializer): rtcSessionDescriptionPreAnswer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1963179334) return null;
  let sdp: string | null;
  /**
   * decoding param: sdp
   */
  if(__d.readUint8() === 1) {
    sdp = __d.readString();
  } else {
    sdp = null;
  }
  return {
    _name: 'call.rtcSessionDescriptionPreAnswer',
    sdp
  };
}
export interface rtcSessionDescriptionPreAnswer  {
  _name: 'call.rtcSessionDescriptionPreAnswer';
  sdp: string | null;
}
export function defaultRtcSessionDescriptionPreAnswer(params: Partial<rtcSessionDescriptionPreAnswerInputParams> = {}): rtcSessionDescriptionPreAnswer {
  return rtcSessionDescriptionPreAnswer({
    sdp: null,
    ...params
  });
}
export function compareRtcSessionDescriptionPreAnswer(__a: rtcSessionDescriptionPreAnswer, __b: rtcSessionDescriptionPreAnswer): boolean {
  return (
    /**
     * compare parameter sdp
     */
    ((__dp01, __dp02) => __dp01 !== null && __dp02 !== null ? __dp01 === __dp02 : __dp01 === __dp02)(__a['sdp'],__b['sdp'])
  );
}
export function updateRtcSessionDescriptionPreAnswer(value: rtcSessionDescriptionPreAnswer, changes: Partial<rtcSessionDescriptionPreAnswerInputParams>) {
  if(typeof changes['sdp'] !== 'undefined') {
    if(!(((__dp11, __dp12) => __dp11 !== null && __dp12 !== null ? __dp11 === __dp12 : __dp11 === __dp12)(changes['sdp'],value['sdp']))) {
      value = rtcSessionDescriptionPreAnswer({
        ...value,
        sdp: changes['sdp'],
      });
    }
  }
  return value;
}
export interface sendOfferResultInputParams {
  callId: Readonly<objectId>;
}
export function sendOfferResult(params: sendOfferResultInputParams): sendOfferResult {
  return {
    _name: 'call.sendOfferResult',
    callId: params['callId']
  };
}
export function encodeSendOfferResult(__s: ISerializer, value: sendOfferResult) {
  __s.writeInt32(-1186756737);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId(__s,__pv0);
}
export function decodeSendOfferResult(__d: IDeserializer): sendOfferResult | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1186756737) return null;
  let callId: objectId;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  return {
    _name: 'call.sendOfferResult',
    callId
  };
}
export interface sendOfferResult  {
  _name: 'call.sendOfferResult';
  callId: Readonly<objectId>;
}
export function defaultSendOfferResult(params: Partial<sendOfferResultInputParams> = {}): sendOfferResult {
  return sendOfferResult({
    callId: defaultObjectId(),
    ...params
  });
}
export function compareSendOfferResult(__a: sendOfferResult, __b: sendOfferResult): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId(__a['callId'],__b['callId'])
  );
}
export function updateSendOfferResult(value: sendOfferResult, changes: Partial<sendOfferResultInputParams>) {
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId1(changes['callId'],value['callId']))) {
      value = sendOfferResult({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  return value;
}
export interface SendOfferInputParams {
  username: string;
  offer: Readonly<rtcSessionDescriptionOffer>;
  videoEnabled: boolean;
}
export function SendOffer(params: SendOfferInputParams): SendOffer {
  return {
    _name: 'call.SendOffer',
    username: params['username'],
    offer: params['offer'],
    videoEnabled: params['videoEnabled']
  };
}
export function encodeSendOffer(__s: ISerializer, value: SendOffer) {
  __s.writeInt32(-1481518836);
  /**
   * encoding param: username
   */
  const __pv0 = value['username'];
  __s.writeString(__pv0);
  /**
   * encoding param: offer
   */
  const __pv1 = value['offer'];
  encodeRtcSessionDescriptionOffer(__s,__pv1);
  /**
   * encoding param: videoEnabled
   */
  const __pv2 = value['videoEnabled'];
  __s.writeUint8(__pv2 === true ? 1 : 0);
}
export function decodeSendOffer(__d: IDeserializer): SendOffer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1481518836) return null;
  let username: string;
  let offer: rtcSessionDescriptionOffer;
  let videoEnabled: boolean;
  /**
   * decoding param: username
   */
  username = __d.readString();
  /**
   * decoding param: offer
   */
  const __tmp2 = decodeRtcSessionDescriptionOffer(__d);
  if(__tmp2 === null) return null;
  offer = __tmp2;
  /**
   * decoding param: videoEnabled
   */
  videoEnabled = __d.readUint8() === 1;
  return {
    _name: 'call.SendOffer',
    username,
    offer,
    videoEnabled
  };
}
export interface SendOffer extends IRequest<Readonly<sendOfferResult>> {
  _name: 'call.SendOffer';
  username: string;
  offer: Readonly<rtcSessionDescriptionOffer>;
  videoEnabled: boolean;
}
export function defaultSendOffer(params: Partial<SendOfferInputParams> = {}): SendOffer {
  return SendOffer({
    username: "",
    offer: defaultRtcSessionDescriptionOffer(),
    videoEnabled: false,
    ...params
  });
}
export function compareSendOffer(__a: SendOffer, __b: SendOffer): boolean {
  return (
    /**
     * compare parameter username
     */
    __a['username'] === __b['username'] &&
    /**
     * compare parameter offer
     */
    compareRtcSessionDescriptionOffer(__a['offer'],__b['offer']) &&
    /**
     * compare parameter videoEnabled
     */
    __a['videoEnabled'] === __b['videoEnabled']
  );
}
export function updateSendOffer(value: SendOffer, changes: Partial<SendOfferInputParams>) {
  if(typeof changes['username'] !== 'undefined') {
    if(!(changes['username'] === value['username'])) {
      value = SendOffer({
        ...value,
        username: changes['username'],
      });
    }
  }
  if(typeof changes['offer'] !== 'undefined') {
    if(!(compareRtcSessionDescriptionOffer(changes['offer'],value['offer']))) {
      value = SendOffer({
        ...value,
        offer: changes['offer'],
      });
    }
  }
  if(typeof changes['videoEnabled'] !== 'undefined') {
    if(!(changes['videoEnabled'] === value['videoEnabled'])) {
      value = SendOffer({
        ...value,
        videoEnabled: changes['videoEnabled'],
      });
    }
  }
  return value;
}
export interface SendRTCIceCandidateInputParams {
  callId: Readonly<objectId>;
  candidate: string;
}
export function SendRTCIceCandidate(params: SendRTCIceCandidateInputParams): SendRTCIceCandidate {
  return {
    _name: 'call.SendRTCIceCandidate',
    callId: params['callId'],
    candidate: params['candidate']
  };
}
export function encodeSendRTCIceCandidate(__s: ISerializer, value: SendRTCIceCandidate) {
  __s.writeInt32(-1968577916);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId2(__s,__pv0);
  /**
   * encoding param: candidate
   */
  const __pv1 = value['candidate'];
  __s.writeString(__pv1);
}
export function decodeSendRTCIceCandidate(__d: IDeserializer): SendRTCIceCandidate | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1968577916) return null;
  let callId: objectId;
  let candidate: string;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId3(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  /**
   * decoding param: candidate
   */
  candidate = __d.readString();
  return {
    _name: 'call.SendRTCIceCandidate',
    callId,
    candidate
  };
}
export interface SendRTCIceCandidate extends IRequest<Readonly<Void>> {
  _name: 'call.SendRTCIceCandidate';
  callId: Readonly<objectId>;
  candidate: string;
}
export function defaultSendRTCIceCandidate(params: Partial<SendRTCIceCandidateInputParams> = {}): SendRTCIceCandidate {
  return SendRTCIceCandidate({
    callId: defaultObjectId(),
    candidate: "",
    ...params
  });
}
export function compareSendRTCIceCandidate(__a: SendRTCIceCandidate, __b: SendRTCIceCandidate): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId5(__a['callId'],__b['callId']) &&
    /**
     * compare parameter candidate
     */
    __a['candidate'] === __b['candidate']
  );
}
export function updateSendRTCIceCandidate(value: SendRTCIceCandidate, changes: Partial<SendRTCIceCandidateInputParams>) {
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId6(changes['callId'],value['callId']))) {
      value = SendRTCIceCandidate({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  if(typeof changes['candidate'] !== 'undefined') {
    if(!(changes['candidate'] === value['candidate'])) {
      value = SendRTCIceCandidate({
        ...value,
        candidate: changes['candidate'],
      });
    }
  }
  return value;
}
export type SendAnswerInput = Readonly<sendAnswerInputAccept> | Readonly<sendAnswerInputDecline>;
export function encodeSendAnswerInputTrait(__s: ISerializer,value: SendAnswerInput) {
  switch(value._name) {
    case 'call.sendAnswerInputAccept':
      encodeSendAnswerInputAccept(__s,value);
      break;
    case 'call.sendAnswerInputDecline':
      encodeSendAnswerInputDecline(__s,value);
      break;
  }
}
export function decodeSendAnswerInputTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: sendAnswerInputAccept | sendAnswerInputDecline;
  switch(__id) {
    case 705687722: {
      const tmp = decodeSendAnswerInputAccept(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1055452011: {
      const tmp = decodeSendAnswerInputDecline(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultSendAnswerInputTrait() {
  return defaultSendAnswerInputAccept();
}
export function compareSendAnswerInputTrait(__a: SendAnswerInput, __b: SendAnswerInput) {
  switch(__a._name) {
    case 'call.sendAnswerInputAccept':
      if(__b._name !== "call.sendAnswerInputAccept") return false;
      return compareSendAnswerInputAccept(__a,__b);
    case 'call.sendAnswerInputDecline':
      if(__b._name !== "call.sendAnswerInputDecline") return false;
      return compareSendAnswerInputDecline(__a,__b);
  }
}
export interface sendAnswerInputAcceptInputParams {
  description: Readonly<rtcSessionDescriptionAnswer>;
  videoEnabled: boolean;
}
export function sendAnswerInputAccept(params: sendAnswerInputAcceptInputParams): sendAnswerInputAccept {
  return {
    _name: 'call.sendAnswerInputAccept',
    description: params['description'],
    videoEnabled: params['videoEnabled']
  };
}
export function encodeSendAnswerInputAccept(__s: ISerializer, value: sendAnswerInputAccept) {
  __s.writeInt32(705687722);
  /**
   * encoding param: description
   */
  const __pv0 = value['description'];
  encodeRtcSessionDescriptionAnswer(__s,__pv0);
  /**
   * encoding param: videoEnabled
   */
  const __pv1 = value['videoEnabled'];
  __s.writeUint8(__pv1 === true ? 1 : 0);
}
export function decodeSendAnswerInputAccept(__d: IDeserializer): sendAnswerInputAccept | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 705687722) return null;
  let description: rtcSessionDescriptionAnswer;
  let videoEnabled: boolean;
  /**
   * decoding param: description
   */
  const __tmp1 = decodeRtcSessionDescriptionAnswer(__d);
  if(__tmp1 === null) return null;
  description = __tmp1;
  /**
   * decoding param: videoEnabled
   */
  videoEnabled = __d.readUint8() === 1;
  return {
    _name: 'call.sendAnswerInputAccept',
    description,
    videoEnabled
  };
}
export interface sendAnswerInputAccept  {
  _name: 'call.sendAnswerInputAccept';
  description: Readonly<rtcSessionDescriptionAnswer>;
  videoEnabled: boolean;
}
export function defaultSendAnswerInputAccept(params: Partial<sendAnswerInputAcceptInputParams> = {}): sendAnswerInputAccept {
  return sendAnswerInputAccept({
    description: defaultRtcSessionDescriptionAnswer(),
    videoEnabled: false,
    ...params
  });
}
export function compareSendAnswerInputAccept(__a: sendAnswerInputAccept, __b: sendAnswerInputAccept): boolean {
  return (
    /**
     * compare parameter description
     */
    compareRtcSessionDescriptionAnswer(__a['description'],__b['description']) &&
    /**
     * compare parameter videoEnabled
     */
    __a['videoEnabled'] === __b['videoEnabled']
  );
}
export function updateSendAnswerInputAccept(value: sendAnswerInputAccept, changes: Partial<sendAnswerInputAcceptInputParams>) {
  if(typeof changes['description'] !== 'undefined') {
    if(!(compareRtcSessionDescriptionAnswer(changes['description'],value['description']))) {
      value = sendAnswerInputAccept({
        ...value,
        description: changes['description'],
      });
    }
  }
  if(typeof changes['videoEnabled'] !== 'undefined') {
    if(!(changes['videoEnabled'] === value['videoEnabled'])) {
      value = sendAnswerInputAccept({
        ...value,
        videoEnabled: changes['videoEnabled'],
      });
    }
  }
  return value;
}
export interface sendAnswerInputDeclineInputParams {
}
export function sendAnswerInputDecline(_: sendAnswerInputDeclineInputParams = {}): sendAnswerInputDecline {
  return {
    _name: 'call.sendAnswerInputDecline'
  };
}
export function encodeSendAnswerInputDecline(__s: ISerializer, _: sendAnswerInputDecline) {
  __s.writeInt32(-1055452011);
}
export function decodeSendAnswerInputDecline(__d: IDeserializer): sendAnswerInputDecline | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1055452011) return null;
  return {
    _name: 'call.sendAnswerInputDecline',
  };
}
export interface sendAnswerInputDecline  {
  _name: 'call.sendAnswerInputDecline';
}
export function defaultSendAnswerInputDecline(params: Partial<sendAnswerInputDeclineInputParams> = {}): sendAnswerInputDecline {
  return sendAnswerInputDecline({
    ...params
  });
}
export function compareSendAnswerInputDecline(__a: sendAnswerInputDecline, __b: sendAnswerInputDecline): boolean {
  return true;
}
export function updateSendAnswerInputDecline(value: sendAnswerInputDecline, _: Partial<sendAnswerInputDeclineInputParams>) {
  return value;
}
export interface SendAnswerInputParams {
  callId: Readonly<objectId>;
  value: Readonly<SendAnswerInput>;
}
export function SendAnswer(params: SendAnswerInputParams): SendAnswer {
  return {
    _name: 'call.SendAnswer',
    callId: params['callId'],
    value: params['value']
  };
}
export function encodeSendAnswer(__s: ISerializer, value: SendAnswer) {
  __s.writeInt32(-1458394690);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId7(__s,__pv0);
  /**
   * encoding param: value
   */
  const __pv1 = value['value'];
  encodeSendAnswerInputTrait(__s,__pv1);
}
export function decodeSendAnswer(__d: IDeserializer): SendAnswer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1458394690) return null;
  let callId: objectId;
  let value: SendAnswerInput;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId8(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  /**
   * decoding param: value
   */
  const __tmp3 = decodeSendAnswerInputTrait(__d);
  if(__tmp3 === null) return null;
  value = __tmp3;
  return {
    _name: 'call.SendAnswer',
    callId,
    value
  };
}
export interface SendAnswer extends IRequest<Readonly<Void>> {
  _name: 'call.SendAnswer';
  callId: Readonly<objectId>;
  value: Readonly<SendAnswerInput>;
}
export function defaultSendAnswer(params: Partial<SendAnswerInputParams> = {}): SendAnswer {
  return SendAnswer({
    callId: defaultObjectId(),
    value: defaultSendAnswerInputTrait(),
    ...params
  });
}
export function compareSendAnswer(__a: SendAnswer, __b: SendAnswer): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId10(__a['callId'],__b['callId']) &&
    /**
     * compare parameter value
     */
    compareSendAnswerInputTrait(__a['value'],__b['value'])
  );
}
export function updateSendAnswer(value: SendAnswer, changes: Partial<SendAnswerInputParams>) {
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId11(changes['callId'],value['callId']))) {
      value = SendAnswer({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  if(typeof changes['value'] !== 'undefined') {
    if(!(compareSendAnswerInputTrait(changes['value'],value['value']))) {
      value = SendAnswer({
        ...value,
        value: changes['value'],
      });
    }
  }
  return value;
}
export interface SetConnectedStateInputParams {
  callId: Readonly<objectId>;
  connected: boolean;
}
export function SetConnectedState(params: SetConnectedStateInputParams): SetConnectedState {
  return {
    _name: 'call.SetConnectedState',
    callId: params['callId'],
    connected: params['connected']
  };
}
export function encodeSetConnectedState(__s: ISerializer, value: SetConnectedState) {
  __s.writeInt32(904655994);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId12(__s,__pv0);
  /**
   * encoding param: connected
   */
  const __pv1 = value['connected'];
  __s.writeUint8(__pv1 === true ? 1 : 0);
}
export function decodeSetConnectedState(__d: IDeserializer): SetConnectedState | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 904655994) return null;
  let callId: objectId;
  let connected: boolean;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId13(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  /**
   * decoding param: connected
   */
  connected = __d.readUint8() === 1;
  return {
    _name: 'call.SetConnectedState',
    callId,
    connected
  };
}
export interface SetConnectedState extends IRequest<Readonly<Void>> {
  _name: 'call.SetConnectedState';
  callId: Readonly<objectId>;
  connected: boolean;
}
export function defaultSetConnectedState(params: Partial<SetConnectedStateInputParams> = {}): SetConnectedState {
  return SetConnectedState({
    callId: defaultObjectId(),
    connected: false,
    ...params
  });
}
export function compareSetConnectedState(__a: SetConnectedState, __b: SetConnectedState): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId15(__a['callId'],__b['callId']) &&
    /**
     * compare parameter connected
     */
    __a['connected'] === __b['connected']
  );
}
export function updateSetConnectedState(value: SetConnectedState, changes: Partial<SetConnectedStateInputParams>) {
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId16(changes['callId'],value['callId']))) {
      value = SetConnectedState({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  if(typeof changes['connected'] !== 'undefined') {
    if(!(changes['connected'] === value['connected'])) {
      value = SetConnectedState({
        ...value,
        connected: changes['connected'],
      });
    }
  }
  return value;
}
