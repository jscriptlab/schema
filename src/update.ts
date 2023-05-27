import {rtcSessionDescriptionOffer} from "./call";
import {rtcSessionDescriptionAnswer} from "./call";
import {ServerMessage} from "./protocol/index";
import {objectId} from "./objectId";
import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
import {encodeObjectId} from "./objectId";
import {encodeRtcSessionDescriptionOffer} from "./call";
import {decodeObjectId} from "./objectId";
import {decodeRtcSessionDescriptionOffer} from "./call";
import {defaultObjectId} from "./objectId";
import {defaultRtcSessionDescriptionOffer} from "./call";
import {compareObjectId} from "./objectId";
import {compareRtcSessionDescriptionOffer} from "./call";
import {compareObjectId as compareObjectId1} from "./objectId";
import {compareRtcSessionDescriptionOffer as compareRtcSessionDescriptionOffer2} from "./call";
import {encodeObjectId as encodeObjectId3} from "./objectId";
import {decodeObjectId as decodeObjectId4} from "./objectId";
import {defaultObjectId as defaultObjectId5} from "./objectId";
import {compareObjectId as compareObjectId6} from "./objectId";
import {compareObjectId as compareObjectId7} from "./objectId";
import {encodeObjectId as encodeObjectId8} from "./objectId";
import {encodeRtcSessionDescriptionAnswer} from "./call";
import {decodeObjectId as decodeObjectId9} from "./objectId";
import {decodeRtcSessionDescriptionAnswer} from "./call";
import {defaultObjectId as defaultObjectId10} from "./objectId";
import {defaultRtcSessionDescriptionAnswer} from "./call";
import {compareObjectId as compareObjectId11} from "./objectId";
import {compareRtcSessionDescriptionAnswer} from "./call";
import {compareObjectId as compareObjectId12} from "./objectId";
import {compareRtcSessionDescriptionAnswer as compareRtcSessionDescriptionAnswer13} from "./call";
import {encodeObjectId as encodeObjectId14} from "./objectId";
import {decodeObjectId as decodeObjectId15} from "./objectId";
import {defaultObjectId as defaultObjectId16} from "./objectId";
import {compareObjectId as compareObjectId17} from "./objectId";
import {compareObjectId as compareObjectId18} from "./objectId";
import {encodeObjectId as encodeObjectId19} from "./objectId";
import {decodeObjectId as decodeObjectId20} from "./objectId";
import {defaultObjectId as defaultObjectId21} from "./objectId";
import {compareObjectId as compareObjectId22} from "./objectId";
import {compareObjectId as compareObjectId23} from "./objectId";
import {encodeObjectId as encodeObjectId24} from "./objectId";
import {decodeObjectId as decodeObjectId25} from "./objectId";
import {defaultObjectId as defaultObjectId26} from "./objectId";
import {compareObjectId as compareObjectId27} from "./objectId";
import {compareObjectId as compareObjectId28} from "./objectId";
export type Update = Readonly<updateCallOffer> | Readonly<updateCallRTCIceCandidate> | Readonly<updateCallAnswer> | Readonly<updateCallDrop> | Readonly<updateCallStarted> | Readonly<updateCallVideoEnabledStateChange>;
export function encodeUpdateTrait(__s: ISerializer,value: Update) {
  switch(value._name) {
    case 'update.updateCallOffer':
      encodeUpdateCallOffer(__s,value);
      break;
    case 'update.updateCallRTCIceCandidate':
      encodeUpdateCallRTCIceCandidate(__s,value);
      break;
    case 'update.updateCallAnswer':
      encodeUpdateCallAnswer(__s,value);
      break;
    case 'update.updateCallDrop':
      encodeUpdateCallDrop(__s,value);
      break;
    case 'update.updateCallStarted':
      encodeUpdateCallStarted(__s,value);
      break;
    case 'update.updateCallVideoEnabledStateChange':
      encodeUpdateCallVideoEnabledStateChange(__s,value);
      break;
  }
}
export function decodeUpdateTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: updateCallOffer | updateCallRTCIceCandidate | updateCallAnswer | updateCallDrop | updateCallStarted | updateCallVideoEnabledStateChange;
  switch(__id) {
    case -209857133: {
      const tmp = decodeUpdateCallOffer(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -456869484: {
      const tmp = decodeUpdateCallRTCIceCandidate(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -2109049674: {
      const tmp = decodeUpdateCallAnswer(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 1912667881: {
      const tmp = decodeUpdateCallDrop(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -243424417: {
      const tmp = decodeUpdateCallStarted(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 545077796: {
      const tmp = decodeUpdateCallVideoEnabledStateChange(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultUpdateTrait() {
  return defaultUpdateCallOffer();
}
export function compareUpdateTrait(__a: Update, __b: Update) {
  switch(__a._name) {
    case 'update.updateCallOffer':
      if(__b._name !== "update.updateCallOffer") return false;
      return compareUpdateCallOffer(__a,__b);
    case 'update.updateCallRTCIceCandidate':
      if(__b._name !== "update.updateCallRTCIceCandidate") return false;
      return compareUpdateCallRTCIceCandidate(__a,__b);
    case 'update.updateCallAnswer':
      if(__b._name !== "update.updateCallAnswer") return false;
      return compareUpdateCallAnswer(__a,__b);
    case 'update.updateCallDrop':
      if(__b._name !== "update.updateCallDrop") return false;
      return compareUpdateCallDrop(__a,__b);
    case 'update.updateCallStarted':
      if(__b._name !== "update.updateCallStarted") return false;
      return compareUpdateCallStarted(__a,__b);
    case 'update.updateCallVideoEnabledStateChange':
      if(__b._name !== "update.updateCallVideoEnabledStateChange") return false;
      return compareUpdateCallVideoEnabledStateChange(__a,__b);
  }
}
export interface updateCallOfferInputParams {
  username: string;
  callId: Readonly<objectId>;
  offer: Readonly<rtcSessionDescriptionOffer>;
  videoEnabled: boolean;
}
export function updateCallOffer(params: updateCallOfferInputParams): updateCallOffer {
  return {
    _name: 'update.updateCallOffer',
    username: params['username'],
    callId: params['callId'],
    offer: params['offer'],
    videoEnabled: params['videoEnabled']
  };
}
export function encodeUpdateCallOffer(__s: ISerializer, value: updateCallOffer) {
  __s.writeInt32(-209857133);
  /**
   * encoding param: username
   */
  const __pv0 = value['username'];
  __s.writeString(__pv0);
  /**
   * encoding param: callId
   */
  const __pv1 = value['callId'];
  encodeObjectId(__s,__pv1);
  /**
   * encoding param: offer
   */
  const __pv2 = value['offer'];
  encodeRtcSessionDescriptionOffer(__s,__pv2);
  /**
   * encoding param: videoEnabled
   */
  const __pv3 = value['videoEnabled'];
  __s.writeUint8(__pv3 === true ? 1 : 0);
}
export function decodeUpdateCallOffer(__d: IDeserializer): updateCallOffer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -209857133) return null;
  let username: string;
  let callId: objectId;
  let offer: rtcSessionDescriptionOffer;
  let videoEnabled: boolean;
  /**
   * decoding param: username
   */
  username = __d.readString();
  /**
   * decoding param: callId
   */
  const tmp3 = decodeObjectId(__d);
  if(tmp3 === null) return null;
  callId = tmp3;
  /**
   * decoding param: offer
   */
  const tmp5 = decodeRtcSessionDescriptionOffer(__d);
  if(tmp5 === null) return null;
  offer = tmp5;
  /**
   * decoding param: videoEnabled
   */
  videoEnabled = __d.readUint8() === 1;
  return {
    _name: 'update.updateCallOffer',
    username,
    callId,
    offer,
    videoEnabled
  };
}
export interface updateCallOffer  {
  _name: 'update.updateCallOffer';
  username: string;
  callId: Readonly<objectId>;
  offer: Readonly<rtcSessionDescriptionOffer>;
  videoEnabled: boolean;
}
export function defaultUpdateCallOffer(params: Partial<updateCallOfferInputParams> = {}): updateCallOffer {
  return updateCallOffer({
    username: "",
    callId: defaultObjectId(),
    offer: defaultRtcSessionDescriptionOffer(),
    videoEnabled: false,
    ...params
  });
}
export function compareUpdateCallOffer(__a: updateCallOffer, __b: updateCallOffer): boolean {
  return (
    /**
     * compare parameter username
     */
    __a['username'] === __b['username'] &&
    /**
     * compare parameter callId
     */
    compareObjectId(__a['callId'],__b['callId']) &&
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
export function updateUpdateCallOffer(value: updateCallOffer, changes: Partial<updateCallOfferInputParams>) {
  if(typeof changes['username'] !== 'undefined') {
    if(!(changes['username'] === value['username'])) {
      value = updateCallOffer({
        ...value,
        username: changes['username'],
      });
    }
  }
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId1(changes['callId'],value['callId']))) {
      value = updateCallOffer({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  if(typeof changes['offer'] !== 'undefined') {
    if(!(compareRtcSessionDescriptionOffer2(changes['offer'],value['offer']))) {
      value = updateCallOffer({
        ...value,
        offer: changes['offer'],
      });
    }
  }
  if(typeof changes['videoEnabled'] !== 'undefined') {
    if(!(changes['videoEnabled'] === value['videoEnabled'])) {
      value = updateCallOffer({
        ...value,
        videoEnabled: changes['videoEnabled'],
      });
    }
  }
  return value;
}
export interface updateCallRTCIceCandidateInputParams {
  callId: Readonly<objectId>;
  candidate: string;
}
export function updateCallRTCIceCandidate(params: updateCallRTCIceCandidateInputParams): updateCallRTCIceCandidate {
  return {
    _name: 'update.updateCallRTCIceCandidate',
    callId: params['callId'],
    candidate: params['candidate']
  };
}
export function encodeUpdateCallRTCIceCandidate(__s: ISerializer, value: updateCallRTCIceCandidate) {
  __s.writeInt32(-456869484);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId3(__s,__pv0);
  /**
   * encoding param: candidate
   */
  const __pv1 = value['candidate'];
  __s.writeString(__pv1);
}
export function decodeUpdateCallRTCIceCandidate(__d: IDeserializer): updateCallRTCIceCandidate | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -456869484) return null;
  let callId: objectId;
  let candidate: string;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId4(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  /**
   * decoding param: candidate
   */
  candidate = __d.readString();
  return {
    _name: 'update.updateCallRTCIceCandidate',
    callId,
    candidate
  };
}
export interface updateCallRTCIceCandidate  {
  _name: 'update.updateCallRTCIceCandidate';
  callId: Readonly<objectId>;
  candidate: string;
}
export function defaultUpdateCallRTCIceCandidate(params: Partial<updateCallRTCIceCandidateInputParams> = {}): updateCallRTCIceCandidate {
  return updateCallRTCIceCandidate({
    callId: defaultObjectId(),
    candidate: "",
    ...params
  });
}
export function compareUpdateCallRTCIceCandidate(__a: updateCallRTCIceCandidate, __b: updateCallRTCIceCandidate): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId6(__a['callId'],__b['callId']) &&
    /**
     * compare parameter candidate
     */
    __a['candidate'] === __b['candidate']
  );
}
export function updateUpdateCallRTCIceCandidate(value: updateCallRTCIceCandidate, changes: Partial<updateCallRTCIceCandidateInputParams>) {
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId7(changes['callId'],value['callId']))) {
      value = updateCallRTCIceCandidate({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  if(typeof changes['candidate'] !== 'undefined') {
    if(!(changes['candidate'] === value['candidate'])) {
      value = updateCallRTCIceCandidate({
        ...value,
        candidate: changes['candidate'],
      });
    }
  }
  return value;
}
export interface updateCallAnswerInputParams {
  callId: Readonly<objectId>;
  answer: Readonly<rtcSessionDescriptionAnswer>;
  videoEnabled: boolean;
}
export function updateCallAnswer(params: updateCallAnswerInputParams): updateCallAnswer {
  return {
    _name: 'update.updateCallAnswer',
    callId: params['callId'],
    answer: params['answer'],
    videoEnabled: params['videoEnabled']
  };
}
export function encodeUpdateCallAnswer(__s: ISerializer, value: updateCallAnswer) {
  __s.writeInt32(-2109049674);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId8(__s,__pv0);
  /**
   * encoding param: answer
   */
  const __pv1 = value['answer'];
  encodeRtcSessionDescriptionAnswer(__s,__pv1);
  /**
   * encoding param: videoEnabled
   */
  const __pv2 = value['videoEnabled'];
  __s.writeUint8(__pv2 === true ? 1 : 0);
}
export function decodeUpdateCallAnswer(__d: IDeserializer): updateCallAnswer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -2109049674) return null;
  let callId: objectId;
  let answer: rtcSessionDescriptionAnswer;
  let videoEnabled: boolean;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId9(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  /**
   * decoding param: answer
   */
  const tmp4 = decodeRtcSessionDescriptionAnswer(__d);
  if(tmp4 === null) return null;
  answer = tmp4;
  /**
   * decoding param: videoEnabled
   */
  videoEnabled = __d.readUint8() === 1;
  return {
    _name: 'update.updateCallAnswer',
    callId,
    answer,
    videoEnabled
  };
}
export interface updateCallAnswer  {
  _name: 'update.updateCallAnswer';
  callId: Readonly<objectId>;
  answer: Readonly<rtcSessionDescriptionAnswer>;
  videoEnabled: boolean;
}
export function defaultUpdateCallAnswer(params: Partial<updateCallAnswerInputParams> = {}): updateCallAnswer {
  return updateCallAnswer({
    callId: defaultObjectId(),
    answer: defaultRtcSessionDescriptionAnswer(),
    videoEnabled: false,
    ...params
  });
}
export function compareUpdateCallAnswer(__a: updateCallAnswer, __b: updateCallAnswer): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId11(__a['callId'],__b['callId']) &&
    /**
     * compare parameter answer
     */
    compareRtcSessionDescriptionAnswer(__a['answer'],__b['answer']) &&
    /**
     * compare parameter videoEnabled
     */
    __a['videoEnabled'] === __b['videoEnabled']
  );
}
export function updateUpdateCallAnswer(value: updateCallAnswer, changes: Partial<updateCallAnswerInputParams>) {
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId12(changes['callId'],value['callId']))) {
      value = updateCallAnswer({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  if(typeof changes['answer'] !== 'undefined') {
    if(!(compareRtcSessionDescriptionAnswer13(changes['answer'],value['answer']))) {
      value = updateCallAnswer({
        ...value,
        answer: changes['answer'],
      });
    }
  }
  if(typeof changes['videoEnabled'] !== 'undefined') {
    if(!(changes['videoEnabled'] === value['videoEnabled'])) {
      value = updateCallAnswer({
        ...value,
        videoEnabled: changes['videoEnabled'],
      });
    }
  }
  return value;
}
export interface updateCallDropInputParams {
  callId: Readonly<objectId>;
}
export function updateCallDrop(params: updateCallDropInputParams): updateCallDrop {
  return {
    _name: 'update.updateCallDrop',
    callId: params['callId']
  };
}
export function encodeUpdateCallDrop(__s: ISerializer, value: updateCallDrop) {
  __s.writeInt32(1912667881);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId14(__s,__pv0);
}
export function decodeUpdateCallDrop(__d: IDeserializer): updateCallDrop | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1912667881) return null;
  let callId: objectId;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId15(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  return {
    _name: 'update.updateCallDrop',
    callId
  };
}
export interface updateCallDrop  {
  _name: 'update.updateCallDrop';
  callId: Readonly<objectId>;
}
export function defaultUpdateCallDrop(params: Partial<updateCallDropInputParams> = {}): updateCallDrop {
  return updateCallDrop({
    callId: defaultObjectId(),
    ...params
  });
}
export function compareUpdateCallDrop(__a: updateCallDrop, __b: updateCallDrop): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId17(__a['callId'],__b['callId'])
  );
}
export function updateUpdateCallDrop(value: updateCallDrop, changes: Partial<updateCallDropInputParams>) {
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId18(changes['callId'],value['callId']))) {
      value = updateCallDrop({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  return value;
}
export interface updateCallStartedInputParams {
  callId: Readonly<objectId>;
}
export function updateCallStarted(params: updateCallStartedInputParams): updateCallStarted {
  return {
    _name: 'update.updateCallStarted',
    callId: params['callId']
  };
}
export function encodeUpdateCallStarted(__s: ISerializer, value: updateCallStarted) {
  __s.writeInt32(-243424417);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId19(__s,__pv0);
}
export function decodeUpdateCallStarted(__d: IDeserializer): updateCallStarted | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -243424417) return null;
  let callId: objectId;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId20(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  return {
    _name: 'update.updateCallStarted',
    callId
  };
}
export interface updateCallStarted  {
  _name: 'update.updateCallStarted';
  callId: Readonly<objectId>;
}
export function defaultUpdateCallStarted(params: Partial<updateCallStartedInputParams> = {}): updateCallStarted {
  return updateCallStarted({
    callId: defaultObjectId(),
    ...params
  });
}
export function compareUpdateCallStarted(__a: updateCallStarted, __b: updateCallStarted): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId22(__a['callId'],__b['callId'])
  );
}
export function updateUpdateCallStarted(value: updateCallStarted, changes: Partial<updateCallStartedInputParams>) {
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId23(changes['callId'],value['callId']))) {
      value = updateCallStarted({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  return value;
}
export interface updateCallVideoEnabledStateChangeInputParams {
  callId: Readonly<objectId>;
  videoEnabled: boolean;
}
export function updateCallVideoEnabledStateChange(params: updateCallVideoEnabledStateChangeInputParams): updateCallVideoEnabledStateChange {
  return {
    _name: 'update.updateCallVideoEnabledStateChange',
    callId: params['callId'],
    videoEnabled: params['videoEnabled']
  };
}
export function encodeUpdateCallVideoEnabledStateChange(__s: ISerializer, value: updateCallVideoEnabledStateChange) {
  __s.writeInt32(545077796);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId24(__s,__pv0);
  /**
   * encoding param: videoEnabled
   */
  const __pv1 = value['videoEnabled'];
  __s.writeUint8(__pv1 === true ? 1 : 0);
}
export function decodeUpdateCallVideoEnabledStateChange(__d: IDeserializer): updateCallVideoEnabledStateChange | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 545077796) return null;
  let callId: objectId;
  let videoEnabled: boolean;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId25(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  /**
   * decoding param: videoEnabled
   */
  videoEnabled = __d.readUint8() === 1;
  return {
    _name: 'update.updateCallVideoEnabledStateChange',
    callId,
    videoEnabled
  };
}
export interface updateCallVideoEnabledStateChange  {
  _name: 'update.updateCallVideoEnabledStateChange';
  callId: Readonly<objectId>;
  videoEnabled: boolean;
}
export function defaultUpdateCallVideoEnabledStateChange(params: Partial<updateCallVideoEnabledStateChangeInputParams> = {}): updateCallVideoEnabledStateChange {
  return updateCallVideoEnabledStateChange({
    callId: defaultObjectId(),
    videoEnabled: false,
    ...params
  });
}
export function compareUpdateCallVideoEnabledStateChange(__a: updateCallVideoEnabledStateChange, __b: updateCallVideoEnabledStateChange): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId27(__a['callId'],__b['callId']) &&
    /**
     * compare parameter videoEnabled
     */
    __a['videoEnabled'] === __b['videoEnabled']
  );
}
export function updateUpdateCallVideoEnabledStateChange(value: updateCallVideoEnabledStateChange, changes: Partial<updateCallVideoEnabledStateChangeInputParams>) {
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId28(changes['callId'],value['callId']))) {
      value = updateCallVideoEnabledStateChange({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  if(typeof changes['videoEnabled'] !== 'undefined') {
    if(!(changes['videoEnabled'] === value['videoEnabled'])) {
      value = updateCallVideoEnabledStateChange({
        ...value,
        videoEnabled: changes['videoEnabled'],
      });
    }
  }
  return value;
}
export interface UpdatesInputParams {
  updates: ReadonlyArray<Readonly<Update>>;
}
export function Updates(params: UpdatesInputParams): Updates {
  return {
    _name: 'update.Updates',
    updates: params['updates']
  };
}
export function encodeUpdates(__s: ISerializer, value: Updates) {
  __s.writeInt32(-15890540);
  /**
   * encoding param: updates
   */
  const __pv0 = value['updates'];
  const __l1 = __pv0.length;
  __s.writeUint32(__l1);
  for(let __i1 = 0; __i1 < __l1; __i1++) {
    const __v__i1 = __pv0[__i1];
    encodeUpdateTrait(__s,__v__i1);
  }
}
export function decodeUpdates(__d: IDeserializer): Updates | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -15890540) return null;
  let updates: Array<Update>;
  /**
   * decoding param: updates
   */
  const __l1 = __d.readUint32();
  const __o1 = new Array<Update>(__l1);
  updates = __o1;
  for(let __i1 = 0; __i1 < __l1; __i1++) {
    const __tmp2 = decodeUpdateTrait(__d);
    if(__tmp2 === null) return null;
    __o1[__i1] = __tmp2;
  }
  return {
    _name: 'update.Updates',
    updates
  };
}
export interface Updates  {
  _name: 'update.Updates';
  updates: ReadonlyArray<Readonly<Update>>;
}
export function defaultUpdates(params: Partial<UpdatesInputParams> = {}): Updates {
  return Updates({
    updates: [],
    ...params
  });
}
export function compareUpdates(__a: Updates, __b: Updates): boolean {
  return (
    /**
     * compare parameter updates
     */
    __a['updates'].length === __b['updates'].length && __a['updates'].every((__i,index) => (compareUpdateTrait(__i,__b['updates'][index])))
  );
}
export function updateUpdates(value: Updates, changes: Partial<UpdatesInputParams>) {
  if(typeof changes['updates'] !== 'undefined') {
    if(!(changes['updates'].length === value['updates'].length && changes['updates'].every((__i,index) => (compareUpdateTrait(__i,value['updates'][index]))))) {
      value = Updates({
        ...value,
        updates: changes['updates'],
      });
    }
  }
  return value;
}
