import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
export interface objectIdInputParams {
  value: string;
}
export function objectId(params: objectIdInputParams): objectId {
  return {
    _name: 'objectId.objectId',
    value: params['value']
  };
}
export function encodeObjectId(__s: ISerializer, value: objectId) {
  __s.writeInt32(-1203917333);
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
  if(__id !== -1203917333) return null;
  let value: string;
  /**
   * decoding param: value
   */
  value = __d.readString();
  return {
    _name: 'objectId.objectId',
    value
  };
}
export interface objectId  {
  _name: 'objectId.objectId';
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
