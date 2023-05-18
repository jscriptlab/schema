import {Void} from "./protocol/void";
import {Request} from "./protocol/Request";
import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
import {IRequest} from "./__types__";
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
export interface SendOfferInputParams {
  username: string;
  offer: Readonly<rtcSessionDescriptionOffer>;
}
export function SendOffer(params: SendOfferInputParams): SendOffer {
  return {
    _name: 'call.SendOffer',
    username: params['username'],
    offer: params['offer']
  };
}
export function encodeSendOffer(__s: ISerializer, value: SendOffer) {
  __s.writeInt32(419052098);
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
}
export function decodeSendOffer(__d: IDeserializer): SendOffer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 419052098) return null;
  let username: string;
  let offer: rtcSessionDescriptionOffer;
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
  return {
    _name: 'call.SendOffer',
    username,
    offer
  };
}
export interface SendOffer extends IRequest<Readonly<Void>> {
  _name: 'call.SendOffer';
  username: string;
  offer: Readonly<rtcSessionDescriptionOffer>;
}
export function defaultSendOffer(params: Partial<SendOfferInputParams> = {}): SendOffer {
  return SendOffer({
    username: "",
    offer: defaultRtcSessionDescriptionOffer(),
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
    compareRtcSessionDescriptionOffer(__a['offer'],__b['offer'])
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
  return value;
}
export interface SendAnswerInputParams {
  username: string;
  answer: Readonly<rtcSessionDescriptionAnswer>;
}
export function SendAnswer(params: SendAnswerInputParams): SendAnswer {
  return {
    _name: 'call.SendAnswer',
    username: params['username'],
    answer: params['answer']
  };
}
export function encodeSendAnswer(__s: ISerializer, value: SendAnswer) {
  __s.writeInt32(1883292546);
  /**
   * encoding param: username
   */
  const __pv0 = value['username'];
  __s.writeString(__pv0);
  /**
   * encoding param: answer
   */
  const __pv1 = value['answer'];
  encodeRtcSessionDescriptionAnswer(__s,__pv1);
}
export function decodeSendAnswer(__d: IDeserializer): SendAnswer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1883292546) return null;
  let username: string;
  let answer: rtcSessionDescriptionAnswer;
  /**
   * decoding param: username
   */
  username = __d.readString();
  /**
   * decoding param: answer
   */
  const __tmp2 = decodeRtcSessionDescriptionAnswer(__d);
  if(__tmp2 === null) return null;
  answer = __tmp2;
  return {
    _name: 'call.SendAnswer',
    username,
    answer
  };
}
export interface SendAnswer extends IRequest<Readonly<Void>> {
  _name: 'call.SendAnswer';
  username: string;
  answer: Readonly<rtcSessionDescriptionAnswer>;
}
export function defaultSendAnswer(params: Partial<SendAnswerInputParams> = {}): SendAnswer {
  return SendAnswer({
    username: "",
    answer: defaultRtcSessionDescriptionAnswer(),
    ...params
  });
}
export function compareSendAnswer(__a: SendAnswer, __b: SendAnswer): boolean {
  return (
    /**
     * compare parameter username
     */
    __a['username'] === __b['username'] &&
    /**
     * compare parameter answer
     */
    compareRtcSessionDescriptionAnswer(__a['answer'],__b['answer'])
  );
}
export function updateSendAnswer(value: SendAnswer, changes: Partial<SendAnswerInputParams>) {
  if(typeof changes['username'] !== 'undefined') {
    if(!(changes['username'] === value['username'])) {
      value = SendAnswer({
        ...value,
        username: changes['username'],
      });
    }
  }
  if(typeof changes['answer'] !== 'undefined') {
    if(!(compareRtcSessionDescriptionAnswer(changes['answer'],value['answer']))) {
      value = SendAnswer({
        ...value,
        answer: changes['answer'],
      });
    }
  }
  return value;
}