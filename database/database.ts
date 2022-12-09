import { connect } from 'mongoose';

export class database {

    private readonly dbURI = 'mongodb://localhost:27017/workshopBDD';

    public dbConnect() {
        try {
            connect(this.dbURI);
        } catch(e) {
            console.log(e);
        }
    }
}
