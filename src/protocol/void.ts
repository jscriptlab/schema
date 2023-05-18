import {Result} from "./Result";
import {ISerializer} from "./../__types__";
import {IDeserializer} from "./../__types__";
export type Void = Readonly<void_t>;
export function encodeVoidTrait(__s: ISerializer,value: Void) {
  switch(value._name) {
    case 'protocol.void.void_t':
      encodeVoid_t(__s,value);
      break;
  }
}
export function decodeVoidTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: void_t;
  switch(__id) {
    case -1641569182: {
      const tmp = decodeVoid_t(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultVoidTrait() {
  return defaultVoid_t();
}
export function compareVoidTrait(__a: Void, __b: Void) {
  switch(__a._name) {
    case 'protocol.void.void_t':
      if(__b._name !== "protocol.void.void_t") return false;
      return compareVoid_t(__a,__b);
  }
}
export interface void_tInputParams {
}
export function void_t(_: void_tInputParams = {}): void_t {
  return {
    _name: 'protocol.void.void_t'
  };
}
export function encodeVoid_t(__s: ISerializer, _: void_t) {
  __s.writeInt32(-1641569182);
}
export function decodeVoid_t(__d: IDeserializer): void_t | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1641569182) return null;
  return {
    _name: 'protocol.void.void_t',
  };
}
export interface void_t  {
  _name: 'protocol.void.void_t';
}
export function defaultVoid_t(params: Partial<void_tInputParams> = {}): void_t {
  return void_t({
    ...params
  });
}
export function compareVoid_t(__a: void_t, __b: void_t): boolean {
  return true;
}
export function updateVoid_t(value: void_t, _: Partial<void_tInputParams>) {
  return value;
}
