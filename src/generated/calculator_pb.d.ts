// package: calculator
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CalculationRequest extends jspb.Message { 
    getA(): number;
    setA(value: number): CalculationRequest;
    getB(): number;
    setB(value: number): CalculationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CalculationRequest): CalculationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculationRequest;
    static deserializeBinaryFromReader(message: CalculationRequest, reader: jspb.BinaryReader): CalculationRequest;
}

export namespace CalculationRequest {
    export type AsObject = {
        a: number,
        b: number,
    }
}

export class CalculationResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): CalculationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CalculationResponse): CalculationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculationResponse;
    static deserializeBinaryFromReader(message: CalculationResponse, reader: jspb.BinaryReader): CalculationResponse;
}

export namespace CalculationResponse {
    export type AsObject = {
        result: number,
    }
}
