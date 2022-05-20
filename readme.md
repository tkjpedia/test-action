# Short URL Backend

This is a simple shortlink / shorturl project. This can shorten your long url to be very short.

This project written in javascript, built using expressjs framework and some library.

## Usage

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
