'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: 
      {
        productName: 'Cat',
        price: 999
      },
  };
};
