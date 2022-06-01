# Short URL Backend

This is a simple shortlink / shorturl project. This can shorten your long url to be very short.

This project written in javascript, built using expressjs framework and some library.

## Usage

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
    "short_url": "4AUDdF_"
}
```

access using web browser http://host:port/4AUDdF_ will be redirect to https://www.tkjpedia.com


## Docker

### download via docker registry

```bash
docker pull man20820/backend-shorturl
docker run -p 80:80 -d man20820/backend-shorturl
```

### build with dockerfile (recomended)

```bash
docker build . -t man20820/backend-shorturl
docker run -p 80:80 -d man20820/backend-shorturl
```