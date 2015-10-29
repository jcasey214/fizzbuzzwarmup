var code = require('../main');
var expect = require('chai').expect;
describe('fizzbuzzfxn', function(){
  it('should return a comma separated string of values from start to end',function(){
		expect(code.fizzbuzzfxn(1, 2)).to.equal("1, 2")
	});
	 it('should return Fizz for multiples of 3',function(){
		expect(code.fizzbuzzfxn(1,3)).to.equal("1, 2, Fizz");
    expect(code.fizzbuzzfxn(6,9)).to.equal("Fizz, 7, 8, Fizz");
	});
	it('should return Buzz for multiples of 5', function(){
		expect(code.fizzbuzzfxn(1,5)).to.equal("1, 2, Fizz, 4, Buzz");
    expect(code.fizzbuzzfxn(5,10)).to.equal("Buzz, Fizz, 7, 8, Fizz, Buzz");
	});
	it('should return FizzBuzz for multiples of 3 and 5', function(){
		expect(code.fizzbuzzfxn(1,15)).to.equal("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
		expect(code.fizzbuzzfxn(12,25)).to.equal("Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz");

	})
});
