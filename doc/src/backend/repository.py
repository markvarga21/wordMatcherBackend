import redis

redis_host = 'redis-13833.c293.eu-central-1-1.ec2.cloud.redislabs.com'
redis_port = 13833
redis_username = 'default'
redis_password = 'WKgodsiY9vEE5aYlfIv8VuVu5VKnbgQr'

rf = redis.Redis(host=redis_host, port=redis_port, username=redis_username, password=redis_password, decode_responses=True)