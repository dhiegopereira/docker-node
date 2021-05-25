# docker-node
## Version docker and docker-compose
    $ sudo docker -v
    $ sudo docker-compose -v
## If you don't have the docker
* [Docker](https://docs.docker.com/engine/install/ubuntu/) - Install docker.
* [Docker-compose](https://docs.docker.com/compose/install/) - Install docker-compose
## Start with Dockerfile
    $ sudo docker run -p 3000:3000 -d diego/dockernode
## Start with docker-compose.yml
    $ sudo docker-compose up -d  
## Show container docker
    $ sudo docker ps
## Stop container docker
    $ sudo docker stop <CONTAINER ID>
## Remove container docker
    $ sudo docker rm <CONTAINER ID>
## Built with:

* [Nodejs](https://nodejs.org/en/) -Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
## Author:

* **Diego Pereira** - [LinkedIn](https://www.linkedin.com/in/diegopereirati/)

## Licença
This project is licensed under the MIT license - see [LICENSE.md](LICENSE.md) for more information.
