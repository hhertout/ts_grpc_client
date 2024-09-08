import { Metadata } from "@grpc/grpc-js";
import * as jspb from "google-protobuf";

export default class GrpcClient<T extends new (...args: any[]) => any> {
  metadata: Metadata;
  #client: InstanceType<T>;

  constructor(client: InstanceType<T>) {
    this.#client = client;
    this.metadata = new Metadata();
  }

  /**
   *
   * Adds metadata to the gRPC client.
   * @param metadataObj An object containing metadata key-value pairs.
   * @returns void
   * @example
   * grpcClient.addMetadata({ "my-key": "my-value" });
   *
   */
  addMetadata(metadataObj: Record<string, string>) {
    Object.entries(metadataObj).forEach(([key, value]) => {
      this.metadata.set(key, value);
    });
  }

  /**
   * Makes a gRPC request.
   * @param method The method name to call on the gRPC client.
   * @param args The arguments to pass to the gRPC method.
   * @returns A promise that resolves with the response from the gRPC method.
   */
  async request<F extends jspb.Message, G extends jspb.Message>(
    method: keyof InstanceType<T>,
    args: F
  ): Promise<G> {
    //console.time(`GRPC REQUEST on ${String(method)}`);
    const response = await new Promise<G>((resolve, reject) => {
      if (typeof this.#client[method] !== "function") {
        return reject(
          new Error(`Method ${String(method)} does not exist on client`)
        );
      }

      (this.#client[method] as any)(
        args,
        this.metadata,
        (error: Error | null, response: G | null) => {
          if (error) {
            return reject(error);
          }
          if (response) {
            return resolve(response);
          }
          reject(new Error("No response received"));
        }
      );
    });

    //console.timeEnd(`GRPC REQUEST on ${String(method)}`);
    return response;
  }

  /**
   * Closes the gRPC client.
   * @returns void
   * @example
   * grpcClient.close();
   */
  async close() {
    return await new Promise((resolve, reject) => {
      try {
        this.#client.close();
        resolve(true);
      } catch (error) {
        console.error("Error closing client:", error);
        reject(error);
      }
    });
  }
}
