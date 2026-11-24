import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextVitals,
  { ignores: ['.next/**', 'out/**', 'worker/**', 'node_modules/**', 'next-env.d.ts'] }
];

export default config;
