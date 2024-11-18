import { connect, connection} from 'mongoose';

connect('mongodb://localhost/realticsDB');

export default connection;