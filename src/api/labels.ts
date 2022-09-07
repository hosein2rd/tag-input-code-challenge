import { createServer } from "miragejs";
import labels from "../data.json";
import { Label } from "../types";
import fuzzysort from "fuzzysort";

const server = createServer({});

server.get("/api/labels", (schema, request) => {
  if (!request.queryParams?.q) return labels;

  const result = fuzzysort.go<Label>(request.queryParams?.q, labels, {
    key: "label",
  });

  return result.map((item) => item.obj);
});

export const getLabels = async (q = ""): Promise<Label[]> => {
  const response = await fetch(`/api/labels?q=${q}`);

  const data = await response.json();

  return data;
};
