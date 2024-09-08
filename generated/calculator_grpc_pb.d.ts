// package: calculator.v1
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as calculator_pb from "./calculator_pb";

interface ICalculatorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    add: ICalculatorServiceService_IAdd;
}

interface ICalculatorServiceService_IAdd extends grpc.MethodDefinition<calculator_pb.AddRequest, calculator_pb.AddResponse> {
    path: "/calculator.v1.CalculatorService/Add";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<calculator_pb.AddRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.AddRequest>;
    responseSerialize: grpc.serialize<calculator_pb.AddResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.AddResponse>;
}

export const CalculatorServiceService: ICalculatorServiceService;

export interface ICalculatorServiceServer {
    add: grpc.handleUnaryCall<calculator_pb.AddRequest, calculator_pb.AddResponse>;
}

export interface ICalculatorServiceClient {
    add(request: calculator_pb.AddRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.AddResponse) => void): grpc.ClientUnaryCall;
    add(request: calculator_pb.AddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.AddResponse) => void): grpc.ClientUnaryCall;
    add(request: calculator_pb.AddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.AddResponse) => void): grpc.ClientUnaryCall;
}

export class CalculatorServiceClient extends grpc.Client implements ICalculatorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public add(request: calculator_pb.AddRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.AddResponse) => void): grpc.ClientUnaryCall;
    public add(request: calculator_pb.AddRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.AddResponse) => void): grpc.ClientUnaryCall;
    public add(request: calculator_pb.AddRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.AddResponse) => void): grpc.ClientUnaryCall;
}
