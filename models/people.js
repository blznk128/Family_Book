module.exports = (sequelize, DataTypes) => {
    let Person = sequelize.define("Person", {
        first_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_Name: {
            type: DataTypes.STRING,
        }
    });

    Person.associate = (models) => {
        Person.hasMany(models.Secret, {
            onDelete: "cascade",
        });
    };

    return Person;
}