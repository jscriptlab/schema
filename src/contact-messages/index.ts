import {Request} from "./../protocol/Request";
import {Void} from "./../protocol/void";
import {ISerializer} from "./../__types__";
import {IDeserializer} from "./../__types__";
import {IRequest} from "./../__types__";
export interface SendContactMessageInputParams {
  name: string;
  company: string;
  message: string;
  email: string;
  googleReCaptchaToken: string;
}
export function SendContactMessage(params: SendContactMessageInputParams): SendContactMessage {
  return {
    _name: 'contact-messages.index.SendContactMessage',
    name: params['name'],
    company: params['company'],
    message: params['message'],
    email: params['email'],
    googleReCaptchaToken: params['googleReCaptchaToken']
  };
}
export function encodeSendContactMessage(__s: ISerializer, value: SendContactMessage) {
  __s.writeInt32(675924574);
  /**
   * encoding param: name
   */
  const __pv0 = value['name'];
  __s.writeString(__pv0);
  /**
   * encoding param: company
   */
  const __pv1 = value['company'];
  __s.writeString(__pv1);
  /**
   * encoding param: message
   */
  const __pv2 = value['message'];
  __s.writeString(__pv2);
  /**
   * encoding param: email
   */
  const __pv3 = value['email'];
  __s.writeString(__pv3);
  /**
   * encoding param: googleReCaptchaToken
   */
  const __pv4 = value['googleReCaptchaToken'];
  __s.writeString(__pv4);
}
export function decodeSendContactMessage(__d: IDeserializer): SendContactMessage | null {
  const __id = __d.readInt32();
  /**
   * decode header
   */
  if(__id !== 675924574) return null;
  let name: string;
  let company: string;
  let message: string;
  let email: string;
  let googleReCaptchaToken: string;
  /**
   * decoding param: name
   */
  name = __d.readString();
  /**
   * decoding param: company
   */
  company = __d.readString();
  /**
   * decoding param: message
   */
  message = __d.readString();
  /**
   * decoding param: email
   */
  email = __d.readString();
  /**
   * decoding param: googleReCaptchaToken
   */
  googleReCaptchaToken = __d.readString();
  return {
    _name: 'contact-messages.index.SendContactMessage',
    name,
    company,
    message,
    email,
    googleReCaptchaToken
  };
}
export interface SendContactMessage extends IRequest<Readonly<Void>> {
  _name: 'contact-messages.index.SendContactMessage';
  name: string;
  company: string;
  message: string;
  email: string;
  googleReCaptchaToken: string;
}
export function defaultSendContactMessage(params: Partial<SendContactMessageInputParams> = {}): SendContactMessage {
  return SendContactMessage({
    name: "",
    company: "",
    message: "",
    email: "",
    googleReCaptchaToken: "",
    ...params
  });
}
export function compareSendContactMessage(__a: SendContactMessage, __b: SendContactMessage): boolean {
  return (
    /**
     * compare parameter name
     */
    __a['name'] === __b['name'] &&
    /**
     * compare parameter company
     */
    __a['company'] === __b['company'] &&
    /**
     * compare parameter message
     */
    __a['message'] === __b['message'] &&
    /**
     * compare parameter email
     */
    __a['email'] === __b['email'] &&
    /**
     * compare parameter googleReCaptchaToken
     */
    __a['googleReCaptchaToken'] === __b['googleReCaptchaToken']
  );
}
export function updateSendContactMessage(value: SendContactMessage, changes: Partial<SendContactMessageInputParams>) {
  if(typeof changes['name'] !== 'undefined') {
    if(!(changes['name'] === value['name'])) {
      value = SendContactMessage({
        ...value,
        name: changes['name'],
      });
    }
  }
  if(typeof changes['company'] !== 'undefined') {
    if(!(changes['company'] === value['company'])) {
      value = SendContactMessage({
        ...value,
        company: changes['company'],
      });
    }
  }
  if(typeof changes['message'] !== 'undefined') {
    if(!(changes['message'] === value['message'])) {
      value = SendContactMessage({
        ...value,
        message: changes['message'],
      });
    }
  }
  if(typeof changes['email'] !== 'undefined') {
    if(!(changes['email'] === value['email'])) {
      value = SendContactMessage({
        ...value,
        email: changes['email'],
      });
    }
  }
  if(typeof changes['googleReCaptchaToken'] !== 'undefined') {
    if(!(changes['googleReCaptchaToken'] === value['googleReCaptchaToken'])) {
      value = SendContactMessage({
        ...value,
        googleReCaptchaToken: changes['googleReCaptchaToken'],
      });
    }
  }
  return value;
}
