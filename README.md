# Braze Web SDK Integration 
This repository provides a basic website layout and structure to simply integrate or create a connection with Braze and to start logging attributes, events and purchases. 

## Requirements
```
Node.js 8+
Braze App Identifier Key
Braze SDK Endpoint
```

## Installation

1. Clone this repo:

```
git clone https://github.com/jpalzen/braze-web-integration.git
```

2. Navigate to the root directory and install package dependencies:

```
npm install
```

## Usage

1. Create a `./.env` file and add the following environment variables:

```
REACT_APP_BRAZE_API_KEY = "your_API_key_here"
REACT_APP_BRAZE_ENDPOINT = "the_endpoint_here"
```

2. Run the app in development mode:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

Verify that the Braze SDK is initializing successfully in the web browser console. 

## Other available scripts 

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Get in touch

Please feel free to get in touch for advice, help and collaboration. Happy coding!

## Contributing

Feel free to request or suggest new features or code changes yourself as well!