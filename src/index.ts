import { credentials, Metadata } from "@grpc/grpc-js";
import { CalculatorClient } from "./generated/calculator_grpc_pb";
import {
  CalculationRequest,
  CalculationResponse,
} from "./generated/calculator_pb";

async function main() {
  const client = new CalculatorClient(
    "localhost:8080",
    credentials.createInsecure()
  );

  // set metadata, acting like header
  const metadata = new Metadata();
  metadata.set("x-api-key", "azertyuiop");

  // configure request
  const req = new CalculationRequest().setA(1).setB(1);

  const response = await new Promise((resolve, reject) => {
    client.add(req, metadata, (error: any, response: CalculationResponse) => {
      if (error) reject(error);
      if (response) {
        resolve(response.toObject());
      }

      //@ts-ignore
      client.close();
    });
  });

  console.log(response)
}

main();
