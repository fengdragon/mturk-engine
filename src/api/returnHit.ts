import axios from 'axios';
import { API_URL } from '../constants';

export type HitReturnStatus = 'repeat' | 'success' | 'error';

export const sendReturnHitRequest = async (hitId: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/mturk/return?hitId=${hitId}&inPipeline=false`,
      { responseType: 'document' }
    );
    const html: Document = response.data;
    return validateHitReturn(html);
  } catch (e) {
    return 'error';
  }
};

const validateHitReturn = (html: Document): HitReturnStatus => {
  const noAssignedHitsContainer = html.querySelector('td.error_title');

  if (!!noAssignedHitsContainer) {
    return 'success';
  }

  const alertBox = html.querySelector('#alertboxHeader');
  return !!alertBox ? validateAlertBoxText(alertBox) : 'error';
};

const validateAlertBoxText = (el: Element | undefined): HitReturnStatus => {
  if (el === undefined) {
    return 'error';
  }

  const text = (el as HTMLSpanElement).innerText.trim();
  switch (text) {
    case 'The HIT has been returned.':
      return 'success';
    case 'You have already returned this HIT.':
      return 'repeat';
    default:
      return 'error';
  }
};