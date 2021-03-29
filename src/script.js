exports.dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Mnday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
};

exports.isFunction = () =>{
    return 'this is a function';
};
