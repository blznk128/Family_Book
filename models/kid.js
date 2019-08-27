module.exports = (sequelize, DataTypes) => {
    let Kid = sequelize.define("Kid", {
        kid_Name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Kid.associate = (models) => {
        Kid.belongsTo(models.Person, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Kid;
}