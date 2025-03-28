const express = require("express");
const app = express();
const winston = require("winston");

// Winston Logger setup
const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "calculator-microservice" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    );
}

// Arithmetic operations
//add
const add = (n1, n2) => n1 + n2;
//Multiply
const multiply = (n1, n2) => n1 * n2;
//subtract
const subtract = (n1, n2) => n1 - n2;
//divide
const divide = (n1, n2) => {
    if (n2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return n1 / n2;
};

// Utility function to validate numbers
const validateNumbers = (n1, n2) => {
    if (isNaN(n1)) {
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
};

// Generic function to handle operations
const handleOperation = (req, res, operation, operationFunc) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        validateNumbers(n1, n2);

       // logger.info(`Received request from ${req.ip}: ${req.method} ${req.originalUrl}`);
       logger.info(`New ${operation} operation requested: ${n1} ${operation} ${n2}`);

        const result = operationFunc(n1, n2);
        res.status(200).json({ statusCode: 200, operation, data: result });
    } catch (error) {
        logger.error(error.message);
        res.status(500).json({ statusCode: 500, message: error.message });
    }
};

// Define API endpoints
app.get("/add", (req, res) => handleOperation(req, res, "addition", add));
app.get("/subtract", (req, res) => handleOperation(req, res, "subtraction", subtract));
app.get("/multiply", (req, res) => handleOperation(req, res, "multiplication", multiply));
app.get("/divide", (req, res) => handleOperation(req, res, "division", divide));

// Server setup
const port = 3040;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
