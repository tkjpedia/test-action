# Short URL Backend

This is a simple shortlink / shorturl project. This can shorten your long url to be very short.

This project written in javascript, built using expressjs framework and some library.

## Usage

rename .env.example to .env

set mongodb uri and port in env file

### create shortlink

#### request

```bash
Method: post
Content-Type: application/json
Url: host:port/api/shorturl
```

```json
{
    "url": "https://www.tkjpedia.com"
}
```

#### response 

```json
{
    "original_url": "https://www.tkjpedia.com",
    "short_url": "E_KXV77"
}
```

access using web browser http://host:port/E_KXV77 will be redirect to https://www.tkjpedia.com


## Docker

### build with dockerfile

clone this repository

```bash
git clone https://github.com/man20820/shorturl-backend.git
```

rename .env.example to .env

set mongodb uri and port in env file

build docker image and run the container

```bash
docker build . -t man20820/backend-shorturl
docker run -p 80:80 -d man20820/backend-shorturl
```