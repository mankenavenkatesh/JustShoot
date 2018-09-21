
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Install Maven
Install Java 8
Install Spring
Install git
```

### Running on local
```
git clone https://github.com/mankenavenkatesh/LocationScout.git
cd LocationScoutBackend
mvn clean install
mvn spring-boot:run
http://localhost:8080
```

## Deployment

Notes about how to deploy this on a live system

```
cd LocationScoutBackend
Do changes and git commit 
git push heroku master
heroku open
```

##  Documentation

```
Swagger - https://shootingspots.herokuapp.com/swagger-ui.html#/
Apis - curl https://shootingspots.herokuapp.com/ 
H2 DB Console - 
```




## Built With

* [Maven](https://maven.apache.org/) - Dependency Management
* [Spring](https://spring.io/) - Application Framework

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

**Venkatesh Mankena** 

See also the list of [contributors](https://github.com/mankenavenkatesh/LocationScout/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

## References
* https://www.callicoder.com/spring-boot-spring-security-jwt-mysql-react-app-part-2/
