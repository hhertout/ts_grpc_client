// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var calculator_pb = require('./calculator_pb.js');

function serialize_calculator_v1_AddRequest(arg) {
  if (!(arg instanceof calculator_pb.AddRequest)) {
    throw new Error('Expected argument of type calculator.v1.AddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_v1_AddRequest(buffer_arg) {
  return calculator_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_v1_AddResponse(arg) {
  if (!(arg instanceof calculator_pb.AddResponse)) {
    throw new Error('Expected argument of type calculator.v1.AddResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_v1_AddResponse(buffer_arg) {
  return calculator_pb.AddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  add: {
    path: '/calculator.v1.CalculatorService/Add',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.AddRequest,
    responseType: calculator_pb.AddResponse,
    requestSerialize: serialize_calculator_v1_AddRequest,
    requestDeserialize: deserialize_calculator_v1_AddRequest,
    responseSerialize: serialize_calculator_v1_AddResponse,
    responseDeserialize: deserialize_calculator_v1_AddResponse,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
