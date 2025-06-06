import { SquareClient } from "square";

// Square client config
const config = {
  environment: process.env.NODE_ENV,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
};

// Configure instance of Square client
const defaultClient = new SquareClient(config);

export default defaultClient;
