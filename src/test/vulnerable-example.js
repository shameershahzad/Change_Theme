// Intentionally vulnerable code for testing Sentra's real-data pipeline
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";

function runUserCommand(userInput) {
  return eval(userInput);
}

module.exports = { runUserCommand };
