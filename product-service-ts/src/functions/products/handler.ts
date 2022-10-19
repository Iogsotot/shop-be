import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { catsData } from '../../../mocks'

import schema from './schema';

const products: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  return formatJSONResponse({
    statusCode: 200,
    body: {
      ...catsData
    },
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "https://dy2u25c90hnvg.cloudfront.net",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
  });
};

export const main = middyfy(products);
