#!/usr/bin/env python
import time
import random

def pop_random(lst):
    idx = random.randrange(0,len(lst))
    return lst.pop(idx)

people = ['Mom', 'Dad', 'Mike', 'Betsy', 'Joe', 'Kristen', 'George', 'Greg', 'Mary', 'Zach', 'James']
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday (4th of July)']

for i in range(0, (len(people) - 3) // 2):
    person1 = pop_random(people)
    person2 = pop_random(people)
    day = pop_random(days)
    time.sleep(3)
    print("%s and %s are a pair. Their day is %s.\n" % (person1, person2, day))

time.sleep(2)
print("And the group of three is %s, %s, and %s. Their day is %s.\n" % (people[0], people[1], people[2], days[0]))
