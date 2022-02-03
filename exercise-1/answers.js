function sayHello () {
    return "Hello world!"
}

function isString (input) {
    if (typeof input === 'string') {
        return true
    } else {
        return false
    }
}

function isNumber (input) {
    if (typeof input === 'number') {
        return true
    } else {
        return false
    }
}

function isArray (input) {
    if (Array.isArray(input)) {
        return true
    } else {
        return false
    }
}

function isObject (input) {
    // console.log(input instanceof Object)
    if (typeof input === 'object' && !(Array.isArray(input))) {
        if (input != null) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function isFunction (input) {
    if (typeof input === 'function') {
        return true
    } else {
        return false
    }
}