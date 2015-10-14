
/**
 * Pad a string with the default options. In time we should pass an options object so each call can override the defaults
 * @ignore
 * @param  {int} num the number to be pad
 * @return {string}     the new string
 */
var pad = function(num) {
    num = num.toString().split('');
    var defaults = {
        padTo: 2,
        position: 0,
        char: '0'
    };

    if (num.length < defaults.padTo) {
        for (var i=num.length; i<defaults.padTo; i++) {
            num.unshift(defaults.char);
        }
    }

    return num.join('');
};

/*
Static Variables
 */
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    mths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    dys = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'],
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var __ = {
    F: function(d) {
        return months[d.getMonth()];
    },
    m: function(d) {
        return pad(d.getMonth()+1);
    },
    M: function(d) {
        return mths[d.getMonth()];
    },
    Y: function(d) {
        return d.getFullYear();
    },
    d: function(d) {
        return pad(d.getDate());
    },
    D: function(d) {
        return dys[d.getDay()];
    },
    l: function(d) {
        return days[d.getDay()];
    }
};

/**
 * Date utility initially used for inkincardine.com
 * @module datejs
 */
module.exports = {

    /*
    Default of course is 0, but if you want to change it to something different you can do so here.
     */
    weekStartsOn: 1, // monday

    /**
     * Checks if a date is in this week
     * @param  {Date}  target date we're looking for
     * @param  {Int}  offset day offset, used with the isNextWeek, so that we can use the same logic, but just add 7 to the equations.
     * @return {Boolean}
     */
    isThisWeek: function(target, offset) {
        offset = offset || 0;

        var now = new Date(),
            dayInMs = 1000 * 60 * 60 * 24,
            start = (now.getDay() - this.weekStartsOn < 0 ? -6 : now.getDay() - this.weekStartsOn) + offset,
            end = start + 6,
            diff = Math.round(((target.getTime() - now.getTime()) / dayInMs)) + (now.getDay());

        return diff >= start && diff <= end;
    },

    /**
     * Gets the first day of the week.
     * @param  {Date} date a target date, or if not suplied, it'll be today's date.
     * @return {Date}      first day of the week
     */
    getStartOfWeek: function(date) {
        date = date || new Date();

        var daysInMs = 24*60*60*1000,
            diffToStart = (date.getDay() - this.weekStartsOn) * daysInMs;

        date.setTime(date.getTime() - diffToStart);
        
        return date;
    },

    /**
     * Is a specified date in next week
     * @param  {Date}  target date that we're comparing
     * @return {Boolean}        if it is or isnt in next week
     */
    isNextWeek: function(target) {
        return this.isThisWeek(target, 7);
    },

    /**
     * Is a supplied date today?
     * @param  {Date}  date the target date
     * @return {Boolean}      it is or it isnt
     */
    isToday: function(date) {
        return date.toDateString() === new Date().toDateString();
    },

    /**
     * Is a supplied date tomorrow?
     * @param  {Date}  date is the date tomorrow
     * @return {Boolean}      it either is or isnt tomorrow
     */
    isTomorrow: function(date) {
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        return date.toDateString() === tomorrow.toDateString();
    },

    /**
     * Is the current time between two dates?
     * @param  {Date}  left  start of date range
     * @param  {Date}  right end of date range
     * @return {Boolean}       if it's in the range or not.
     */
    isNowBetween: function(left, right) {
        var now = new Date();
        return now >= left && now <= right;
    },

    /**
     * Simple date formatting
     * @param  {Date} date   date we're going to format
     * @param  {String} format formatting string
     * @return {String}        formatted date.
     */
    format: function(date, format) {
        format = format || 'full';
        var formatted;

        if ('date' === format) {
            formatted = date.getFullYear()+'-'+pad(date.getMonth()+1) + '-' + pad(date.getDate());
        } else if ('time' === format) {
            formatted = pad(date.getHours()) + ':' + pad(date.getMinutes());
        } else if ('full' === format) {
            formatted = pad(date.getHours())+':' + pad(date.getMinutes()) + ' &mdash; ' + months[date.getMonth()] + ' ' + date.getDate() + ', '+date.getFullYear(); 
        } else {
            var token = '',
                pointer = 0,
                size = 1,
                isAlpha = new RegExp('\\w+', 'i'),
                parsed = '';

            while ((pointer+size) <= format.length) {
                token = format.substring(pointer, pointer+size);
                
                if (isAlpha.test(token)) {
                    if (!__[token]) {
                        size++;
                    } else {
                        parsed += __[token](date);
                        pointer = pointer + size;
                        size = 1;
                    }
                } else {
                    parsed += token;
                    pointer++;
                    size = 1;
                }
            }

            formatted = parsed + token;
        }

        return formatted;
    }
};