exports.handler = async (event) => {
  // This simple test function ignores Discord and just returns a message
  const testCode = event.queryStringParameters?.code || 'none';
  
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: `Function is working! Received code: ${testCode}` })
  };
};
