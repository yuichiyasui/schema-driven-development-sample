
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  // schema: "../api/graphql/graph/schema.graphqls",
  schema: "http://localhost:4002/graphql",
  documents: "src/**/*.graphql",
  generates: {
    "__generated__/graphql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
