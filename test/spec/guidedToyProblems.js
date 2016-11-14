describe('guidedToyProblems', function () {
    describe('countDown', function () {
		it('should exist', function () {
			expect(countDown).toBeDefined();
		})
		it('should log each number', function () {
      expect(console.log).toHaveBeenCalledWith(10);
      expect(console.log).toHaveBeenCalledWith(9);
      expect(console.log).toHaveBeenCalledWith(8);
      expect(console.log).toHaveBeenCalledWith(7);
      expect(console.log).toHaveBeenCalledWith(6);
      expect(console.log).toHaveBeenCalledWith(5);
      expect(console.log).toHaveBeenCalledWith(4);
      expect(console.log).toHaveBeenCalledWith(3);
      expect(console.log).toHaveBeenCalledWith(2);
			expect(console.log).toHaveBeenCalledWith(1);
		})
	})

	describe('filler', function () {
		it('should exist', function () {
			expect(filler).toBeDefined();
		})
		it('return an array filled with 1-10', function () {
			expect(filler()).toEqual([1,2,3,4,5,6,7,8,9,10]);
		})
	})

	describe('reverseArr', function () {
		it('should exist', function () {
      expect(reverseArr).toBeDefined();
		})
		it('should reverse an array', function () {
      expect(reverseArr([1,2,3])).toEqual([3,2,1]);
      expect(reverseArr(["great","I'm","cool"])).toEqual(["cool","I'm",'great']);
		})
	})

	describe('reverseStr', function () {
		it('should exist', function () {
			expect(reverseStr).toBeDefined();
		})

		it('should reverse a string', function () {
      expect(reverseStr('hi')).toEqual('ih');
      expect(reverseStr('friend')).toEqual('dneirf');
			expect(reverseStr('12345')).toEqual('54321');
		})
	})


	describe('evensOdds', function () {
		it('should exist', function () {
			expect(evensOdds).toBeDefined();
		})
		it('should return an array', function () {
			expect(evensOdds([1,2,3,4,5,6,7])).toEqual(jasmine.any(Array));
		})
		it('first element should be an array of evens', function () {
			expect(evensOdds([1,2,3,4,5,6,7])[0]).toEqual([2,4,6]);
		})

		it('second element should be an array of odds', function () {
			expect(evensOdds([1,2,3,4,5,6,7])[1]).toEqual([1,3,5,7]);
		})
	})


})
