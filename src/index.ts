import { credentials } from "@grpc/grpc-js";
import { CalculatorServiceClient } from "../generated/calculator_grpc_pb";
import { AddRequest, AddResponse } from "../generated/calculator_pb";
import GrpcClient from "./grpcClient";

async function main(client: CalculatorServiceClient) {
  const grpcClient = new GrpcClient(client);
  grpcClient.addMetadata({ "x-api-key": "azertyuiop" });
  const req = new AddRequest().setA(1).setB(1);
  const res = await grpcClient.request<AddRequest, AddResponse>("add", req);

  await grpcClient.close();
  return res;
}

async function bench() {
  const times: number[] = [];
  const requests = 1000;
  let finished = 0;
  let res = { result: 0 };

  for (let i = 0; i < requests; i++) {
    const now = new Date();
    try {
      const client = new CalculatorServiceClient(
        "localhost:4001",
        credentials.createInsecure()
      );
      res.result = (await main(client)).toObject().result;

      finished++;
    } catch (error) {
      console.error(`Error during request ${i}:`, error);
      continue;
    }

    const elapsed = new Date().getTime() - now.getTime();
    times.push(elapsed);
  }

  const average = times.reduce((a, b) => a + b, 0) / requests;
  const total = times.reduce((a, b) => a + b, 0);

  console.log(`Finished ${finished} requests`);
  console.log(`Average time: ${average}ms, Total time: ${total}ms`);

  return res;
}

bench()
  .then(res => console.log("Response is =>", res.result))
  .catch(error => console.error("Error in bench:", error));
