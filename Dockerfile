FROM postgres

RUN cd /home && mkdir pgdata && cd pgdata mkdir data
WORKDIR /home/pgdata/data

ENV POSTGRES_USER=labrancax 
ENV POSTGRES_PASSWORD=pass123
ENV POSTGRES_DB=clean_compliment
ENV PGDATA=/home/pgdata/data
