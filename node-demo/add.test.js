const add = require('./add');
const expect = require('chai').expect;

describe('add 方法测试', () => {
    it('1+1应该=2', () => {
        expect(add(1, 1)).to.be.equal(2);
    });
    it('3+-3应该=0', function(){
        expect(add(3,-3)).to.be.equal(0);
    });
});


