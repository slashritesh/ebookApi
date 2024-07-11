declare namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV?: 'development' | 'production' | 'test'
      ACCESS_TOKEN_SECRET? : string
      ACCESS_TOKEN_EXPIRY? : string
      REFRESH_TOKEN_SECRET? : string
      REFRESH_TOKEN_EXPIRY? : string
      MONGO_URL? : string
      
      CLOUDINARY_API_KEY ?: string
      CLOUDINARY_API_SECRET ?: string
      CLOUDINARY_CLOUD_NAME ?: string
    }


  }
  