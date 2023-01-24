import utils from '@/assets/js/utils'
import {useToast} from "vue-toastification";

const toast = useToast();

class ApiError {
    value = null;

    get isArray() {
        return utils.isArray(this.value)
    }

    get isObject() {
        return utils.isPlainObject(this.value)
    }

    constructor(data) {
        if (typeof data === 'string' && data !== '') {
            this.value = [data];
        } else if (utils.isArray(data) && data.length > 0) {
            this.value = data;
        } else if (utils.isPlainObject(data)) {
            let value = {},
                hasValue = false;
            for (let key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const errors = data[key];
                    if (typeof errors === 'string') {
                        value[key] = [errors];
                        hasValue = true;
                    } else if (utils.isArray(errors)) {
                        value[key] = errors;
                        hasValue = true;
                    }
                }
            }
            if (hasValue) {
                this.value = data;
            }
        }

        if (this.value === null) {
            this.value = ['Ошибка выполнения запроса'];
        } else {
            toast.error(this.value[0]);
        }
    }

    getMessage(key, params) {
        if (utils.isPlainObject(key) && params === undefined) {
            params = key;
            key = null;
        }
        if (!utils.isPlainObject(params)) {
            params = {};
        }
        if (typeof params.separator !== 'string') {
            params.separator = '<br /> ';
        }
        if (!utils.isArray(params.include)) {
            params.include = null;
        }
        if (!utils.isArray(params.exclude)) {
            params.exclude = null;
        }
        if (key) {
            if (this.isObject) {
                if (Object.prototype.hasOwnProperty.call(this.value, key)) {
                    return this.value[key].join(params.separator);
                }
            }
            return null;
        }
        if (this.isArray) {
            return this.value.join(params.separator);
        } else if (this.isObject) {
            let message = [];
            for (let key in this.value) {
                if (Object.prototype.hasOwnProperty.call(this.value, key)) {
                    if (params.include !== null) {
                        if (params.include.indexOf(key) < 0) {
                            continue;
                        }
                    }
                    if (params.exclude !== null) {
                        if (params.exclude.indexOf(key) >= 0) {
                            continue;
                        }
                    }
                    message.push(this.value[key]);
                }
            }
            if (message.length > 0) {
                return message.join(params.separator);
            }
        }
        return null;
    }
}

export default class ApiResponse {
    status = false;
    error = null;
    result = null;
    message = null;
    code = null;

    get isSuccess() {
        return this.status
    }

    constructor(json, code) {
        this.code = code;
        if (json) {
            if (json.status === true) {
                // if (json.success === true) {
                this.status = true;
                this.result = json.result;
                this.message = json.message;
            } else {
                if (json.data && json.data.errors) {
                    this.result = json.data.errors;
                }
                if (json.data && json.data.message) {
                    this.error = new ApiError(json.data.message);
                }
            }
        } else {
            this.error = new ApiError();
        }
    }

    static success(result) {
        return new ApiResponse({
            status: true,
            result: result ? result : null
        })
    }

    static fail(error) {
        return new ApiResponse({
            status: false,
            error: new ApiError(error)
        })
    }
}