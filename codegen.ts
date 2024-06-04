import type { CodegenConfig } from '@graphql-codegen/cli';
import { GRAPHQL_ENDPOINT } from './src/constants/configConstants';

const config: CodegenConfig = {
  schema: GRAPHQL_ENDPOINT,
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/generated.ts': {
      plugins: ['typescript'],
    },
  },
};

export default config;
