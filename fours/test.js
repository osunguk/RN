function getUser(id) {
    return {
        id,
        email: `user${id}@test.com`
    };
}

calc = (a, b) => a + b

function throwError () {
    throw new Error('you are using this')
}

test('return a user object', () => {
    expect(getUser(1)).toEqual({
        id: 1,
        email: 'user1@test.com'
    });
});


test('number 0 is falsy but string 0 is truthy', () => {
    expect(0).toBeFalsy();
    expect('0').toBeTruthy();
})


test('array', () => {
    const colors = ['Red', 'Yellow', 'Blue'];
    expect(colors).toHaveLength(3);
    expect(colors).toContain('Yellow');
    expect(colors).not.toContain('Green');
});

test('two plus two', () => {
    expect(calc(1,2)).toBe(3)
})


test('error test', () => {
    expect(throwError).toThrow();
    expect(throwError).toThrow(Error);
})