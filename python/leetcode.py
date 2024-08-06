class Solution:
    def kidsWithCandies(self, candies, extraCandies):
        res = []
        _max = max(candies)
        for i in candies:
            if i + extraCandies >= _max:
                res.append(True)
            else:
                res.append(False)
        return res
    
print(Solution().kidsWithCandies([2,3,5,1,3], 3))