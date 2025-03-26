#!/usr/bin/env node

const { createClient } = require('redis');
const chalk = require('chalk');
const readlineSync = require('readline-sync');

async function checkRedisConnection(host, port, password) {
    const client = createClient({
        url: `redis://${password ? `:${password}@` : ''}${host}:${port}`,
        socket: {
            connectTimeout: 5000
        }
    });

    try {
        await client.connect();
        const info = await client.info();
        
        // Parse Redis information
        const infoObj = {};
        info.split('\r\n').forEach(line => {
            if (line.includes(':')) {
                const [key, value] = line.split(':');
                infoObj[key] = value;
            }
        });

        console.log(chalk.green('\n[+] Redis connection successful!'));
        console.log(chalk.cyan('\nRedis Information:'));
        console.log(`Version: ${infoObj.redis_version}`);
        console.log(`Uptime: ${infoObj.uptime_in_seconds} seconds`);
        console.log(`Connected Clients: ${infoObj.connected_clients}`);
        console.log(`Used Memory: ${infoObj.used_memory_human}`);

        return true;
    } catch (error) {
        console.log(chalk.red('\n[-] Redis connection failed!'));
        console.log(chalk.yellow(`Error: ${error.message}`));
        return false;
    } finally {
        await client.quit();
    }
}

async function main() {
    console.clear();
    console.log(chalk.cyan('=== Redis Connection Checker ===\n'));

    while (true) {
        const host = readlineSync.question('Redis host (default: localhost): ', {
            defaultInput: 'localhost'
        }).trim();

        const port = readlineSync.question('Port (default: 6379): ', {
            defaultInput: '6379'
        }).trim();

        const password = readlineSync.question('Password (default: none): ', {
            defaultInput: ''
        }).trim() || null;

        console.log(chalk.yellow('\nTesting connection...'));
        await checkRedisConnection(host, port, password);

        const again = readlineSync.question('\nDo you want to test another server? (y/n): ', {
            defaultInput: 'n'
        }).trim().toLowerCase();

        if (again !== 'y') break;
    }

    console.log(chalk.green('\nProgram terminated.'));
}

main().catch(console.error); 