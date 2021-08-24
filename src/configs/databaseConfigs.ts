import { ConnectionOptions, getConnectionOptions, createConnection } from "typeorm";
import { CreateUsers1623957922252 } from "../database/migrations/1626667841903-CreateUsers";
import User from "../entities/User";

let ormconfig: ConnectionOptions;

(async () => {
    ormconfig = await getConnectionOptions();
    
    Object.assign(ormconfig, {
        entities: [
            User
        ],
        migrations: [
            CreateUsers1623957922252
        ]
    });
})();

export {
    ormconfig
};
