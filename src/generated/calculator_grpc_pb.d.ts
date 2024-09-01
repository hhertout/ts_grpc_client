// package: calculator
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as calculator_pb from "./calculator_pb";

interface ICalculatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    add: ICalculatorService_IAdd;
}

interface ICalculatorService_IAdd extends grpc.MethodDefinition<calculator_pb.CalculationRequest, calculator_pb.CalculationResponse> {
    path: "/calculator.Calculator/Add";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<calculator_pb.CalculationRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.CalculationRequest>;
    responseSerialize: grpc.serialize<calculator_pb.CalculationResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.CalculationResponse>;
}

export const CalculatorService: ICalculatorService;

export interface ICalculatorServer {
    add: grpc.handleUnaryCall<calculator_pb.CalculationRequest, calculator_pb.CalculationResponse>;
}

export interface ICalculatorClient {
    add(request: calculator_pb.CalculationRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculationResponse) => void): grpc.ClientUnaryCall;
    add(request: calculator_pb.CalculationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculationResponse) => void): grpc.ClientUnaryCall;
    add(request: calculator_pb.CalculationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculationResponse) => void): grpc.ClientUnaryCall;
}

export class CalculatorClient extends grpc.Client implements ICalculatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public add(request: calculator_pb.CalculationRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculationResponse) => void): grpc.ClientUnaryCall;
    public add(request: calculator_pb.CalculationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculationResponse) => void): grpc.ClientUnaryCall;
    public add(request: calculator_pb.CalculationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.CalculationResponse) => void): grpc.ClientUnaryCall;
}
