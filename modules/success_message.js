import { successMessage } from './varibles.js';

export default function showHideSuccessMessage(oldLength, newLegth) {
    if(newLegth > oldLength) {
        successMessage.style.display = 'initial';
        setTimeout(() => { successMessage.style.display = 'none'; }, 1400);
    } else {
        successMessage.style.display = 'none';
    }
}
