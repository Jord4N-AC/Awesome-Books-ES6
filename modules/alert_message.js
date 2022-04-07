import { alertMessage } from './varibles.js';

export function highLightMessage() {
  alertMessage.style.transform = 'scale(1.15)';
}

export function noHighlightMessage() {
  alertMessage.style.transform = 'scale(1)';
}