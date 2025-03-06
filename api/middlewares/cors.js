import cors from 'cors'

const allowedOrigins = [
    'http://localhost:5173',
];

export function corsMiddleware() {
    const CORS_OPTIONS = {
        origin: allowedOrigins,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        //credentials: true
    }

    return cors(CORS_OPTIONS)
}