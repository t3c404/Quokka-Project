# Quokka-Project
Experimental with Microservices. Thanks to [apox](https://github.com/apox64) to provide the md5breaker!

![alt text](https://github.com/t3c404/Quokka-Project/blob/master/png_files/frontend.png)
---

## Installation
1. clone the repo: `git clone https://github.com/t3c404/Quokka-Project.git`
2. clone the repo for the base64-decoder: `git clone https://github.com/t3c404/base64-decoder.git`
3. clone the repo for the md5breaker: `git clone https://github.com/apox64/md5breaker.git`
4. all repos have to be in the same directory, otherwise `docker-compose-build` does not work

---

## Run with Docker-Compose
1. install [docker-compose](https://docs.docker.com/compose/install/)
2. go to the Quokka-Projekt directory
3. run: `docker-compose build` (just once)
4. run: `docker-compose up`
5. service running at: `0.0.0.0:5555`

---

## Usage

1. **Break:** decode input
2. **Add to DB:** hash the cleartext and add it to the database
3. **Init DB:** load Database
4. **Clear DB:** clear the database (no more md5 hashes in the database after clearing)
