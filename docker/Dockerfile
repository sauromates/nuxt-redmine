FROM docker.io/bitnami/redmine:5

COPY --link ./nginx.conf.erb /opt/bitnami/redmine/nginx.conf.erb
COPY --link ./run.sh /opt/bitnami/scripts/redmine/run.sh

RUN chmod u+x /opt/bitnami/scripts/redmine/run.sh

CMD ["/opt/bitnami/scripts/redmine/run.sh"]
