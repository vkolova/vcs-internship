from datetime import datetime as dt
from time import sleep


def performance(file_name):
    def wrapper(fn):
        time_start = dt.now()
        fn()
        execution_time = (dt.now() - time_start).total_seconds()
        with open(file_name, 'a') as f:
            f.write(
                'function {} was called and took {} seconds \
                to complete\n'.format(fn.__name__, execution_time))
        return fn

    return wrapper


@performance('log.txt')
def something_heavy():
    sleep(2)
    return "I am done!"


heavy = something_heavy()
assert heavy == 'I am done!', 'Error in function something_heavy()'
print(heavy)
