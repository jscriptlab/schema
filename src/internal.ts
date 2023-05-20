import {objectId} from "./objectId";
import {Update} from "./update";
import {ISerializer} from "./__types__";
import {IDeserializer} from "./__types__";
import {encodeObjectId} from "./objectId";
import {decodeObjectId} from "./objectId";
import {defaultObjectId} from "./objectId";
import {compareObjectId} from "./objectId";
import {compareObjectId as compareObjectId1} from "./objectId";
import {encodeUpdateTrait} from "./update";
import {decodeUpdateTrait} from "./update";
import {compareUpdateTrait} from "./update";
import {compareUpdateTrait as compareUpdateTrait2} from "./update";
export type UpdateTarget = Readonly<updateTargetTempUser>;
export function encodeUpdateTargetTrait(__s: ISerializer,value: UpdateTarget) {
  switch(value._name) {
    case 'internal.updateTargetTempUser':
      encodeUpdateTargetTempUser(__s,value);
      break;
  }
}
export function decodeUpdateTargetTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: updateTargetTempUser;
  switch(__id) {
    case 42457337: {
      const tmp = decodeUpdateTargetTempUser(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultUpdateTargetTrait() {
  return defaultUpdateTargetTempUser();
}
export function compareUpdateTargetTrait(__a: UpdateTarget, __b: UpdateTarget) {
  switch(__a._name) {
    case 'internal.updateTargetTempUser':
      if(__b._name !== "internal.updateTargetTempUser") return false;
      return compareUpdateTargetTempUser(__a,__b);
  }
}
export interface updateTargetTempUserInputParams {
  tempUserId: Readonly<objectId>;
}
export function updateTargetTempUser(params: updateTargetTempUserInputParams): updateTargetTempUser {
  return {
    _name: 'internal.updateTargetTempUser',
    tempUserId: params['tempUserId']
  };
}
export function encodeUpdateTargetTempUser(__s: ISerializer, value: updateTargetTempUser) {
  __s.writeInt32(42457337);
  /**
   * encoding param: tempUserId
   */
  const __pv0 = value['tempUserId'];
  encodeObjectId(__s,__pv0);
}
export function decodeUpdateTargetTempUser(__d: IDeserializer): updateTargetTempUser | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 42457337) return null;
  let tempUserId: objectId;
  /**
   * decoding param: tempUserId
   */
  const tmp2 = decodeObjectId(__d);
  if(tmp2 === null) return null;
  tempUserId = tmp2;
  return {
    _name: 'internal.updateTargetTempUser',
    tempUserId
  };
}
export interface updateTargetTempUser  {
  _name: 'internal.updateTargetTempUser';
  tempUserId: Readonly<objectId>;
}
export function defaultUpdateTargetTempUser(params: Partial<updateTargetTempUserInputParams> = {}): updateTargetTempUser {
  return updateTargetTempUser({
    tempUserId: defaultObjectId(),
    ...params
  });
}
export function compareUpdateTargetTempUser(__a: updateTargetTempUser, __b: updateTargetTempUser): boolean {
  return (
    /**
     * compare parameter tempUserId
     */
    compareObjectId(__a['tempUserId'],__b['tempUserId'])
  );
}
export function updateUpdateTargetTempUser(value: updateTargetTempUser, changes: Partial<updateTargetTempUserInputParams>) {
  if(typeof changes['tempUserId'] !== 'undefined') {
    if(!(compareObjectId1(changes['tempUserId'],value['tempUserId']))) {
      value = updateTargetTempUser({
        ...value,
        tempUserId: changes['tempUserId'],
      });
    }
  }
  return value;
}
export interface updateBroadcastInputParams {
  targets: ReadonlyArray<Readonly<UpdateTarget>>;
  updates: ReadonlyArray<Readonly<Update>>;
}
export function updateBroadcast(params: updateBroadcastInputParams): updateBroadcast {
  return {
    _name: 'internal.updateBroadcast',
    targets: params['targets'],
    updates: params['updates']
  };
}
export function encodeUpdateBroadcast(__s: ISerializer, value: updateBroadcast) {
  __s.writeInt32(-1780403415);
  /**
   * encoding param: targets
   */
  const __pv0 = value['targets'];
  const __l1 = __pv0.length;
  __s.writeUint32(__l1);
  for(let __i1 = 0; __i1 < __l1; __i1++) {
    const __v__i1 = __pv0[__i1];
    encodeUpdateTargetTrait(__s,__v__i1);
  }
  /**
   * encoding param: updates
   */
  const __pv2 = value['updates'];
  const __l3 = __pv2.length;
  __s.writeUint32(__l3);
  for(let __i3 = 0; __i3 < __l3; __i3++) {
    const __v__i3 = __pv2[__i3];
    encodeUpdateTrait(__s,__v__i3);
  }
}
export function decodeUpdateBroadcast(__d: IDeserializer): updateBroadcast | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1780403415) return null;
  let targets: Array<UpdateTarget>;
  let updates: Array<Update>;
  /**
   * decoding param: targets
   */
  const __l1 = __d.readUint32();
  const __o1 = new Array<UpdateTarget>(__l1);
  targets = __o1;
  for(let __i1 = 0; __i1 < __l1; __i1++) {
    const __tmp2 = decodeUpdateTargetTrait(__d);
    if(__tmp2 === null) return null;
    __o1[__i1] = __tmp2;
  }
  /**
   * decoding param: updates
   */
  const __l3 = __d.readUint32();
  const __o3 = new Array<Update>(__l3);
  updates = __o3;
  for(let __i3 = 0; __i3 < __l3; __i3++) {
    const tmp5 = decodeUpdateTrait(__d);
    if(tmp5 === null) return null;
    __o3[__i3] = tmp5;
  }
  return {
    _name: 'internal.updateBroadcast',
    targets,
    updates
  };
}
export interface updateBroadcast  {
  _name: 'internal.updateBroadcast';
  targets: ReadonlyArray<Readonly<UpdateTarget>>;
  updates: ReadonlyArray<Readonly<Update>>;
}
export function defaultUpdateBroadcast(params: Partial<updateBroadcastInputParams> = {}): updateBroadcast {
  return updateBroadcast({
    targets: [],
    updates: [],
    ...params
  });
}
export function compareUpdateBroadcast(__a: updateBroadcast, __b: updateBroadcast): boolean {
  return (
    /**
     * compare parameter targets
     */
    __a['targets'].length === __b['targets'].length && __a['targets'].every((__i,index) => (compareUpdateTargetTrait(__i,__b['targets'][index]))) &&
    /**
     * compare parameter updates
     */
    __a['updates'].length === __b['updates'].length && __a['updates'].every((__i,index) => (compareUpdateTrait(__i,__b['updates'][index])))
  );
}
export function updateUpdateBroadcast(value: updateBroadcast, changes: Partial<updateBroadcastInputParams>) {
  if(typeof changes['targets'] !== 'undefined') {
    if(!(changes['targets'].length === value['targets'].length && changes['targets'].every((__i,index) => (compareUpdateTargetTrait(__i,value['targets'][index]))))) {
      value = updateBroadcast({
        ...value,
        targets: changes['targets'],
      });
    }
  }
  if(typeof changes['updates'] !== 'undefined') {
    if(!(changes['updates'].length === value['updates'].length && changes['updates'].every((__i,index) => (compareUpdateTrait2(__i,value['updates'][index]))))) {
      value = updateBroadcast({
        ...value,
        updates: changes['updates'],
      });
    }
  }
  return value;
}
