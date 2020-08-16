module.exports.isEmpty = (value) => {
    if(
        value === "" ||
        value === null ||
        value === "null" ||
        value === undefined ||
        (
            value !== null &&
            typeof value === "object" &&
            !Object.keys(value).length
        )
    ) {
        return true;
    } else {
        return false;
    }
};

module.exports.isParamsEmpty = (obj) => {
    let emptyProp = '';
    for(const prop in obj) {
        console.log(`${prop}: ${obj[prop]}`);
        if(this.isEmpty(obj[prop])) {
            emptyProp.push(prop);
        }
    }  
    throw new Error(`Empty ${emptyProp.join(', ')} property.`);
}