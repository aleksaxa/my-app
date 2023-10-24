export const required = value => {
    if (value) return undefined;

    return "Field is required";
}


export const maxLengthCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) return "Max lenght is "+maxLenght+" symbols";
    return undefined;
}

export const minLengthCreator = (minLenght) => (value) => {
    if (value.length < minLenght) return "Min lenght is "+minLenght+" symbols";
    return undefined;
}