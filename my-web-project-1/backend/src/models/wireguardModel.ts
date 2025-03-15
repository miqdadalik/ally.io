import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class WireGuard extends Model {
    public id!: number;
    public serverIp!: string;
    public sshKeyPath!: string;
    public username!: string;
}

WireGuard.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    serverIp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sshKeyPath: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'WireGuard',
    tableName: 'wireguard',
    timestamps: true,
});

export default WireGuard;