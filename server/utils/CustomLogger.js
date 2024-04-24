import winston, { transports } from "winston";
import 'winston-daily-rotate-file';
import fs from "fs";

const { combine, timestamp, printf } = winston.format;

const myFormat = printf(({ level, message, timestamp, url, method, body, userId }) => {
    return `${timestamp} | ${level} | ${message || ""} | url: ${url} | method: ${method} | body: ${JSON.stringify(body)} | userId: ${userId || ""} | \n`;
});

const transport = new transports.DailyRotateFile({
    dirname: `logs/${getDirName()}`,
    filename: '%DATE%.txt',
    datePattern: 'YYYY-MM-DD', // rotates every day
});

function getDirName() { // returns current YYYY-MM
    const curDate = new Date();
    const curMonth = ("0" + (curDate.getMonth() + 1)).slice(-2);
    const curYYYYMM = `${curDate.getFullYear()}/${curMonth}`;
    return curYYYYMM;
}

transport.on('rotate', () => {
    // Each time there is a file rotation (= every day with this date pattern), if there is not yet
    // a folder with the current name = if the month changed, then create a new transport and
    // set its directory to the new month:
    if (!fs.existsSync(`logs/${getDirName()}/`)) {
        transport.dirname = `logs/${getDirName()}`;
    }
});

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
        // label({ label }),
        timestamp({
            // format: 'YYYY-MM-DD hh:mm:ss.SSS A',
            format: 'YYYY-MM-DD hh:mm:ss A',
        }),
        myFormat
    ),
    transports: [transport],
});

export default logger;
