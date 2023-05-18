import {ISerializer} from "./../__types__";
import {IDeserializer} from "./../__types__";
export type Error = Readonly<errorDatabaseFailure> | Readonly<errorUnknownFailure> | Readonly<errorCallNotImplemented> | Readonly<errorInputValidationFailure>;
export function encodeErrorTrait(__s: ISerializer,value: Error) {
  switch(value._name) {
    case 'protocol.error.errorDatabaseFailure':
      encodeErrorDatabaseFailure(__s,value);
      break;
    case 'protocol.error.errorUnknownFailure':
      encodeErrorUnknownFailure(__s,value);
      break;
    case 'protocol.error.errorCallNotImplemented':
      encodeErrorCallNotImplemented(__s,value);
      break;
    case 'protocol.error.errorInputValidationFailure':
      encodeErrorInputValidationFailure(__s,value);
      break;
  }
}
export function decodeErrorTrait(__d: IDeserializer) {
  const __id = __d.readInt32();
  __d.rewindInt32();
  let value: errorDatabaseFailure | errorUnknownFailure | errorCallNotImplemented | errorInputValidationFailure;
  switch(__id) {
    case 2099568820: {
      const tmp = decodeErrorDatabaseFailure(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 370329155: {
      const tmp = decodeErrorUnknownFailure(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case 182748769: {
      const tmp = decodeErrorCallNotImplemented(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    case -1661826569: {
      const tmp = decodeErrorInputValidationFailure(__d);
      if(tmp === null) return null;
      value = tmp;
      break;
    }
    default: return null;
  }
  return value;
}
export function defaultErrorTrait() {
  return defaultErrorDatabaseFailure();
}
export function compareErrorTrait(__a: Error, __b: Error) {
  switch(__a._name) {
    case 'protocol.error.errorDatabaseFailure':
      if(__b._name !== "protocol.error.errorDatabaseFailure") return false;
      return compareErrorDatabaseFailure(__a,__b);
    case 'protocol.error.errorUnknownFailure':
      if(__b._name !== "protocol.error.errorUnknownFailure") return false;
      return compareErrorUnknownFailure(__a,__b);
    case 'protocol.error.errorCallNotImplemented':
      if(__b._name !== "protocol.error.errorCallNotImplemented") return false;
      return compareErrorCallNotImplemented(__a,__b);
    case 'protocol.error.errorInputValidationFailure':
      if(__b._name !== "protocol.error.errorInputValidationFailure") return false;
      return compareErrorInputValidationFailure(__a,__b);
  }
}
export interface errorDatabaseFailureInputParams {
}
export function errorDatabaseFailure(_: errorDatabaseFailureInputParams = {}): errorDatabaseFailure {
  return {
    _name: 'protocol.error.errorDatabaseFailure'
  };
}
export function encodeErrorDatabaseFailure(__s: ISerializer, _: errorDatabaseFailure) {
  __s.writeInt32(2099568820);
}
export function decodeErrorDatabaseFailure(__d: IDeserializer): errorDatabaseFailure | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 2099568820) return null;
  return {
    _name: 'protocol.error.errorDatabaseFailure',
  };
}
export interface errorDatabaseFailure  {
  _name: 'protocol.error.errorDatabaseFailure';
}
export function defaultErrorDatabaseFailure(params: Partial<errorDatabaseFailureInputParams> = {}): errorDatabaseFailure {
  return errorDatabaseFailure({
    ...params
  });
}
export function compareErrorDatabaseFailure(__a: errorDatabaseFailure, __b: errorDatabaseFailure): boolean {
  return true;
}
export function updateErrorDatabaseFailure(value: errorDatabaseFailure, _: Partial<errorDatabaseFailureInputParams>) {
  return value;
}
export interface errorUnknownFailureInputParams {
}
export function errorUnknownFailure(_: errorUnknownFailureInputParams = {}): errorUnknownFailure {
  return {
    _name: 'protocol.error.errorUnknownFailure'
  };
}
export function encodeErrorUnknownFailure(__s: ISerializer, _: errorUnknownFailure) {
  __s.writeInt32(370329155);
}
export function decodeErrorUnknownFailure(__d: IDeserializer): errorUnknownFailure | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 370329155) return null;
  return {
    _name: 'protocol.error.errorUnknownFailure',
  };
}
export interface errorUnknownFailure  {
  _name: 'protocol.error.errorUnknownFailure';
}
export function defaultErrorUnknownFailure(params: Partial<errorUnknownFailureInputParams> = {}): errorUnknownFailure {
  return errorUnknownFailure({
    ...params
  });
}
export function compareErrorUnknownFailure(__a: errorUnknownFailure, __b: errorUnknownFailure): boolean {
  return true;
}
export function updateErrorUnknownFailure(value: errorUnknownFailure, _: Partial<errorUnknownFailureInputParams>) {
  return value;
}
export interface errorCallNotImplementedInputParams {
}
export function errorCallNotImplemented(_: errorCallNotImplementedInputParams = {}): errorCallNotImplemented {
  return {
    _name: 'protocol.error.errorCallNotImplemented'
  };
}
export function encodeErrorCallNotImplemented(__s: ISerializer, _: errorCallNotImplemented) {
  __s.writeInt32(182748769);
}
export function decodeErrorCallNotImplemented(__d: IDeserializer): errorCallNotImplemented | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 182748769) return null;
  return {
    _name: 'protocol.error.errorCallNotImplemented',
  };
}
export interface errorCallNotImplemented  {
  _name: 'protocol.error.errorCallNotImplemented';
}
export function defaultErrorCallNotImplemented(params: Partial<errorCallNotImplementedInputParams> = {}): errorCallNotImplemented {
  return errorCallNotImplemented({
    ...params
  });
}
export function compareErrorCallNotImplemented(__a: errorCallNotImplemented, __b: errorCallNotImplemented): boolean {
  return true;
}
export function updateErrorCallNotImplemented(value: errorCallNotImplemented, _: Partial<errorCallNotImplementedInputParams>) {
  return value;
}
export interface errorInputValidationFailureInputParams {
}
export function errorInputValidationFailure(_: errorInputValidationFailureInputParams = {}): errorInputValidationFailure {
  return {
    _name: 'protocol.error.errorInputValidationFailure'
  };
}
export function encodeErrorInputValidationFailure(__s: ISerializer, _: errorInputValidationFailure) {
  __s.writeInt32(-1661826569);
}
export function decodeErrorInputValidationFailure(__d: IDeserializer): errorInputValidationFailure | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== -1661826569) return null;
  return {
    _name: 'protocol.error.errorInputValidationFailure',
  };
}
export interface errorInputValidationFailure  {
  _name: 'protocol.error.errorInputValidationFailure';
}
export function defaultErrorInputValidationFailure(params: Partial<errorInputValidationFailureInputParams> = {}): errorInputValidationFailure {
  return errorInputValidationFailure({
    ...params
  });
}
export function compareErrorInputValidationFailure(__a: errorInputValidationFailure, __b: errorInputValidationFailure): boolean {
  return true;
}
export function updateErrorInputValidationFailure(value: errorInputValidationFailure, _: Partial<errorInputValidationFailureInputParams>) {
  return value;
}
