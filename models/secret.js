module.exports = (sequelize, DataTypes) => {
    let Secret = sequelize.define("Secret", {
        secret: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Secret.associate = (models) => {
        Secret.belongsTo(models.Person, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Secret;
}