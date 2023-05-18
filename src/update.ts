import {rtcSessionDescriptionOffer} from "./call";
import {rtcSessionDescriptionAnswer} from "./call";
import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
import {encodeRtcSessionDescriptionOffer} from "./call";
import {decodeRtcSessionDescriptionOffer} from "./call";
import {defaultRtcSessionDescriptionOffer} from "./call";
import {compareRtcSessionDescriptionOffer} from "./call";
import {compareRtcSessionDescriptionOffer as compareRtcSessionDescriptionOffer1} from "./call";
import {encodeRtcSessionDescriptionAnswer} from "./call";
import {decodeRtcSessionDescriptionAnswer} from "./call";
import {defaultRtcSessionDescriptionAnswer} from "./call";
import {compareRtcSessionDescriptionAnswer} from "./call";
import {compareRtcSessionDescriptionAnswer as compareRtcSessionDescriptionAnswer2} from "./call";
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
    case -132977661: {
      const tmp = decodeUpdateCallOffer(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 753412455: {
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
  offer: Readonly<rtcSessionDescriptionOffer>;
}
export function updateCallOffer(params: updateCallOfferInputParams): updateCallOffer {
  return {
    _name: 'update.updateCallOffer',
    offer: params['offer']
  };
}
export function encodeUpdateCallOffer(__s: ISerializer, value: updateCallOffer) {
  __s.writeInt32(-132977661);
  /**
   * encoding param: offer
   */
  const __pv0 = value['offer'];
  encodeRtcSessionDescriptionOffer(__s,__pv0);
}
export function decodeUpdateCallOffer(__d: IDeserializer): updateCallOffer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -132977661) return null;
  let offer: rtcSessionDescriptionOffer;
  /**
   * decoding param: offer
   */
  const tmp2 = decodeRtcSessionDescriptionOffer(__d);
  if(tmp2 === null) return null;
  offer = tmp2;
  return {
    _name: 'update.updateCallOffer',
    offer
  };
}
export interface updateCallOffer  {
  _name: 'update.updateCallOffer';
  offer: Readonly<rtcSessionDescriptionOffer>;
}
export function defaultUpdateCallOffer(params: Partial<updateCallOfferInputParams> = {}): updateCallOffer {
  return updateCallOffer({
    offer: defaultRtcSessionDescriptionOffer(),
    ...params
  });
}
export function compareUpdateCallOffer(__a: updateCallOffer, __b: updateCallOffer): boolean {
  return (
    /**
     * compare parameter offer
     */
    compareRtcSessionDescriptionOffer(__a['offer'],__b['offer'])
  );
}
export function updateUpdateCallOffer(value: updateCallOffer, changes: Partial<updateCallOfferInputParams>) {
  if(typeof changes['offer'] !== 'undefined') {
    if(!(compareRtcSessionDescriptionOffer1(changes['offer'],value['offer']))) {
      value = updateCallOffer({
        ...value,
        offer: changes['offer'],
      });
    }
  }
  return value;
}
export interface updateCallAnswerInputParams {
  answer: Readonly<rtcSessionDescriptionAnswer>;
}
export function updateCallAnswer(params: updateCallAnswerInputParams): updateCallAnswer {
  return {
    _name: 'update.updateCallAnswer',
    answer: params['answer']
  };
}
export function encodeUpdateCallAnswer(__s: ISerializer, value: updateCallAnswer) {
  __s.writeInt32(753412455);
  /**
   * encoding param: answer
   */
  const __pv0 = value['answer'];
  encodeRtcSessionDescriptionAnswer(__s,__pv0);
}
export function decodeUpdateCallAnswer(__d: IDeserializer): updateCallAnswer | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 753412455) return null;
  let answer: rtcSessionDescriptionAnswer;
  /**
   * decoding param: answer
   */
  const tmp2 = decodeRtcSessionDescriptionAnswer(__d);
  if(tmp2 === null) return null;
  answer = tmp2;
  return {
    _name: 'update.updateCallAnswer',
    answer
  };
}
export interface updateCallAnswer  {
  _name: 'update.updateCallAnswer';
  answer: Readonly<rtcSessionDescriptionAnswer>;
}
export function defaultUpdateCallAnswer(params: Partial<updateCallAnswerInputParams> = {}): updateCallAnswer {
  return updateCallAnswer({
    answer: defaultRtcSessionDescriptionAnswer(),
    ...params
  });
}
export function compareUpdateCallAnswer(__a: updateCallAnswer, __b: updateCallAnswer): boolean {
  return (
    /**
     * compare parameter answer
     */
    compareRtcSessionDescriptionAnswer(__a['answer'],__b['answer'])
  );
}
export function updateUpdateCallAnswer(value: updateCallAnswer, changes: Partial<updateCallAnswerInputParams>) {
  if(typeof changes['answer'] !== 'undefined') {
    if(!(compareRtcSessionDescriptionAnswer2(changes['answer'],value['answer']))) {
      value = updateCallAnswer({
        ...value,
        answer: changes['answer'],
      });
    }
  }
  return value;
}
