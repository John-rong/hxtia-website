import 'dotenv'

declare module 'detenv'{
    export interface DotenvParseOutput {
        VITE_HOST : string
        VITE_PORT : number
        VITE_BASE_URL : string
        VITE_PROXY_DOMAIN : string
    }
}