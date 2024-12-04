const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 2410;

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CASET',
      version: '1.0.0',
      description: 'API documentation for CASET',
    },
    servers: [
      {
        url: 'http://localhost:8080', // Adjust this if you're deploying elsewhere
      },
    ],
  },
  apis: ['./app.js'], // Files to scan for JSDoc comments
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API route example
app.get('/home', (req, res) => {
  /**
   * @swagger
   * /home:
   *    get:
   *        description: Home Page , Returns the people
   *        parameters: [
   *            { "name": "profileId", "in": "formData", "required": true, "type": "string" }
   *        ]
   *        responses:
   *            401:
   *                description: Not Authorized, Has to login first. <b>Route to Login Screen</b>
   *            206:
   *                description: Success. <b>Fetch list of chats LIMIT 10</b>
   *       
   */
  // res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
