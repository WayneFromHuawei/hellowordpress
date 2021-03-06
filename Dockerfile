# use a node base image
FROM wordpress:latest

# set maintainer
LABEL maintainer "wayne.wan@huawei.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:80 || exit 1

# tell docker what port to expose
EXPOSE 80
