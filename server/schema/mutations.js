const graphql = require('graphql');
const { GraphQlObjectType, GraphQlString } = graphql;
const UserType = require('./types/user_type');

const mutation = new GraphQlObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQlString },
        password: { type: GraphQlString }
      },
      resolve(parentValue, args, request) {}
    }
  }
});

module.exports = mutation;
