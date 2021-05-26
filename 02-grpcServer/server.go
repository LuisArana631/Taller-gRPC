package main

import (
	"context"
	"fmt"
	"log"
	"net"
	pb "servergrpc/proto-grpc"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"google.golang.org/grpc"
)

const (
	port = ":50051"
)

type server struct {
	pb.UnimplementedGetInfoServer
}

func almacenar_comentario(comentario string) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	mongoclient, err := mongo.Connect(ctx, options.Client().ApplyURI("**ruta de conexión con mongo**"))
	if err != nil {
		log.Fatal(err)
	}

	databases, err := mongoclient.ListDatabaseNames(ctx, bson.M{})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(databases)

	Database := mongoclient.Database("tallerGRPC")
	Collection := Database.Collection("comentarios")

	var bdoc interface{}

	errb := bson.UnmarshalExtJSON([]byte(comentario), true, &bdoc)
	fmt.Println(errb)

	insertResult, err := Collection.InsertOne(ctx, bdoc)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(insertResult)
}

func (s *server) ReturnInfo(ctx context.Context, in *pb.RequestId) (*pb.ReplyInfo, error) {
	almacenar_comentario(in.GetId())
	fmt.Printf(">> Hemos recibido la data del cliente: %v\n", in.GetId())
	return &pb.ReplyInfo{Info: ">> Hola Cliente, he recibido el comentario: " + in.GetId()}, nil
}

func main() {
	escucha, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("Fallo al levantar el servidor: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterGetInfoServer(s, &server{})
	if err := s.Serve(escucha); err != nil {
		log.Fatalf("Fallo al levantar el servidor: %v", err)
	}
}
