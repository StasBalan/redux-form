import React from 'react';

export const requiredInput = ( input ) => {
    return input ? undefined : `Trebuetsya vvod`;
};
export const correctInput = ( input ) =>
    input !== 'Stasik' ? 'Неправильное имя пользователя' : undefined;

export const matchInput = ( input, allInput ) => {
   return input === allInput.password ? undefined : 'Not Valid password';
};