export const required = value => {
    if (value) return undefined;

    return "Поле не должно быть пустым";
}


export const maxLengthCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) return "Максимальное число "+maxLenght+" символов";
    return undefined;
}

export const minLengthCreator = (minLenght) => (value) => {
    if (value.length < minLenght) return "Минимальное число "+minLenght+" symbols";
    return undefined;
}