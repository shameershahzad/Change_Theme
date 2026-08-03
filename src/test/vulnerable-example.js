// Intentionally vulnerable code for testing Sentra's real-data pipeline
const AWS_SECRET_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE1234567890ABCD";

function connectToDatabase(userInput) {
  const query = "SELECT * FROM users WHERE username = '" + userInput + "'";
  return query;
}

module.exports = { connectToDatabase };
