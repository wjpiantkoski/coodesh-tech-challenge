import * as path from "path";
import {config as dotenvConfig} from 'dotenv'

dotenvConfig()

export const NODE_PATH = path.resolve(__dirname)
export const SERVER_PORT = process.env.SERVER_PORT || 3000