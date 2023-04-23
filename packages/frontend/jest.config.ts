import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/src'
})

// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  testRegex: '^.+.(test|spec).tsx?$',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/importJestDOM.ts'],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    ...paths
  }
}
export default config
