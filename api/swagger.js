export default
{
  "swagger": "2.0",
  "info": {
    "description": "A social network with NodeJs",
    "version": "1.0.0",
    "title": "MySocial",
    "contact": {
      "email": "rafavilomar@gmail.com"
    }
  },
  "host": "localhost:3000",
  "basePath": "/api",
  "tags": [
    {
      "name": "user",
      "description": "Funcition about users"
    }
  ],
  "schemes": [
    "http"
  ],
  "paths": {
    "/user": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Get user list",
        "description": "Get user list",
        "operationId": "listUser",
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      },
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Create user",
        "description": "Create user in app",
        "operationId": "createUser",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Created user object",
            "required": true,
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          }
        }
      }
    }
  },
  "securityDefinitions": {
    "petstore_auth": {
      "type": "oauth2",
      "authorizationUrl": "http://petstore.swagger.io/oauth/dialog",
      "flow": "implicit",
      "scopes": {
        "write:pets": "modify pets in your account",
        "read:pets": "read your pets"
      }
    },
    "api_key": {
      "type": "apiKey",
      "name": "api_key",
      "in": "header"
    }
  },
  "definitions": {
    "User": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "password": {
          "type": "string"
        }
      }
    },
    "ApiResponse": {
      "type": "object",
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "type": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  }
}