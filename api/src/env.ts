import * as path from "path";
import {config as dotenvConfig} from 'dotenv'

dotenvConfig()

export const NODE_PATH = path.resolve(__dirname)
export const SERVER_PORT = process.env.SERVER_PORT || 3000

export const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE
export const MYSQL_USER = process.env.MYSQL_USER
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
export const MYSQL_HOST = process.env.MYSQL_HOST