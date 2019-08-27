module.exports = (sequelize, DataTypes) => {
    let Person = sequelize.define("Person", {
        // id: {
        //     type: DataTypes.UUID,
        //     primaryKey: true,
        //     defaultValue: DataTypes.UUIDV4,
        //     allowNull: false
        // },
        first_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_Name: {
            type: DataTypes.STRING,
            // allowNull: false
        }
    });

    Person.associate = (models) => {
        Person.hasMany(models.Kid, {
            onDelete: "cascade",
        });
    };

    return Person;
}