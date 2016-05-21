# docker-networking-example
An example of a how two networked containers can communicate by container name on a bridge network


# TO RUN
```
docker network create example
docker-compose up
```

Should not see any connection errors as the example node process is connecting to rethinkdb running in a seperate container by using it's container name.  

I created this to test docker-osx implmentations to see if docker bridge networked containers resolve connections by container names.
