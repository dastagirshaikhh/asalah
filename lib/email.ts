import { init } from '@emailjs/browser';

export const EMAILJS_SERVICE_ID = "service_1rdboxl";
export const EMAILJS_TEMPLATE_ID = "template_kpmhl7h";
export const EMAILJS_PUBLIC_KEY = "XpK474YJyvr3Ej17g"

export const initEmailJS = () => {
  init(EMAILJS_PUBLIC_KEY);
};