import {Void} from "./../protocol/void";
import {Request} from "./../protocol/Request";
import {ISerializer} from "./../__types__";
import {IDeserializer} from "./../__types__";
export type RTCSessionDescriptionType = Readonly<rtcSessionDescriptionTypeOffer> | Readonly<rtcSessionDescriptionTypeAnswer> | Readonly<rtcSessionDescriptionTypePreAnswer>;
export function encodeRTCSessionDescriptionTypeTrait(__s: ISerializer,value: RTCSessionDescriptionType) {
    switch(value._name) {
        case 'call.index.rtcSessionDescriptionTypeOffer':
            encodeRtcSessionDescriptionTypeOffer(__s,value);
            break;
        case 'call.index.rtcSessionDescriptionTypeAnswer':
            encodeRtcSessionDescriptionTypeAnswer(__s,value);
            break;
        case 'call.index.rtcSessionDescriptionTypePreAnswer':
            encodeRtcSessionDescriptionTypePreAnswer(__s,value);
            break;
    }
}
export function decodeRTCSessionDescriptionTypeTrait(__d: IDeserializer) {
    const __id = __d.readInt32();
    __d.rewindInt32();
    let value: rtcSessionDescriptionTypeOffer | rtcSessionDescriptionTypeAnswer | rtcSessionDescriptionTypePreAnswer;
    switch(__id) {
        case -1360035339: {
            const tmp = decodeRtcSessionDescriptionTypeOffer(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 1452451407: {
            const tmp = decodeRtcSessionDescriptionTypeAnswer(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        case 826952985: {
            const tmp = decodeRtcSessionDescriptionTypePreAnswer(__d);
            if(tmp === null) return null;
            value = tmp;
            break;
        }
        default: return null;
    }
    return value;
}
export function defaultRTCSessionDescriptionTypeTrait() {
    return defaultRtcSessionDescriptionTypeOffer();
}
export function compareRTCSessionDescriptionTypeTrait(__a: RTCSessionDescriptionType, __b: RTCSessionDescriptionType) {
    switch(__a._name) {
        case 'call.index.rtcSessionDescriptionTypeOffer':
            if(__b._name !== "call.index.rtcSessionDescriptionTypeOffer") return false;
            return compareRtcSessionDescriptionTypeOffer(__a,__b);
        case 'call.index.rtcSessionDescriptionTypeAnswer':
            if(__b._name !== "call.index.rtcSessionDescriptionTypeAnswer") return false;
            return compareRtcSessionDescriptionTypeAnswer(__a,__b);
        case 'call.index.rtcSessionDescriptionTypePreAnswer':
            if(__b._name !== "call.index.rtcSessionDescriptionTypePreAnswer") return false;
            return compareRtcSessionDescriptionTypePreAnswer(__a,__b);
    }
}
export interface rtcSessionDescriptionTypeOfferInputParams {
}
export function rtcSessionDescriptionTypeOffer(_: rtcSessionDescriptionTypeOfferInputParams = {}): rtcSessionDescriptionTypeOffer {
    return {
        _name: 'call.index.rtcSessionDescriptionTypeOffer'
    };
}
export function encodeRtcSessionDescriptionTypeOffer(__s: ISerializer, _: rtcSessionDescriptionTypeOffer) {
    __s.writeInt32(-1360035339);
}
export function decodeRtcSessionDescriptionTypeOffer(__d: IDeserializer): rtcSessionDescriptionTypeOffer | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -1360035339) return null;
    return {
        _name: 'call.index.rtcSessionDescriptionTypeOffer',
    };
}
export interface rtcSessionDescriptionTypeOffer  {
    _name: 'call.index.rtcSessionDescriptionTypeOffer';
}
export function defaultRtcSessionDescriptionTypeOffer(params: Partial<rtcSessionDescriptionTypeOfferInputParams> = {}): rtcSessionDescriptionTypeOffer {
    return rtcSessionDescriptionTypeOffer({
        ...params
    });
}
export function compareRtcSessionDescriptionTypeOffer(__a: rtcSessionDescriptionTypeOffer, __b: rtcSessionDescriptionTypeOffer): boolean {
    return true;
}
export function updateRtcSessionDescriptionTypeOffer(value: rtcSessionDescriptionTypeOffer, _: Partial<rtcSessionDescriptionTypeOfferInputParams>) {
    return value;
}
export interface rtcSessionDescriptionTypeAnswerInputParams {
}
export function rtcSessionDescriptionTypeAnswer(_: rtcSessionDescriptionTypeAnswerInputParams = {}): rtcSessionDescriptionTypeAnswer {
    return {
        _name: 'call.index.rtcSessionDescriptionTypeAnswer'
    };
}
export function encodeRtcSessionDescriptionTypeAnswer(__s: ISerializer, _: rtcSessionDescriptionTypeAnswer) {
    __s.writeInt32(1452451407);
}
export function decodeRtcSessionDescriptionTypeAnswer(__d: IDeserializer): rtcSessionDescriptionTypeAnswer | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 1452451407) return null;
    return {
        _name: 'call.index.rtcSessionDescriptionTypeAnswer',
    };
}
export interface rtcSessionDescriptionTypeAnswer  {
    _name: 'call.index.rtcSessionDescriptionTypeAnswer';
}
export function defaultRtcSessionDescriptionTypeAnswer(params: Partial<rtcSessionDescriptionTypeAnswerInputParams> = {}): rtcSessionDescriptionTypeAnswer {
    return rtcSessionDescriptionTypeAnswer({
        ...params
    });
}
export function compareRtcSessionDescriptionTypeAnswer(__a: rtcSessionDescriptionTypeAnswer, __b: rtcSessionDescriptionTypeAnswer): boolean {
    return true;
}
export function updateRtcSessionDescriptionTypeAnswer(value: rtcSessionDescriptionTypeAnswer, _: Partial<rtcSessionDescriptionTypeAnswerInputParams>) {
    return value;
}
export interface rtcSessionDescriptionTypePreAnswerInputParams {
}
export function rtcSessionDescriptionTypePreAnswer(_: rtcSessionDescriptionTypePreAnswerInputParams = {}): rtcSessionDescriptionTypePreAnswer {
    return {
        _name: 'call.index.rtcSessionDescriptionTypePreAnswer'
    };
}
export function encodeRtcSessionDescriptionTypePreAnswer(__s: ISerializer, _: rtcSessionDescriptionTypePreAnswer) {
    __s.writeInt32(826952985);
}
export function decodeRtcSessionDescriptionTypePreAnswer(__d: IDeserializer): rtcSessionDescriptionTypePreAnswer | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 826952985) return null;
    return {
        _name: 'call.index.rtcSessionDescriptionTypePreAnswer',
    };
}
export interface rtcSessionDescriptionTypePreAnswer  {
    _name: 'call.index.rtcSessionDescriptionTypePreAnswer';
}
export function defaultRtcSessionDescriptionTypePreAnswer(params: Partial<rtcSessionDescriptionTypePreAnswerInputParams> = {}): rtcSessionDescriptionTypePreAnswer {
    return rtcSessionDescriptionTypePreAnswer({
        ...params
    });
}
export function compareRtcSessionDescriptionTypePreAnswer(__a: rtcSessionDescriptionTypePreAnswer, __b: rtcSessionDescriptionTypePreAnswer): boolean {
    return true;
}
export function updateRtcSessionDescriptionTypePreAnswer(value: rtcSessionDescriptionTypePreAnswer, _: Partial<rtcSessionDescriptionTypePreAnswerInputParams>) {
    return value;
}
export interface rtcSessionDescriptionInputParams {
    descriptionType: Readonly<RTCSessionDescriptionType> | null;
    sdp: string | null;
}
export function rtcSessionDescription(params: rtcSessionDescriptionInputParams): rtcSessionDescription {
    return {
        _name: 'call.index.rtcSessionDescription',
        descriptionType: params['descriptionType'],
        sdp: params['sdp']
    };
}
export function encodeRtcSessionDescription(__s: ISerializer, value: rtcSessionDescription) {
    __s.writeInt32(-474992107);
    /**
     * encoding param: descriptionType
     */
    const __pv0 = value['descriptionType'];
    if(__pv0 === null) {
        __s.writeUint8(0);
    } else {
        __s.writeUint8(1);
        encodeRTCSessionDescriptionTypeTrait(__s,__pv0);
    }
    /**
     * encoding param: sdp
     */
    const __pv2 = value['sdp'];
    if(__pv2 === null) {
        __s.writeUint8(0);
    } else {
        __s.writeUint8(1);
        __s.writeString(__pv2);
    }
}
export function decodeRtcSessionDescription(__d: IDeserializer): rtcSessionDescription | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== -474992107) return null;
    let descriptionType: RTCSessionDescriptionType | null;
    let sdp: string | null;
    /**
     * decoding param: descriptionType
     */
    if(__d.readUint8() === 1) {
        const __tmp2 = decodeRTCSessionDescriptionTypeTrait(__d);
        if(__tmp2 === null) return null;
        descriptionType = __tmp2;
    } else {
        descriptionType = null;
    }
    /**
     * decoding param: sdp
     */
    if(__d.readUint8() === 1) {
        sdp = __d.readString();
    } else {
        sdp = null;
    }
    return {
        _name: 'call.index.rtcSessionDescription',
        descriptionType,
        sdp
    };
}
export interface rtcSessionDescription  {
    _name: 'call.index.rtcSessionDescription';
    descriptionType: Readonly<RTCSessionDescriptionType> | null;
    sdp: string | null;
}
export function defaultRtcSessionDescription(params: Partial<rtcSessionDescriptionInputParams> = {}): rtcSessionDescription {
    return rtcSessionDescription({
        descriptionType: null,
        sdp: null,
        ...params
    });
}
export function compareRtcSessionDescription(__a: rtcSessionDescription, __b: rtcSessionDescription): boolean {
    return (
        /**
         * compare parameter descriptionType
         */
        ((__dp01, __dp02) => __dp01 !== null && __dp02 !== null ? compareRTCSessionDescriptionTypeTrait(__dp01,__dp02) : __dp01 === __dp02)(__a['descriptionType'],__b['descriptionType']) &&
        /**
         * compare parameter sdp
         */
        ((__dp11, __dp12) => __dp11 !== null && __dp12 !== null ? __dp11 === __dp12 : __dp11 === __dp12)(__a['sdp'],__b['sdp'])
    );
}
export function updateRtcSessionDescription(value: rtcSessionDescription, changes: Partial<rtcSessionDescriptionInputParams>) {
    if(typeof changes['descriptionType'] !== 'undefined') {
        if(!(((__dp11, __dp12) => __dp11 !== null && __dp12 !== null ? compareRTCSessionDescriptionTypeTrait(__dp11,__dp12) : __dp11 === __dp12)(changes['descriptionType'],value['descriptionType']))) {
            value = rtcSessionDescription({
                ...value,
                descriptionType: changes['descriptionType'],
            });
        }
    }
    if(typeof changes['sdp'] !== 'undefined') {
        if(!(((__dp31, __dp32) => __dp31 !== null && __dp32 !== null ? __dp31 === __dp32 : __dp31 === __dp32)(changes['sdp'],value['sdp']))) {
            value = rtcSessionDescription({
                ...value,
                sdp: changes['sdp'],
            });
        }
    }
    return value;
}
export interface objectIdInputParams {
    value: string;
}
export function objectId(params: objectIdInputParams): objectId {
    return {
        _name: 'call.index.objectId',
        value: params['value']
    };
}
export function encodeObjectId(__s: ISerializer, value: objectId) {
    __s.writeInt32(1326033846);
    /**
     * encoding param: value
     */
    const __pv0 = value['value'];
    __s.writeString(__pv0);
}
export function decodeObjectId(__d: IDeserializer): objectId | null {
    const __id = __d.readInt32();
    /**
     * decode header
     */
    if(__id !== 1326033846) return null;
    let value: string;
    /**
     * decoding param: value
     */
    value = __d.readString();
    return {
        _name: 'call.index.objectId',
        value
    };
}
export interface objectId  {
    _name: 'call.index.objectId';
    value: string;
}
export function defaultObjectId(params: Partial<objectIdInputParams> = {}): objectId {
    return objectId({
        value: "",
        ...params
    });
}
export function compareObjectId(__a: objectId, __b: objectId): boolean {
    return (
        /**
         * compare parameter value
         */
        __a['value'] === __b['value']
    );
}
export function updateObjectId(value: objectId, changes: Partial<objectIdInputParams>) {
    if(typeof changes['value'] !== 'undefined') {
        if(!(changes['value'] === value['value'])) {
            value = objectId({
                ...value,
                value: changes['value'],
            });
        }
    }
    return value;
}
