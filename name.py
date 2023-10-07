def howSum(target,number,memo={}):
    if ( target in memo):
         return memo[target]
    if (target == 0):
        return []
    if(target < 0):
        return None
    for num in number:
        reminder = target - num
        reminderResult = howSum(reminder,number,memo)
        if reminderResult is not None:
            memo[target] = reminderResult + [num]
            return memo[target]
    memo[target] = None
    return None

print(howSum(96,[5,2,1,6]))