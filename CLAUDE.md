# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + TypeScript + Vite project with UnoCSS for styling and ESLint for code quality. The project uses conventional commits with automatic changelog generation.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (runs type checking first)
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm commit` - Interactive commit with conventional commit format (includes lint fix)

## Release Commands

- `pnpm release` - Create standard version release
- `pnpm release:patch/minor/major` - Create specific version type
- `pnpm release:alpha/beta/rc` - Create pre-release versions

## Tech Stack & Configuration

- **Vue 3** with `<script setup>` composition API
- **TypeScript** with strict configuration
- **Vite** as build tool and dev server
- **UnoCSS** for atomic CSS styling (imported in main.ts as 'virtual:uno.css')
- **ESLint** with @antfu/eslint-config for code quality
- **Husky** for git hooks with lint-staged

## Architecture Notes

- Entry point: `src/main.ts` creates Vue app and mounts to #app
- Main component: `src/App.vue` (currently minimal template)
- Global styles: `src/style.css`
- UnoCSS config: `uno.config.ts` (minimal setup)
- TypeScript config uses project references with separate app and node configs

## Important Patterns

- Use `<script setup lang="ts">` for Vue components
- UnoCSS classes are available for styling
- Conventional commits are enforced via commitizen
- Lint-staged runs on all staged files before commits
