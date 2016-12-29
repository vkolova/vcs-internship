from sys import argv

first, second = ARGV
prompt = ': '

print "Hi %s, I'm the %s script." % (second, script)
print "I'd like to ask you a few questions."
print "Do you like me %s?" % second
likes = raw_input(prompt)

print "Where do you live %s?" % second
lives = raw_input(prompt)

print "What kind of computer do you have?"
computer = raw_input(prompt)

print """
Alright, so you said %r about liking me.
You live in %r.  Not sure where that is.
And you have a %r computer.  Nice.
""" % (likes, lives, computer)
