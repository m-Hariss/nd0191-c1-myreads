// Utils


export const listToObjectByKeyValue = (list, key) => {
    const obj = {};

    list.forEach(item => {
        obj[item[key]] = obj[item[key]] || [];
        obj[item[key]].push(item);
    });

    return obj;
};
