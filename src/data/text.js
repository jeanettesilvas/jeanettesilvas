import { en_US } from './locales';

let text = { en_US };

export function getText() {
    let locale = 'en_US'; // TODO: determine actual locale

    return text[locale];
}
