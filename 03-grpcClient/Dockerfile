FROM golang:latest

WORKDIR /
COPY . .

RUN go mod download

EXPOSE 8000

CMD ["go", "run", "client.go"]