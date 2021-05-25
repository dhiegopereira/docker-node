# docker-node
## version docker and docker-compose
    $ sudo docker -v
    $ sudo docker-compose -v
## if you don't have the docker
    [Docker](https://docs.docker.com/engine/install/ubuntu/) -Install docker.
    [Docker-compose](https://docs.docker.com/compose/install/) -Install docker-compose
## start with Dockerfile
    $ sudo docker run -p 3000:3000 -d diego/dockernode
## start with docker-compose.yml
    $ sudo docker-compose up -d  

## show container docker
    $ sudo docker ps

## stop container docker
    $ sudo docker stop <CONTAINER ID>

## remove container docker
    $ sudo docker rm <CONTAINER ID>
 
