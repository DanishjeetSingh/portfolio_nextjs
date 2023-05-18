import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'

const config = defineConfig({
    projectId: '8x2djiv4',
    dataset: 'production',
    title: 'portfolio',
    apiVersion: "2023-05-17",
    basePath: "/admin",
    plugins: [deskTool()],

})

export default config