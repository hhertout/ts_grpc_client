// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var calculator_pb = require('./calculator_pb.js');

function serialize_calculator_CalculationRequest(arg) {
  if (!(arg instanceof calculator_pb.CalculationRequest)) {
    throw new Error('Expected argument of type calculator.CalculationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_CalculationRequest(buffer_arg) {
  return calculator_pb.CalculationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_CalculationResponse(arg) {
  if (!(arg instanceof calculator_pb.CalculationResponse)) {
    throw new Error('Expected argument of type calculator.CalculationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_CalculationResponse(buffer_arg) {
  return calculator_pb.CalculationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorService = exports.CalculatorService = {
  add: {
    path: '/calculator.Calculator/Add',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.CalculationRequest,
    responseType: calculator_pb.CalculationResponse,
    requestSerialize: serialize_calculator_CalculationRequest,
    requestDeserialize: deserialize_calculator_CalculationRequest,
    responseSerialize: serialize_calculator_CalculationResponse,
    responseDeserialize: deserialize_calculator_CalculationResponse,
  },
};

exports.CalculatorClient = grpc.makeGenericClientConstructor(CalculatorService);
