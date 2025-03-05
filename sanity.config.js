import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'


export default defineConfig({
  name: 'default',
  title: 'my-handbook',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [structureTool(), visionTool(),codeInput(),vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
