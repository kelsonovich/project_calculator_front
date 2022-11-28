export default class Utils {
    
    static formatSize(bytes, decimals) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 || isNaN(parseInt(decimals)) ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    
    static isArray(val) {
        return Array.isArray(val)
    }
    
    static isPlainObject(val) {
        if (toString.call(val) !== '[object Object]') {
            return false;
        }
        const prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
    }
    
    static isFunction(val) {
        return toString.call(val) === '[object Function]';
    }
    
    static mapToObject(arr, callback) {
        if (!this.isArray(arr) || !this.isFunction(callback)) {
            return {}
        }
        return arr.reduce((obj, val) => {
            callback(obj, val)
            return obj;
        }, {})
    }

    static hasProperty(value, prop){
        return Object.prototype.hasOwnProperty.call(value, prop)
    }
    
    static formatNumber(number, { decimals, decimal_separator, thousand_separator, prefix, postfix }) {
        number = !isFinite(+number) ? 0 : +number
        decimals = !isFinite(+decimals) ? 0 : Math.abs(decimals);
        decimal_separator = decimal_separator === undefined ? ',' : decimal_separator;
        thousand_separator = thousand_separator === undefined ? ' ' : thousand_separator;
        
        let s = '',
            toFixedFix = function(n, precision) {
                let k = Math.pow(10, precision);
                return '' + (Math.round(n * k) / k).toFixed(precision);
            };
    
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        s = (decimals ? toFixedFix(number, decimals) : '' + Math.round(number)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, thousand_separator);
        }
        if ((s[1] || '').length < decimals) {
            s[1] = s[1] || '';
            s[1] += new Array(decimals - s[1].length + 1).join('0');
        }
        s = s.join(decimal_separator);
        if (typeof prefix === 'string' && prefix !== '') {
            s = prefix + ' ' + s;
        }
        if (typeof postfix === 'string' && postfix !== '') {
            s = s + ' ' + postfix;
        }
        return s;
    }
    
    static randomString(length) {
        let s = '',
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            charactersLength = characters.length;
        
        for (let i = 0; i < length; i++) {
            s += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return s;
    }
}