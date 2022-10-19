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
    }
  });
};

export const main = middyfy(products);
