# docker-networking-example
An example of a how two networked containers can communicate by container name on a bridge network


# TO RUN
```
docker network create example
docker-compose up
```

Should not see an connection errors as the example node process is connecting to rethinkdb running in a seperate container by using it's container name
