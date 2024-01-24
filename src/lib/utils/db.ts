import mongoose from 'mongoose';
import { SECRET_MONGO_URI } from '$env/static/private';
/* 
  0 - disconnected
  1 - connected
  2 - connecting
  3 - disconnecting
  4 - uninitialized
*/
const mongoConnection = {
  isConnected: 0,
};

export const dbConnect = async () => {
  console.log('SECRET_MONGO_URI', SECRET_MONGO_URI);
  if (mongoConnection.isConnected === 1) {
    console.log('ya estabamos conectados');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      console.log('usando conexion existente');
      return;
    }

    await mongoose.disconnect();
  }
  await mongoose.connect(SECRET_MONGO_URI ?? '', { dbName: 'pos_digital', });
  mongoConnection.isConnected = 1;
  console.log('conectado a mongodb', SECRET_MONGO_URI ?? '');
};

export const dbDisconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;
  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log('desconectado de mongodb');
};
