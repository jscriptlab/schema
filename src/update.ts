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
import {encodeRtcSessionDescriptionAnswer} from "./call";
import {decodeObjectId as decodeObjectId4} from "./objectId";
import {decodeRtcSessionDescriptionAnswer} from "./call";
import {defaultObjectId as defaultObjectId5} from "./objectId";
import {defaultRtcSessionDescriptionAnswer} from "./call";
import {compareObjectId as compareObjectId6} from "./objectId";
import {compareRtcSessionDescriptionAnswer} from "./call";
import {compareObjectId as compareObjectId7} from "./objectId";
import {compareRtcSessionDescriptionAnswer as compareRtcSessionDescriptionAnswer8} from "./call";
export type Update = Readonly<updateCallOffer> | Readonly<updateCallAnswer>;
export function encodeUpdateTrait(__s: ISerializer,value: Update) {
  switch(value._name) {
    case 'update.updateCallOffer':
      encodeUpdateCallOffer(__s,value);
      break;
    case 'update.updateCallAnswer':
      encodeUpdateCallAnswer(__s,value);
      break;
  }
}
export function decodeUpdateTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: updateCallOffer | updateCallAnswer;
  switch(__id) {
    case 1648282623: {
      const tmp = decodeUpdateCallOffer(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 800613507: {
      const tmp = decodeUpdateCallAnswer(__d);
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
    case 'update.updateCallAnswer':
      if(__b._name !== "update.updateCallAnswer") return false;
      return compareUpdateCallAnswer(__a,__b);
  }
}
export interface updateCallOfferInputParams {
  callId: Readonly<objectId>;
  offer: Readonly<rtcSessionDescriptionOffer>;
}
export function updateCallOffer(params: updateCallOfferInputParams): updateCallOffer {
  return {
    _name: 'update.updateCallOffer',
    callId: params['callId'],
    offer: params['offer']
  };
}
export function encodeUpdateCallOffer(__s: ISerializer, value: updateCallOffer) {
  __s.writeInt32(1648282623);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId(__s,__pv0);
  /**
   * encoding param: offer
   */
  const __pv1 = value['offer'];
  encodeRtcSessionDescriptionOffer(__s,__pv1);
}
export function decodeUpdateCallOffer(__d: IDeserializer): updateCallOffer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 1648282623) return null;
  let callId: objectId;
  let offer: rtcSessionDescriptionOffer;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  /**
   * decoding param: offer
   */
  const tmp4 = decodeRtcSessionDescriptionOffer(__d);
  if(tmp4 === null) return null;
  offer = tmp4;
  return {
    _name: 'update.updateCallOffer',
    callId,
    offer
  };
}
export interface updateCallOffer  {
  _name: 'update.updateCallOffer';
  callId: Readonly<objectId>;
  offer: Readonly<rtcSessionDescriptionOffer>;
}
export function defaultUpdateCallOffer(params: Partial<updateCallOfferInputParams> = {}): updateCallOffer {
  return updateCallOffer({
    callId: defaultObjectId(),
    offer: defaultRtcSessionDescriptionOffer(),
    ...params
  });
}
export function compareUpdateCallOffer(__a: updateCallOffer, __b: updateCallOffer): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId(__a['callId'],__b['callId']) &&
    /**
     * compare parameter offer
     */
    compareRtcSessionDescriptionOffer(__a['offer'],__b['offer'])
  );
}
export function updateUpdateCallOffer(value: updateCallOffer, changes: Partial<updateCallOfferInputParams>) {
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
  return value;
}
export interface updateCallAnswerInputParams {
  callId: Readonly<objectId>;
  answer: Readonly<rtcSessionDescriptionAnswer>;
}
export function updateCallAnswer(params: updateCallAnswerInputParams): updateCallAnswer {
  return {
    _name: 'update.updateCallAnswer',
    callId: params['callId'],
    answer: params['answer']
  };
}
export function encodeUpdateCallAnswer(__s: ISerializer, value: updateCallAnswer) {
  __s.writeInt32(800613507);
  /**
   * encoding param: callId
   */
  const __pv0 = value['callId'];
  encodeObjectId3(__s,__pv0);
  /**
   * encoding param: answer
   */
  const __pv1 = value['answer'];
  encodeRtcSessionDescriptionAnswer(__s,__pv1);
}
export function decodeUpdateCallAnswer(__d: IDeserializer): updateCallAnswer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 800613507) return null;
  let callId: objectId;
  let answer: rtcSessionDescriptionAnswer;
  /**
   * decoding param: callId
   */
  const tmp2 = decodeObjectId4(__d);
  if(tmp2 === null) return null;
  callId = tmp2;
  /**
   * decoding param: answer
   */
  const tmp4 = decodeRtcSessionDescriptionAnswer(__d);
  if(tmp4 === null) return null;
  answer = tmp4;
  return {
    _name: 'update.updateCallAnswer',
    callId,
    answer
  };
}
export interface updateCallAnswer  {
  _name: 'update.updateCallAnswer';
  callId: Readonly<objectId>;
  answer: Readonly<rtcSessionDescriptionAnswer>;
}
export function defaultUpdateCallAnswer(params: Partial<updateCallAnswerInputParams> = {}): updateCallAnswer {
  return updateCallAnswer({
    callId: defaultObjectId(),
    answer: defaultRtcSessionDescriptionAnswer(),
    ...params
  });
}
export function compareUpdateCallAnswer(__a: updateCallAnswer, __b: updateCallAnswer): boolean {
  return (
    /**
     * compare parameter callId
     */
    compareObjectId6(__a['callId'],__b['callId']) &&
    /**
     * compare parameter answer
     */
    compareRtcSessionDescriptionAnswer(__a['answer'],__b['answer'])
  );
}
export function updateUpdateCallAnswer(value: updateCallAnswer, changes: Partial<updateCallAnswerInputParams>) {
  if(typeof changes['callId'] !== 'undefined') {
    if(!(compareObjectId7(changes['callId'],value['callId']))) {
      value = updateCallAnswer({
        ...value,
        callId: changes['callId'],
      });
    }
  }
  if(typeof changes['answer'] !== 'undefined') {
    if(!(compareRtcSessionDescriptionAnswer8(changes['answer'],value['answer']))) {
      value = updateCallAnswer({
        ...value,
        answer: changes['answer'],
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
