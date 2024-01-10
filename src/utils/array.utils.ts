import _ from "lodash";

export const arrayIncludes = (value: any, array: Array<any>) => {
    return array.find((item) => item === value) !== null;
};

export const arrayIncludesAnyFromArray = (
    array1: Array<any>,
    array2: Array<any>
) => {
    return _.intersection([array1, array2]).length > 0;
};
