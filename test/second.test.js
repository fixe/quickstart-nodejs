'use strict';

const expect = require('chai').expect;

describe('Second Unit Test', () => {
    it('works', () => {
        const main = require('../');
        const result = main();

        expect(result).to.equal('Hello Node!!');
    });
});
