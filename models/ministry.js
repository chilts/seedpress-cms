module.exports = function(sequelize, DataTypes) {
  const Ministry = sequelize.define('Ministry', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    text: DataTypes.TEXT,
    status: DataTypes.STRING,
    churches: { type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: [] }
  });
  return Ministry;
};