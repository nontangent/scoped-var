import { resolve } from 'path';
import * as sassTrue from 'sass-true';
import * as glob from 'glob';
 
describe('Scoped Var', () => {
  const sassTestFiles = glob.sync(resolve(process.cwd(), 'tests/**/*.spec.scss'))
  sassTestFiles.forEach(file => sassTrue.runSass({ file }, { describe, it }))
})
