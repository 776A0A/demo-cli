module.exports = function merge(o1, o2) {
    const keys = Object.keys(o2)

    const obj = { ...o1 }

    for (let index = 0; index < keys.length; index++) {
        const key = keys[index]
        if (!obj[key]) {
            obj[key] = o2[key]
        } else if (
            typeof o2[key] === 'object' &&
            typeof obj[key] === 'object'
        ) {
            obj[key] = merge(obj[key], o2[key])
        }
    }

    return obj
}