# Redis Connection Checker

A simple and user-friendly tool to test Redis server connections and display basic information.

## Features

- Redis server connection testing
- Server version display
- Uptime information
- Connected clients count
- Used memory amount
- Colored console output
- Easy to use Windows executable
- Automatic dependency installation

## Quick Start

### Windows Users

1. Download the latest release from the [Releases](https://github.com/azelwashere/redis-checker/releases) page
2. Extract the downloaded zip file
3. Double click on `start.bat` to run the program
   - If Node.js is not installed, you'll be prompted to install it
   - Required packages will be installed automatically

### Manual Installation (Alternative Method)

1. Install Node.js (https://nodejs.org)
2. Clone this repository:
```bash
git clone https://github.com/yourusername/redis-checker.git
cd redis-checker
```

3. Install dependencies:
```bash
npm install
```

4. Run the program:
```bash
npm start
```

## Usage

The program will ask for the following information:
- Redis host (default: localhost)
- Port number (default: 6379)
- Password (default: none)

## Requirements

- Node.js 14+ (will be prompted to install if not present)
- Windows OS
- Internet connection (for first-time package installation)

## License

MIT License - feel free to use this project as you wish.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
