import { credentials } from "@grpc/grpc-js";
import { CalculatorServiceClient } from "../generated/calculator_grpc_pb";
import { AddRequest } from "../generated/calculator_pb";
import GrpcClient from "./grpcClient";

async function main() {
  const client = new CalculatorServiceClient(
    "localhost:4000",
    credentials.createInsecure()
  );
  const grpcClient = new GrpcClient(client);
  grpcClient.addMetadata({ "x-api-key": "azertyuiop" });
  const req = new AddRequest().setA(1).setB(1);
  const res = await grpcClient.request("add", req);
  grpcClient.end();

  console.log(res);
}

main();
