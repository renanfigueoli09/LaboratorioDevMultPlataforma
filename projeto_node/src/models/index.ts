import db from "../config/banco";
const Agendamentos = db.sequelize.define("agendamentos", {
  nome: {
    type: db.DataTypes.STRING,
  },
  telefone: {
    type: db.DataTypes.STRING,
  },
  origem: {
    type: db.DataTypes.STRING,
  },
  data_contato: {
    type: db.DataTypes.DATE,
  },
  observacao: {
    type: db.DataTypes.TEXT,
  },
});
export default Agendamentos;
