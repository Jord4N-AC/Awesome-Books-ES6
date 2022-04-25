import { alertMessage } from './varibles.js';

export const highLightMessage = () => {
  alertMessage.style.transform = 'scale(1.15)';
}

export const noHighlightMessage = () => {
  alertMessage.style.transform = 'scale(1)';
}