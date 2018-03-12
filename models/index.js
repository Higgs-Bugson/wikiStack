const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});
//the setting our logging to false makes it so
//everything is not logged onto our console when we sync

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { 
            isUrl: true
        },
        get() {
            const route = this.getDataValue("urlTitle");
            return this.getDataValue('/wiki/') + urlTitle;
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
  });

  const User = db.define('user', {
      name: {
          type: Sequelize.STRING,
          allowNull: false,
          isAlpha: true
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: { 
              isEmail: true
          }
      }
  });
module.exports = {
    Page: Page,
    User: User,
    db: db
};
