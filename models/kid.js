module.exports = (sequelize, DataTypes) => {
    let Kid = sequelize.define("Kid", {
        kidName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Kid.associate = (models) => {
        Kid.belongsTo(models.Person, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Kid;
}