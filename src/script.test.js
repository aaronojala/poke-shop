const { dayOfTheWeek, isFunction } = require('./script');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/29/2021') );
    expect( day ).toBe('Monday');
});

describe('Test if functions are defined', ()=>{
    test('function isFunction is defined', ()=>{
        expect(isFunction).toBeDefined();
    });
});