[![Coverage Status](https://coveralls.io/repos/github/tsears/Facetious/badge.svg?branch=master)](https://coveralls.io/github/tsears/Facetious?branch=master) [![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/tsears/Facetious) [![Build Status](https://travis-ci.org/tsears/Facetious.svg?branch=master)](https://travis-ci.org/tsears/Facetious)

# Facetious #

IRC bot for snoonet ##ils.  Built with nodejs, runs in docker.

## Run Dev ##
~~~sh
docker-compose -f docker-compose/dev.yml up
~~~

## Included Commands ##

* !Befriend - befriending a user will cause Facetious to respond to commands.
* !Friends - list all users Facetious will respond to
* !Quit - Disconnect (restricted to admins)
* !Sit - Sit action
* !Speak - Speak action

## Included Reactors ##

* Duck Reactor - reacts to a duck being spawned by gonzobot.
* Name Reactor - reacts to his own name
