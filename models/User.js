const User = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User',
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users',
    });

  UserModel.associate = (models) => {
    UserModel.belongsTo(models.BlogPost, {
      foreignKey: 'id', as: 'post',
    });
  };

  return UserModel;
};

module.exports = User;
