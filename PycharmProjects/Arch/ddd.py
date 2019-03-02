def divide(x, y):
    print 'entering divide'
    try:
        return x/y
    except:
        print 'error'
    else:
        print 'no error'
    finally:
        print 'exit'

print divide(1, 1)
print divide(1, 0)