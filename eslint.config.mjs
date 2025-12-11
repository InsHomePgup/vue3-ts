import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'package.json',
    'pnpm-lock.yaml',
    'pnpm-workspace.yaml',
    '.pnpm-debug.log',
  ],
})
